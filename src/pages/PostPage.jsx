import { useParams, Link } from "react-router-dom";
import { getAllPosts } from "../utils/postLoader";
import ReactMarkdown from "react-markdown";

function PostPage() {
  const { id } = useParams();
  // id 现在是文件名 (slug)，是字符串，不需要 parseInt
  const post = getAllPosts().find((p) => p.id === id);

  if (!post) {
    return <h2>文章不存在！</h2>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "20px" }}>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "30px",
          color: "var(--text-secondary)",
          textDecoration: "none",
        }}
        onMouseOver={(e) => (e.target.style.color = "var(--primary)")}
        onMouseOut={(e) => (e.target.style.color = "var(--text-secondary)")}
      >
        ← 返回首页
      </Link>
      <article>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          {post.title}
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            marginBottom: "40px",
            fontSize: "0.9rem",
          }}
        >
          {post.date}
        </p>
        <div
          style={{
            lineHeight: "1.8",
            fontSize: "1.1rem",
            color: "var(--text-main)",
          }}
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

export default PostPage;
