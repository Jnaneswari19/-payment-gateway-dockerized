// docs/sdk/checkout.js
const express = require('express');
const app = express();

app.get('/checkout.js', (req, res) => {
  res.type('application/javascript');
  res.send(`
    window.Checkout = {
      open: function(opts) {
        alert("Checkout Popup: Order " + opts.orderId + " Amount " + opts.amount + " " + opts.currency);
      }
    };
  `);
});

app.listen(5000, () => console.log("SDK server running on http://localhost:5000"));
