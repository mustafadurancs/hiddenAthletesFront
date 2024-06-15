import React, { useState } from "react";
import { useRouter } from 'next/router';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import axios from 'axios';
import configData from '../jsconfig.json';

const ForgotPasswordEdit = () => {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setMessage('');
            return;
        }

        try {
            const response = await axios.post(`${configData.SERVER_URL}/user/api/updatePass`, null, {
                params: { uuid: router.query.uu, password: password },
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200 && response.data === true) {
                setMessage('Password has been successfully reset.');
                setError('');
            } else {
                setError('Failed to reset password. Please try again.');
                setMessage('');
            }
        } catch (error) {
            setError('Failed to reset password. Please try again.');
            setMessage('');
        }
    };

    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Reset Password" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/">
                                <a><img src="/images/logo.png" alt="Logo" /></a>
                            </Link>
                            <p>Please enter your new password below.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ForgotPasswordEdit;
