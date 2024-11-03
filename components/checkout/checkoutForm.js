import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import configData from '../../jsconfig.json';

export default function CheckoutForm({ id, price }) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) return;

        const clientSecret = new URLSearchParams(window.location.search).get(
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        );

        if (!clientSecret) return;

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            if (paymentIntent.status === "succeeded") {
                setMessage("Your payment succeeded");
                handleSuccessfulPayment(); // Call the function after successful payment
            } else {
                setMessage("Unexpected error occurred");
            }
        });
    }, [stripe]);

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
            handleSuccessfulPayment(); // Call the function if payment is successful
        }

        setIsLoading(false);
    };

    const handleSuccessfulPayment = async () => {
        try {
            await axios.get(`${configData.SERVER_URL}/questionaire/api/payment-succeed`, {
                params: {
                    id,
                    price
                }
            });
            console.log("Successfully called payment-succeed endpoint.");
        } catch (error) {
            console.error("Error calling payment-succeed endpoint:", error);
        }
    };

    const paymentElementOptions = {
        layout: "tabs"
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <p className="text-black mb-4">Complete your payment here!</p>
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button className='bg-black rounded-xl text-white p-2 mt-6 mb-2'
                    disabled={isLoading || !stripe || !elements}>
                {isLoading ? "Loading..." : "Pay now"}
            </button>
            {message && <div>{message}</div>}
        </form>
    );
}
