import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../Payment/CheckOutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>MediCamp||Payment</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-Cinzel text-orange-900 text-center mt-10 font-bold ">
          Payment
        </h1>
        <p className="text-xl font-poppins text-center">
          Please Pay For Joining Camp
        </p>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
