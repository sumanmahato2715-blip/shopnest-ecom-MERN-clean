import React from "react";

const ReturnPolicy = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "40px",
        background: "#1f1f23",
        borderRadius: "20px",
        color: "#ffffff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      }}
    >
      <h1
        style={{
          color: "#f97316",
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "42px",
        }}
      >
        Return & Refund Policy
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.9" }}>
        Thank you for visiting <strong>ShopNest</strong>. This website has been
        developed by <strong>Suman Kumari</strong> as an academic and portfolio
        project to demonstrate MERN Stack development skills. Since this project
        is created for learning and demonstration purposes, the following return
        and refund policy applies.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>1. Demonstration Project</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
        ShopNest is not a commercial e-commerce platform. The products,
        categories, prices, and order details displayed on this website are
        intended solely for educational and portfolio demonstration.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>2. Orders & Returns</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
        Orders placed through this project are simulated for demonstration
        purposes only. Therefore, real product shipping, exchanges, returns, or
        refunds are not processed.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>3. Payment Information</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
        Payment functionality is integrated only in Sandbox/Test Mode for
        development and learning. No real financial transactions are processed
        through this application.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>4. Product Information</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
        Product names, descriptions, prices, ratings, and images are displayed
        only to demonstrate the functionality of an e-commerce application.
        They should not be considered actual commercial listings.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>5. Project Features</h2>

      <ul
        style={{
          fontSize: "17px",
          lineHeight: "2",
          paddingLeft: "25px",
        }}
      >
        <li>User Authentication</li>
        <li>Admin Dashboard</li>
        <li>Product Management</li>
        <li>Shopping Cart</li>
        <li>Wishlist</li>
        <li>Order Management</li>
        <li>Cloudinary Image Upload</li>
        <li>Razorpay Test Payment Integration</li>
      </ul>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>6. Contact</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.9" }}>
        <strong>Developer:</strong> Suman Kumari
        <br />
        <strong>Program:</strong> B.Tech – Electronics & Communication
        Engineering
        <br />
        <strong>Institute:</strong> National Institute of Technology Calicut
        (NIT Calicut)
        <br />
        <strong>Email:</strong> sumanmahato2715@gmail.com
        <br />
        <strong>GitHub:</strong> github.com/sumanmahato2715-blip
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          marginTop: "20px",
          fontStyle: "italic",
        }}
      >
        Thank you for exploring ShopNest. This project has been developed for
        academic learning and portfolio demonstration using the MERN Stack.
      </p>
    </div>
  );
};

export default ReturnPolicy;