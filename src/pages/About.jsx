import React from "react";
import "./Home.css"; // Reuse Home styles for consistency

function About() {
  return (
    <div className="home-container page-padding-fix">
      <section className="section-container" style={{ marginTop: "4rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* Avatar Area */}
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#fff",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            ME
          </div>

          {/* Bio Area */}
          <div style={{ maxWidth: "600px", textAlign: "center" }}>
            <h1
              className="section-title"
              style={{ fontSize: "3rem", marginBottom: "1rem" }}
            >
              About Me
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "var(--text-secondary)",
              }}
            >
              哇我社恐了，还没想好要介绍什么，先这样吧。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
