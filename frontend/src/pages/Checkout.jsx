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

  const handleCheckout = () => {
    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    alert("Demo Order Placed Successfully!");

    dispatch(clearCart());

    navigate("/ordersuccess");
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