import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import configData from '../../jsconfig.json';

export default function CheckoutForm({ id, price }) {
    console.log("This is q id ->",id);
    console.log("This is amount ->",price);
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) return;

        const clientSecret = new URLSearchParams(window.location.search).get("client_secret");

        if (!clientSecret) return;

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            if (paymentIntent.status === "succeeded") {
                setMessage("Your payment succeeded");
                alert("CALLING");
                handleSuccessfulPayment(id, price); // Call with id and price
            } else {
                setMessage("Unexpected error occurred");
            }
        });
    }, [stripe, elements, id, price]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: `${configData.HOME_PAGE}/payment-succeed` }
        });

        if (error && (error.type === "card_error" || error.type === "validation_error")) {
            setMessage(error.message);
        } else if (!error) {
            alert("ANOTHER CALL");
            handleSuccessfulPayment(id, price);
        }

        setIsLoading(false);
    };

    const handleSuccessfulPayment = async (id, price) => {
        alert("CALLED ********");
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

    const paymentElementOptions = { layout: "tabs" };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <p className="text-black mb-4">Complete your payment here!</p>
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button className='bg-black rounded-xl text-white p-2 mt-6 mb-2'
                    disabled={isLoading || !stripe || !elements} aria-busy={isLoading}>
                {isLoading ? "Loading..." : "Pay now"}
            </button>
            {message && <div>{message}</div>}
        </form>
    );
}
