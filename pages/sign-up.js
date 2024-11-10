import React, { useState } from "react";
import axios from "axios";
import zxcvbn from "zxcvbn"; // Password strength checker library

import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

import configData from "../jsconfig.json";

const checkUsernameExist = async (username) => {
    const url = `${configData.SERVER_URL}/user/api/id?username=${username}&password`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        // check if the response contains a user object
        if (data.username) {
            return true;
        } else {
            // user does not exist
            return false;
        }
    } catch (error) {
        // handle any errors
        console.error(error);
        return false;
    }
};

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

        checkUsernameExist(formData.username)
            .then((exists) => {
                if (exists) {
                    MySwal.fire({
                        title: "User Exist!!!",
                        text: "Please choose another username",
                        icon: "info",
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                    });
                } else if (formData.password !== formData.confirmPassword) {
                    setError("Passwords do not match");
                } else if (isPasswordComplex(formData.password)) {
                    axios
                        .post(`${configData.SERVER_URL}/user/api/save`, {
                            username: formData.username,
                            password: formData.password,
                        })
                        .then((response) => {
                            console.log(response);
                            MySwal.fire({
                                title: "You have been signed up!!!",
                                text: "You will be directed to the email verification",
                                icon: "success",
                                timer: 5000,
                                timerProgressBar: true,
                                showConfirmButton: true,
                            });
                            window.location.href = "/email-sent";
                        })
                        .catch((error) => {
                            console.log(error);
                            alert("Something is wrong");
                        });
                } else {
                    setError("Password is not complex enough");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const isPasswordComplex = (password) => {
        // Define password complexity rules
        const minPasswordLength = 8;
        const passwordStrength = zxcvbn(password);

        return (
            password.length >= minPasswordLength &&
            passwordStrength.score >= 3 // You can adjust the score threshold as needed
        );
    };

    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Sign Up" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/">
                                <a>
                                    <img src="/images/logo.png" alt="Logo" />
                                </a>
                            </Link>
                            <p>Create a new account</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required

                                />
                                <small  style={{ textAlign: 'left', display: 'block' }} className="form-text text-muted ">
                                    Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters.
                                </small>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="ConfirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    title="Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters."
                                />
                            </div>
                            {error && <div>{error}</div>}
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </form>

                        <div className="foot">
                            <p>
                                Already have an account yet? <Link href="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Signup;
