import { Link } from "react-router-dom";
import { posts } from "../data/posts";

function Home() {
  return (
    <div>
      <h2>文章列表</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              <Link
                to={`/post/${post.id}`}
                style={{ textDecoration: "none", color: "#007bff" }}
              >
                {post.title}
              </Link>
            </h3>
            <p style={{ color: "#666", fontSize: "14px" }}>{post.date}</p>
            <p>{post.content.substring(0, 50)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
