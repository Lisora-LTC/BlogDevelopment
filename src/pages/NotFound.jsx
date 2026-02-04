import { Link } from "react-router-dom";
import "./Home.css"; // Reuse basic styles

function NotFound() {
  return (
    <div
      className="home-container page-padding-fix"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Page Not Found</p>
      <Link
        to="/"
        className="view-all-btn"
        style={{ padding: "0.8rem 2rem", fontSize: "1rem" }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
