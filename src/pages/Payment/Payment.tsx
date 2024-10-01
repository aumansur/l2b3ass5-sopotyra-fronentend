import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51NGG3MLgaxGVZfWQ9trb9G70qmemTAYXnPSUq95W9o8EZCJ9uOYBSOZ43HoxSUmPIILMaEWKRa7HY7O70MvlC7O800hihmqtOx"
);

const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
};

export default Payment;
