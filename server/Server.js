const stripe = require('stripe')('sk_test_51MzFX3SHbnqeH5ebApWL4QLFz28PV71qjDbyt7av0oT7V0gzLzyYdKJgqLTSF3eE7X4cul7aHKorZl0vDlaMMzjI00HHAnPY0e');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2022-11-15' }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51MzFX3SHbnqeH5ebI2zsVS37L6gmUaSIwBKTIemFaC4FhhNTShR0BnaR27hJPljY4s1KBTsV6OZQSrIxU4dodgB900IYfV7DIl'
  });
});
