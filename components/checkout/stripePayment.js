// stripePayment.js
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import configData from "../../jsconfig.json";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripeCheckout() {
    const [queryId, setQueryId] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [price, setPrice] = useState(150); // Dynamic amount, initialized as 150 (in cents)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const q_id = params.get('q_id'); // Get 'q_id' from the URL
        const queryPrice = params.get('price'); // Optional: retrieve 'price' from URL if available

        if (q_id) {
            setQueryId(q_id);
        }
        if (queryPrice) {
            setPrice(parseInt(queryPrice, 10));
        }

        // Ensure environment variable is set
        if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
            console.error("Stripe publishable key is missing.");
            return;
        }

        fetch(`${configData.SERVER_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: [{}],
                amount: price,  // Use dynamic price
                email: "example@example.com",  // replace with dynamic value as needed
                productName: "Sample Product"  // replace with dynamic value
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setClientSecret(data.clientSecret);
            })
            .catch((error) => {
                console.error("Error fetching payment intent:", error);
            });

    }, [price]); // Add price as dependency to update if price changes

    const appearance = { theme: 'stripe' };
    const options = { clientSecret, appearance };

    return (
        <div>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm queryId={queryId} price={price} /> {/* Pass props */}
                </Elements>
            )}
        </div>
    );
}
