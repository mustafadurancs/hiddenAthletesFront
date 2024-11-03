import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import configData from "../../jsconfig.json";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripeCheckout() {
    const [queryId, setQueryId] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const amount = 150; // Set dynamic amount if needed

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const q_id = params.get('q_id'); // Get the 'q_id' value from the URL
        if (q_id) {
            setQueryId(q_id);
        }

        if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
            console.error("Stripe publishable key is missing.");
            return;
        }

        fetch(`${configData.SERVER_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: [{}],
                amount, // using the amount variable
                email: "example@example.com",  // replace with dynamic value as needed
                productName: "Sample Product"  // replace with dynamic value
            }),
        })
            .then((res) => res.ok ? res.json() : Promise.reject("Network response was not ok"))
            .then((data) => setClientSecret(data.clientSecret))
            .catch((error) => console.error("Error fetching payment intent:", error));
    }, []);

    const appearance = { theme: 'stripe' };
    const options = { clientSecret, appearance };

    return (
        <div>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm id={queryId} price={amount} />
                </Elements>
            )}
        </div>
    );
}
