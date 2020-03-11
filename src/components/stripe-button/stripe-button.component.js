import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_lbxSuMyMSYmsmAvD8K12CkFS000s5L9pyH';

  const onToken = (token, addresses) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is  ZAR ${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
