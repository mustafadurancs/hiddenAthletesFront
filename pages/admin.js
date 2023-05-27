import React, {useState} from 'react';

import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';
 
const LoginAdmin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `http://localhost:8080/user/api/id?username=${username}&password=${password}`
        );
        const data = await response.json();
        console.log(data);
        alert(data.username);
        if ( data.username=="admin@hiddenathletes.com" ) {
            alert("OK");
            localStorage.setItem("id", data.username);
            setIsAuthenticated(true);
            window.location.href = "/dashboard";
        }
        else{
            window.location.href = "/";
        }

    };




    return (
        <>


            <PageBanner pageTitle="Admin Login" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/">
                                <a><img src="/images/logo.png" /></a>
                            </Link>
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
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>


                    </div>
                </div>
            </div>
 

        </>
    );
};

export default LoginAdmin;