import React, { useState } from "react";
import axios from "axios";

import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';


const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
        } else {
            axios
                .post("http://localhost:8080/user/api/save", formData)
                .then((response) => {
                    console.log(response);
                    window.location.href = "/login"; // handle successful signup here
                })
                .catch((error) => {
                    console.log(error);
                    // handle signup error here
                    alert("Something is wrong"+error);
                });
        }
    };
    {/*
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                {error && <div>{error}</div>}
                <button type="submit">Signup</button>
            </form>
        </div>
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
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       name="username"
                                       value={formData.username}
                                       onChange={handleChange}
                                       required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       name="password"
                                       value={formData.password}
                                       onChange={handleChange}
                                       required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="ConfirmPassword"
                                       name="confirmPassword"
                                       value={formData.confirmPassword}
                                       onChange={handleChange}
                                       required
                                />
                            </div>
                            {error && <div>{error}</div>}
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
};



export default Signup;
