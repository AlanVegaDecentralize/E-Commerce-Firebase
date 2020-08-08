import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HDlIyLRiYQvUJcsrDB8p5THikhsAjZmI3onOJ1grzNn0WDzo9ld4MV88LnGRylqeE1FSGSBMpUOk9bR148XupFY00g3CsyCnA';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Tgthr Wear"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
