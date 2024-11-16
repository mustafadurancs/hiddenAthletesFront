import React, {useState} from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';

import configData from '../jsconfig.json';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

 
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `${configData.SERVER_URL}/user/api/id?username=${username}&password=${password}`
        );
        const data = await response.json();
        console.log(data);
        if (data.id && username == data.username && password == data.password) {
            localStorage.setItem("userName", data.username);
            localStorage.setItem("id", data.id);
            setIsAuthenticated(true);
            window.location.href = "/";
        }
        else{

            MySwal.fire({
                title: "User name or password is wrong",
                text: "You will be directed to landing page",
                icon: "error",
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: true,
            });

            window.location.href = "/";
        }

    };




    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Login" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/">
                                <a><img src="/images/logo.png" /></a>
                            </Link>
                            <p style={{color:'red'}}>Don't have an account yet? <span style={{fontWeight:'bolder'}}><Link href="/sign-up">Sign Up</Link></span></p>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <p><Link href="/forgot-password"><a>Forgot Password</a></Link></p>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        {/*
                        <div className="foot">
                            <p>or connect with</p>
                            <ul>
                                <li>
                                    <a href="https://www.mail.com/" target="_blank">
                                        <Icon.Mail />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        */}

                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    );
};

export default Login;