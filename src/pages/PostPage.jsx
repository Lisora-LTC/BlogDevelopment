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
        <div
          style={{
            lineHeight: "1.6",
            marginTop: "20px",
            fontFamily: "sans-serif",
          }}
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

export default PostPage;
