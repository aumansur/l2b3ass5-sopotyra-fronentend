import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { toast } from "sonner";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string | null>(""); // Replace this with your fetched clientSecret
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      toast.error("Stripe is not initialized");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      toast.error("Stripe Card Element not available");
      return;
    }

    const { error: paymentMethodError } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (paymentMethodError) {
      setError(paymentMethodError.message || "Payment method creation failed.");
      return;
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret!, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: "Test User", // Replace with real name
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message || "Payment confirmation failed.");
    } else if (paymentIntent?.status === "succeeded") {
      toast.success("Payment succeeded!");
    }
  };
  const CardHandle = () => {
    console.log("clicked");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-md shadow-md bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="p-3 border rounded-md w-full"
          />
        </div>
        <button
          onClick={CardHandle}
          type="submit"
          disabled={!stripe || !clientSecret}
          className="w-full py-3 px-6 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300 ">
          Pay Now
        </button>
        {error && <p className="text-center text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;
