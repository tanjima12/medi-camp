import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../Payment/CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51OHCPOEpZvWySofioWZbGYUnShY7esnCx0xdNR9FNjbATQlozQtohImGcv6ogKvGwL5vxlpDGImoLf4Gy3a05gne00HTBYCJ4S"
);

const Payment = () => {
  return (
    <div>
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
