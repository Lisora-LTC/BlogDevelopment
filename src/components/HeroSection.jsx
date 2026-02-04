import { Link } from "react-router-dom";
import { selectedProjects } from "../data/projects";
import "./HeroSection.css";

function HeroSection() {
  const latestProject = selectedProjects[0];

  return (
    <section className="hero-section">
      {/* Aurora Background Wrapper */}
      <div className="hero-background-interactive">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>

      <div className="hero-content-viewport">
        <div className="hero-text">
          <div className="hero-avatar-wrapper">
            <Link to="/about" className="hero-avatar">
              <img
                src="/image/icon.png"
                alt="Lisora"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className="hero-slogan">
            <em>Lisora</em>
            <br />
            做梦的地方
            <span>何意味...</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="featured-label">LATEST PROJECT</div>
          {/* Featured Card - Now Dynamic Link */}
          <Link to={`/project/${latestProject?.id}`} className="featured-card">
            <div
              className="featured-visual-inner"
              style={{
                width: "100%",
                height: "100%",
                background: latestProject?.image?.includes("gradient")
                  ? latestProject.image
                  : latestProject?.image
                    ? `url(${latestProject.image}) center/cover no-repeat`
                    : "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: latestProject?.image?.includes("gradient")
                  ? "#333"
                  : "#fff",
                fontWeight: "bold",
                textShadow: latestProject?.image?.includes("gradient")
                  ? "none"
                  : "0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              <span
                style={{
                  padding: "2rem",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  opacity: latestProject?.image?.includes("gradient") ? 0.8 : 1,
                }}
              >
                {latestProject?.title || "Featured"}
              </span>
            </div>
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <div className="scroll-indicator">
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
          <div className="arrow-down"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
