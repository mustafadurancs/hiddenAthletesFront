import React, {useState, useEffect} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
//import styled from 'styled-components';
import {useStripe, useElements} from "@stripe/react-stripe-js";



import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
import configData from "../../jsconfig.json";
//const Wrapper=styled.section``


export default function StripeCheckout() {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch(`${configData.SERVER_URL}/create-payment-intent`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                items: [{}],
                amount: 15,
                email: "1",
                productName: "2"
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

    const appearance = { theme: 'stripe' };

    const options = {clientSecret, appearance};


    return (
        <div>
            {/*
            {clientSecret && (
                <div>
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            )}
               */}
            {clientSecret && stripePromise && (<Elements stripe={stripePromise} options={{clientSecret}}>
                <CheckoutForm />
            </Elements>)}
        </div>
    );
}
