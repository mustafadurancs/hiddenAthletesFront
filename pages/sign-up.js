import React, { useState } from "react";
import axios from "axios";

//import Navbar from "@/components/_App/NavbarOrg";
import NavbarStyleThree from "@/components/_App/NavbarStyleThree";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const checkUsernameExist = async (username) => {
    const url = `http://localhost:8080/user/api/id?username=${username}&password`;

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
                    //alert(`User ${formData.username} exists`);
                    MySwal.fire({
                        title: "User Exist!!!",
                        text: "Please choose another username",
                        icon: "info",
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                    });
                } else {

                    if (formData.password !== formData.confirmPassword) {
                        setError("Passwords do not match");
                    } else {
                        //alert(formData.password);
                        axios.post("http://localhost:8080/user/api/save",
                            {
                                "username": formData.username,
                                "password": formData.password
                            }
                            )
                            .then((response) => {
                                console.log(response);
                                MySwal.fire({
                                    title: "You have been signed up!!!",
                                    text: "You will be directed to login page",
                                    icon: "success",
                                    timer: 3000,
                                    timerProgressBar: true,
                                    showConfirmButton: true,
                                });
                                window.location.href = "/login";
                            })
                            .catch((error) => {
                                console.log(error);
                                alert("Something is wrong");
                            });
                    }
                }
            })
            .catch((error) => {
                console.error(error);
            });

    };


    return (
        <>
            <NavbarStyleThree />

            <PageBanner pageTitle="Sign Up" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/"><a><img src="/images/logo.png" /></a>
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
