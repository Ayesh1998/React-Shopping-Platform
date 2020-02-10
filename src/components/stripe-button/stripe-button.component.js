import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButn = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = "pk_test_5eMLEI2adDebG8GWv8kTWew100WqHrh41S";

 const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Paye Now"
      name="Ayesh Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Paye Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckoutButn;
