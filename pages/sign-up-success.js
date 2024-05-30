import React from "react";

import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

const SignupSuccess = () => {
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
                            <Link href="/login">
                                <a className="btn btn-primary">Go to Login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};

export default SignupSuccess;
