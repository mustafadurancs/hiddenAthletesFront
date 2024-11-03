import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Checkout from "../components/checkout/index";
import Footer from "@/components/_App/Footer";

const handleSuccessfulPayment = async (id, price) => {
    alert("CALLED FROM ANYWHERE********");
    console.log("CALLED FROM ANYWHERE********");
    debugger;
    alert(`${configData.SERVER_URL}/questionaire/api/payment-succeed`);
    try {
        console.log("Attempting to call payment-succeed endpoint...");
        const response = await axios.get(`${configData.SERVER_URL}/questionaire/api/payment-succeed`, {
            params: { id, price }
        });
        console.log("Response from payment-succeed endpoint:", response);
    } catch (error) {
        console.error("Error calling payment-succeed endpoint:", error);
    }
};
handleSuccessfulPayment(161,99);
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
