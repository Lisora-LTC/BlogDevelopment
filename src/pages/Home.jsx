import { Link } from "react-router-dom";
import { getAllPosts } from "../utils/postLoader";
import { selectedProjects } from "../data/projects";
import "./Home.css";

function Home() {
  const posts = getAllPosts().slice(0, 3); // Get top 3 latest posts
  const latestProject = selectedProjects[0]; // Get the first project for Hero

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Aurora Background Wrapper */}
        <div className="hero-background-interactive">
          <div className="aurora-blob blob-1"></div>
          <div className="aurora-blob blob-2"></div>
          <div className="aurora-blob blob-3"></div>
        </div>

        <div className="hero-text">
          <div className="hero-avatar-wrapper">
            <a
              href="https://github.com/hrck9"
              target="_blank"
              rel="noreferrer"
              className="hero-avatar"
            >
              {/* Placeholder for Avatar */}
              <div className="avatar-placeholder">ME</div>
            </a>
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
          <a
            href={latestProject?.link || "#"}
            target="_blank"
            rel="noreferrer"
            className="featured-card"
          >
            <div
              className="featured-visual-inner"
              style={{
                width: "100%",
                height: "100%",
                background:
                  latestProject?.image ||
                  "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              {/* If no image string, show text. If image string is 'linear-gradient...', text can overlay? 
                  With the new structure, assume 'image' is a CSS background value or URL. 
                  Let's just show title if it's a gradient, or nothing if it's a real image URL. 
                  For now, mimic previous text logic but use project title.
              */}
              <span
                style={{
                  padding: "2rem",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  opacity: 0.8,
                }}
              >
                {latestProject?.title || "Featured"}
              </span>
            </div>
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="scroll-indicator">
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
          <div className="arrow-down"></div>
        </div>
      </section>

      {/* Main Divider - Outside Hero */}
      <div className="section-divider"></div>

      {/* Selected Projects Section */}
      <section className="section-container projects-section">
        <h2 className="section-title">Recent Projects</h2>
        <div className="content-list">
          {selectedProjects.map((project, index) => (
            <div key={project.id} className="list-item project-item">
              {/* Index */}
              <div className="item-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Info (Left) */}
              <div className="item-info">
                <h2 className="item-title-wrapper">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="item-title-link"
                  >
                    <span className="item-title">{project.title}</span>
                  </a>
                </h2>
                <div className="item-description">{project.description}</div>
                <div className="item-meta">
                  <div className="meta-item">
                    <span>Tech</span>
                    <br />
                    {project.tags.join(" / ")}
                  </div>
                </div>
              </div>

              {/* Thumbnail (Right) */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="item-thumbnail project-thumbnail"
              >
                <div
                  className="thumbnail-inner"
                  style={{ background: project.image }}
                >
                  <span className="view-hint">View</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Recent Blogs Section */}
      <section className="section-container posts-section">
        <h2 className="section-title">Recent Blogs</h2>
        <div className="content-list">
          {posts.map((post, index) => {
            const hasImage = post.image;

            return (
              <article
                key={post.id}
                className={`list-item post-item ${!hasImage ? "no-image" : ""}`}
              >
                {/* Index */}
                <div className="item-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Info (Left) */}
                <div className="item-info">
                  <h2 className="item-title-wrapper">
                    <Link to={`/post/${post.id}`} className="item-title-link">
                      <span className="item-title">{post.title}</span>
                    </Link>
                    {/* Inline Date */}
                    <span className="item-date-inline">{post.date}</span>
                  </h2>
                  <div className="item-description">
                    {post.content.substring(0, 150)}...
                  </div>
                </div>

                {/* Thumbnail */}
                {hasImage && (
                  <Link
                    to={`/post/${post.id}`}
                    className="item-thumbnail post-thumbnail"
                  >
                    <div className="thumbnail-inner">
                      <span style={{ opacity: 0.5 }}>Image</span>
                    </div>
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
