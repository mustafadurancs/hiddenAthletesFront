import React, {useEffect, useState} from "react";
import {PaymentElement, useStripe, useElements} from "@stripe/react-stripe-js";


export default function CheckoutForm() {
    const stripe =  useStripe();
    const elements =  useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY //"payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
            setMessage(paymentIntent.status === "succeeded" ? "Your payment succeeded" : "Unexpected error occurred");
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {return_url: "/payment-succeed"}
        });

        if (error && (error.type === "card_error" || error.type === "validation_error")) {
            setMessage(error.message);
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <p className="text-black mb-4">Complete your payment here!</p>
            <PaymentElement id="payment-element" options={paymentElementOptions}/>
            <button className='bg-black rounded-xl text-white p-2 mt-6 mb-2'
                    disabled={isLoading || !stripe || !elements}>
                {isLoading ? "Loading..." : "Pay now"}
            </button>
            {message && <div>{message}</div>}
        </form>
    );
}
