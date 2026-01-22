import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>文章不存在！</h2>;
  }

  return (
    <div>
      <Link
        to="/"
        style={{ display: "inline-block", marginBottom: "20px", color: "#666" }}
      >
        ← 返回首页
      </Link>
      <article>
        <h1>{post.title}</h1>
        <p style={{ color: "#999" }}>{post.date}</p>
        <div style={{ lineHeight: "1.6", marginTop: "20px" }}>
          {post.content}
        </div>
      </article>
    </div>
  );
}

export default PostPage;
