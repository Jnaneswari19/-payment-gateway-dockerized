const express = require('express');
const app = express();

app.get('/sdk/pay', (req, res) => {
  res.json({ status: "Payment processed via SDK" });
});

app.listen(8082, () => console.log("SDK running on port 8082"));
