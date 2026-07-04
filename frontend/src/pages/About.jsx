import React from "react";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "40px",
        background: "#1f1f23",
        borderRadius: "20px",
        color: "white",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
          color: "#f97316",
        }}
      >
        About Me
      </h1>

      <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        Suman Kumari
      </h2>

      <h3 style={{ color: "#d1d5db", marginBottom: "25px" }}>
        B.Tech | Electronics & Communication Engineering
      </h3>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#cbd5e1",
        }}
      >
        Hello! I'm <b>Suman Kumari</b>, a B.Tech student in Electronics &
        Communication Engineering at the National Institute of Technology
        Calicut (NIT Calicut).
      </p>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#cbd5e1",
          marginTop: "15px",
        }}
      >
        I am passionate about Full Stack Web Development, MERN Stack,
        Artificial Intelligence, Machine Learning, and Software Development.
      </p>

      <hr
        style={{
          margin: "35px 0",
          border: "1px solid #333",
        }}
      />

      <h2 style={{ color: "#f97316" }}>Education</h2>

      <p style={{ fontSize: "18px" }}>
        National Institute of Technology Calicut (NIT Calicut)
      </p>

      <p style={{ color: "#bdbdbd" }}>
        B.Tech - Electronics & Communication Engineering
      </p>

      <hr
        style={{
          margin: "35px 0",
          border: "1px solid #333",
        }}
      />

      <h2 style={{ color: "#f97316" }}>Skills</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Git",
          "GitHub",
          "REST API",
        ].map((skill) => (
          <span
            key={skill}
            style={{
              background: "#27272a",
              padding: "10px 18px",
              borderRadius: "25px",
              color: "#fff",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <hr
        style={{
          margin: "35px 0",
          border: "1px solid #333",
        }}
      />

      <h2 style={{ color: "#f97316" }}>Projects</h2>

      <p style={{ fontSize: "18px", color: "#cbd5e1" }}>
        • ShopNest - MERN Stack E-commerce Website
      </p>

      <p style={{ fontSize: "18px", color: "#cbd5e1" }}>
        • Product Management Dashboard
      </p>

      <hr
        style={{
          margin: "35px 0",
          border: "1px solid #333",
        }}
      />

      <h2 style={{ color: "#f97316" }}>Contact</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <a
          href="mailto:sumanmahato2715@gmail.com"
          style={{
            textDecoration: "none",
            background: "#ea4335",
            color: "white",
            padding: "12px 22px",
            borderRadius: "10px",
          }}
        >
          📧 Gmail
        </a>

        <a
          href="https://github.com/sumanmahato2715-blip"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            background: "#24292e",
            color: "white",
            padding: "12px 22px",
            borderRadius: "10px",
          }}
        >
          💻 GitHub
        </a>
      </div>

      <p
        style={{
          marginTop: "40px",
          color: "#888",
        }}
      >
        © 2026 Suman Kumari | ShopNest Portfolio
      </p>
    </div>
  );
};

export default About;