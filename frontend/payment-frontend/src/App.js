import React from 'react';

function App() {
  const handlePay = () => {
    // Load SDK script dynamically
    const script = document.createElement('script');
    script.src = "http://localhost:5000/checkout.js"; // SDK server
    script.onload = () => {
      window.Checkout.open({
        amount: 50000,
        currency: "INR",
        orderId: "ord_test_123"
      });
    };
    document.body.appendChild(script);
  };

  return (
    <div style={{padding: "2rem"}}>
      <h1>Payment Gateway Demo</h1>
      <button onClick={handlePay}>Pay ₹500</button>
    </div>
  );
}

export default App;
