import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import { AuthContext } from "../context/AuthContext";

const Checkout = () => {
  const { user } = useContext(AuthContext);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleCheckout = async () => {
    console.log("PLACE ORDER CLICKED");

    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    if (!user.token) {
      alert("Login session expired. Please login again.");
      navigate("/login");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      console.log("Sending order to Render backend...");

      const response = await fetch(
        "https://shopnest-ecom-mern-clean.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            items: cartItems,
            totalAmount: totalPrice,
            address: {
              fullName: user.name || "Suman Kumari",
              street: "Demo Street",
              city: "Kozhikode",
              postalCode: "673001",
              country: "India",
            },
            paymentId: "DEMO_" + Date.now(),
          }),
        }
      );

      console.log("Response Status:", response.status);

      const data = await response.json();

      console.log("Response Data:", data);

      if (response.ok) {
        alert("Payment Successful! Order Placed Successfully!");

        dispatch(clearCart());

        navigate("/ordersuccess");
      } else {
        alert(data.message || "Order Failed");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Server Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Checkout</h2>

      <p>Total Items: {cartItems.length}</p>

      <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>

      <button
        type="button"
        onClick={handleCheckout}
        style={{
          padding: "12px 25px",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "15px",
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;