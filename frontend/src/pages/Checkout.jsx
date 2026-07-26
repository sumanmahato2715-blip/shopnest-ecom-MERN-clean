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
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleCheckout = async () => {
  if (!user) {
    alert("Please login first.");
    navigate("/login");
    return;
  }

  try {
    const response = await fetch(
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
          address: {
            street: "Demo Street",
            city: "Kozhikode",
          },
          paymentId: "DEMO_" + Date.now(),
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Order Saved Successfully!");

      dispatch(clearCart());

      navigate("/ordersuccess");
    } else {
      alert(data.message || "Order Failed");
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h2>Checkout</h2>

      <p>Total Items: {cartItems.length}</p>

      <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>

      <button onClick={handleCheckout}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;