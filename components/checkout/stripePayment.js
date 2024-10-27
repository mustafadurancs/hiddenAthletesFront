import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import configData from "../../jsconfig.json";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
console.log(stripePromise);
export default function StripeCheckout() {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Ensure that the environment variable is correctly set
        if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
            console.error("Stripe publishable key is missing.");
            return;
        }
        console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        fetch(`${configData.SERVER_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: [{}],
                amount: 150,  // assuming amount is in cents (15.00 USD)
                email: "example@example.com",  // replace with dynamic value as needed
                productName: "Sample Product"  // replace with dynamic value
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                console.log(res.json());
                return res.json();
            })
            .then((data) => setClientSecret(data.clientSecret))
            .catch((error) => {
                console.error("Error fetching payment intent:", error);
            });
    }, []);

    const appearance = { theme: 'stripe' };
    const options = { clientSecret, appearance };

    return (
        <div>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}
