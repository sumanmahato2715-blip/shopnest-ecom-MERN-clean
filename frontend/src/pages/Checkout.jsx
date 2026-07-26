const bypassPayment = async () => {
  try {
    console.log("Saving order...");

    const saveOrderRes = await fetch(
      "https://shopnest-ecom-mern-clean-production.up.railway.app/api/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          items: cartItems,
          totalAmount: totalPrice,
          address,
          paymentId: "bypass_txn_" + Date.now(),
        }),
      }
    );

    console.log("Status:", saveOrderRes.status);

    const data = await saveOrderRes.json();
    console.log("Response:", data);

    if (saveOrderRes.ok) {
      alert("Demo Payment Successful!");

      dispatch(clearCart());

      navigate("/ordersuccess");
    } else {
      alert("Order Save Failed");
    }
  } catch (err) {
    console.error("Order Error:", err);
    alert("Order Error");
  }
};