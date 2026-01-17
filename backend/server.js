const express = require('express');
const app = express();

app.get('/backend/health', (req, res) => {
  res.json({ status: "Backend is healthy" });
});

app.listen(8080, () => console.log("Backend running on port 8080"));
