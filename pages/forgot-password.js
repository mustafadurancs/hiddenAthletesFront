import React, { useState } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import axios from 'axios';

import configData from '../jsconfig.json';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${configData.SERVER_URL}/user/api/sendPassEmail`, null, {
                params: { username: email },
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.status === 200) {
                setMessage('Password reset email sent successfully.');
                setError('');
            }
        } catch (error) {
            setError('Failed to send password reset email. Please try again.');
            setMessage('');
        }
    };

    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Forgot Password" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <a><img src="/images/logo.png" alt="Logo" /></a>
                            </Link>
                            <p>Please enter your email .</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Reset Password</button>

                            {message && <p className="success-message">{message}</p>}
                            {error && <p className="error-message">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ForgotPassword;
