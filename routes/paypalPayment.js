const express = require('express');
const router = express.Router();
const paypal = require('paypal-rest-sdk');

// Configure PayPal
paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET'
});

// Create payment
router.post('/create-payment', (req, res) => {
  const amount = req.body.amount;

  // Build PayPal payment request
  const payment = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: 'http://localhost:4444/execute-payment',
      cancel_url: 'http://localhost:4444/cancel-payment'
    },
    transactions: [{
      amount: {
        total: amount,
        currency: 'USD'
      },
      description: 'Payment for your order'
    }]
  };

  // Create PayPal payment
  paypal.payment.create(payment, (error, payment) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      // Redirect user to PayPal for payment approval
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
});

// Execute payment
router.get('/execute-payment', (req, res) => {
  const paymentId = req.query.paymentId;
  const payerId = req.query.PayerID;

  // Build PayPal payment execution request
  const paymentExecution = {
    payer_id: payerId
  };

  // Execute PayPal payment
  paypal.payment.execute(paymentId, paymentExecution, (error, payment) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      // Payment completed successfully
      console.log(payment);
      res.sendStatus(200);
    }
  });
});

// Cancel payment
router.get('/cancel-payment', (req, res) => {
  res.sendStatus(400);
});

module.exports = router;
