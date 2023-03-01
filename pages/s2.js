import React, { useState } from 'react';
import axios from 'axios';

import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/user/api/save', {
                username,
                password,
            });
            console.log(response.data);
            window.location.href = "/login";
        } catch (error) {
            console.error(error);
            alert(error);
        }
    };
    {/*
    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
*/}
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Sign Up" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/">
                                <a><img src="/images/logo.png" /></a>
                            </Link>
                            <p>Create a new account</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Email</label>
                                <input type="email" className="form-control"
                                       id="username"
                                       value={username}
                                       onChange={(event) => setUsername(event.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control"
                                       id="password"
                                       value={password}
                                       onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control"
                                       id="confirm-password"
                                       value={confirmPassword}
                                       onChange={(event) => setConfirmPassword(event.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>

                        <div className="foot">
                            <p>Already have an account yet? <Link href="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Signup;
