import React, { useState, useEffect } from "react";
import Navbar from "@/components/_App/Navbar";
import Checkout from "../components/checkout/index";
import Footer from "@/components/_App/Footer";
import configData from '../jsconfig.json';
import axios from "axios";

const PaymentSuccess = () => {
    const [queryId, setQueryId] = useState(null);
    const [amount, setAmount] = useState(null);

    const handleSuccessfulPayment = async (id, price) => {
        alert("CALLED FROM ANYWHERE********");
        console.log("CALLED FROM ANYWHERE********");
        debugger;
        alert(`${configData.SERVER_URL}/questionaire/api/payment-succeed`);
        debugger;

        try {
            console.log("Attempting to call payment-succeed endpoint...");
            const response = await axios.post(
                `${configData.SERVER_URL}/questionaire/api/payment-succeed`, 
                {}, // Empty data object, as we're using only query parameters
                {
                    params: { id, price }
                }
            );
            console.log("Response from payment-succeed endpoint:", response.data);
        } catch (error) {
            console.error("Error calling payment-succeed endpoint:", error);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const q_id = params.get('q_id'); // Get the 'q_id' value from the URL
        const amountQ = params.get('amount');
        
        if (q_id) setQueryId(q_id);
        if (amountQ) setAmount(amountQ);
    }, []);

    useEffect(() => {
        if (queryId && amount) {
            handleSuccessfulPayment(queryId, amount);
        }
    }, [queryId, amount]);

    return (
        <>
            <Navbar />
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-6">
                                    <div>
                                        <h1>PAYMENT SUCCESSFUL !!!</h1>
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
