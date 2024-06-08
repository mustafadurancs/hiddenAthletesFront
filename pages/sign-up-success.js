import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

const SignupSuccess = () => {
    const router = useRouter();
    const [var1, setVar1] = useState('');

    useEffect(() => {
        if (router.query.var1) {
            setVar1(router.query.name);
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
                            <p>Email: {name}</p> {/* Display the parsed var1 value */}
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
