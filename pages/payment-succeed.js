import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Checkout from "../components/checkout/index";
import Footer from "@/components/_App/Footer";

const PaymentSuccess = () => {
    return (
        <>
            <Navbar />
            <div className="main-banner" >

                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-6">

                                    <div>
                                        <h1>PAYMENT SUCCESSFULL !!!</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PaymentSuccess;
