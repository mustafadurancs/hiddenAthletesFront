import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
import configData from "../../jsconfig.json";

export default function StripeCheckout() {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch(`${configData.SERVER_URL}/checkout`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: [{}],
                amount: 10000,
                currency: "USD", // Replace with your desired currency
                description:"Some description",
                source: "Some source", // Replace with the desired status
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => setClientSecret(data.clientSecret))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const options = {
        clientSecret,
    };

    return (
        <div>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}
