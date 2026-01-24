import { Link } from "react-router-dom";
import { getAllPosts } from "../utils/postLoader";

function Home() {
  const posts = getAllPosts();

  return (
    <div>
      {/* 可以在这里加个简单的欢迎语，或者直接显示文章 */}
      <h2
        style={{
          textAlign: "center",
          color: "var(--primary)",
          marginBottom: "30px",
          fontWeight: "normal",
        }}
      >
        最新文章
      </h2>

      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
            <div className="post-date">{post.date}</div>
            <p className="post-excerpt">{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
