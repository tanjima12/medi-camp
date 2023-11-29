import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// ... (other imports)

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const axiosSecure = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: Camps = [], refetch } = useQuery({
    queryKey: ["registerCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/joinCamp/?email=${user?.email}`);
      return res.data;
    },
  });
  const totalFees = Camps.reduce((total, item) => total + item.fees, 0);

  useEffect(() => {
    if (totalFees > 0) {
      axiosSecure
        .post("/create-payment-intent", { fees: totalFees })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalFees]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log("payment error", error);
        setError(error.message);

        return;
      } else {
        console.log("PaymentMethod", paymentMethod);
        setError(" ");
      }

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous",
            },
          },
        });

      if (confirmError) {
        console.log("confirmError");
      } else {
        console.log("paymentIntent", paymentIntent);

        if (paymentIntent.status === "succeeded") {
          console.log("transaction id", paymentIntent.id);
          setTransactionId(paymentIntent.id);

          const payment = {
            email: user.email,
            fees: totalFees,
            transactionId: paymentIntent.id,
            date: new Date(),
            registIds: Camps.map((item) => item._id),
            campIds: Camps.map((item) => item.campId),
            Venue: Camps.map((item) => item.venueLocation),
            campName: Camps.map((item) => item.campName),
            status: "pending",
          };

          const res = await axiosSecure.post("/payment", payment);

          if (res.data?.paymentResult?.insertedId) {
            await refetch();

            Swal.fire("Successfully Submitted");

            navigate("/dashboard/history");
          }
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
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
      />
      <Button
        type="submit"
        disabled={!stripe || !clientSecret || transactionId}
      >
        Pay
      </Button>
      <p>{error}</p>
      {transactionId && <p>Your transaction id:{transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;
