import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

import configData from '../jsconfig.json';

const SignupSuccess = () => {
    const router = useRouter();
    const [name, setName] = useState('');

    useEffect(() => {
        if (router.query.name) {
            setName(router.query.name);
            // Make API call when the username is available
            const approveUser = async () => {
                try {
                    let u_name = router.query.name.slice(0,-1);
                    console.log(u_name);
                    const response = await fetch(`${configData.SERVER_URL}/user/api/approve?username=${u_name}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    console.log('User approved:', data);
                } catch (error) {
                    console.error('Error approving user:', error);
                }
            };
            approveUser();
        }
    }, [router.query]);

    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Sign Up Successful" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/"><a><img src="/images/logo.png" alt="Logo" /></a></Link>
                            <p>Your account has been successfully created!</p>
                        </div>

                        <div className="text-center">
                            <p>Thank you for signing up. You can now log in using your new account.</p>
                            <p>Email: {name.slice(0,-1)}</p> {/* Display the parsed var1 value */}
                            <Link href="/login">
                                <a className="btn btn-primary">Go to Login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default SignupSuccess;
