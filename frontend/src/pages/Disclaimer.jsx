import React from "react";

const Disclaimer = () => {
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
        Disclaimer
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.9" }}>
        Welcome to <strong>ShopNest</strong>. This website has been created as
        an academic and portfolio project by <strong>Suman Kumari</strong> to
        demonstrate practical skills in Full Stack Web Development using the
        MERN Stack.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>Project Purpose</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
        ShopNest is designed for learning, demonstration, and portfolio
        purposes. It showcases modern e-commerce functionality including user
        authentication, product management, shopping cart, wishlist, order
        management, admin dashboard, secure login, Cloudinary image upload, and
        online payment integration in a testing environment.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>Products & Content</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
        The products, images, prices, descriptions, and other information shown
        on this website are provided only for demonstration purposes. They do
        not represent a real online business or commercial store.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>Payments</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
        Payment functionality is configured only for testing and development.
        No real financial transactions are intended through this portfolio
        project.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>Copyright</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
        Any product names, trademarks, logos, or brand references displayed in
        this project belong to their respective owners and are used only for
        educational and demonstration purposes.
      </p>

      <hr style={{ margin: "30px 0", border: "1px solid #333" }} />

      <h2 style={{ color: "#f97316" }}>Developer Information</h2>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
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
        Thank you for visiting ShopNest. This project represents my learning
        journey and practical implementation of modern web development
        technologies.
      </p>
    </div>
  );
};

export default Disclaimer;