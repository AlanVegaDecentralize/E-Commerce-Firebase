import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H';

  const onToken = () => {
    clearCart()
    alert("Payment succesful!")
  }

  // const onToken = token => {
  //   axios({
  //     url: 'payment',
  //     method: 'post',
  //     data: {
  //       amount: priceForStripe,
  //       token: token
  //     }
  //   })
  //     .then(response => {
  //       alert('Succesful payment!');
  //     })
  //     .catch(error => {
  //       console.log('Payment Error: ', JSON.parse(error));
  //       alert(
  //         'There was an issue with your payment! Please make sure you use the provided credit card information.'
  //       );
  //     });
  // };

  return (
    <>
      <StripeCheckout
        label='Pay Now'
        name='Wave-Mart Clothing LLC'
        billingAddress
        shippingAddress
        // image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </>
  )
};

const mapDispathToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispathToProps)(StripeCheckoutButton);