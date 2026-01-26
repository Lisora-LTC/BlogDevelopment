import { Link } from "react-router-dom";
import { getAllPosts } from "../utils/postLoader";
import "./Home.css";

function Home() {
  const posts = getAllPosts();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <div className="hero-slogan">
            嘿嘿 <em>...</em>,<span>哭哭喵...</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="featured-label">/// LATEST PROJECT</div>
          {/* Featured Card (Placeholder or latest post) */}
          <div className="featured-card">
            {/* Using a gradient or image here. For now, styled div. */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Featured Visual
            </div>
          </div>
        </div>
      </section>

      {/* Post List Section */}
      <section className="posts-section">
        <div className="post-list">
          {posts.map((post, index) => (
            <article key={post.id} className="post-list-item">
              {/* Index */}
              <div className="post-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Info */}
              <div className="post-info">
                <h2>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <div className="post-description">
                  {post.content.substring(0, 120)}...
                </div>

                <div className="post-meta">
                  <div className="meta-item">
                    <span>Date</span>
                    <br />
                    {post.date}
                  </div>
                  <div className="meta-item">
                    <span>Type</span>
                    <br />
                    Article
                  </div>
                </div>
              </div>

              {/* Thumbnail (Right) */}
              <div className="post-thumbnail">
                {/* Placeholder Image */}
                <div style={{ color: "var(--text-muted)" }}>No Image</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
