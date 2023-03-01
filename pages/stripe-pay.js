import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const result = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (result.error) {
            console.error(result.error.message);
        } else {
            console.log(result.paymentMethod);
            // Send payment method ID to server to complete payment
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
}
