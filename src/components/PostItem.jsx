import { Link } from "react-router-dom";
import "./ItemShared.css";
import "./PostItem.css";

function PostItem({ post, index }) {
  const hasImage = post.image;

  return (
    <article className={`list-item post-item ${!hasImage ? "no-image" : ""}`}>
      {/* Index */}
      <div className="item-index">{String(index + 1).padStart(2, "0")}</div>

      {/* Info (Left) */}
      <div className="item-info">
        <h2 className="item-title-wrapper">
          <Link to={`/post/${post.id}`} className="item-title-link">
            <span className="item-title">{post.title}</span>
          </Link>
          {/* Inline Date: formatted to dots */}
          <span className="item-date-inline">
            {post.date.replace(/-/g, ".")}
          </span>
        </h2>
        <div className="item-description">
          {post.content.substring(0, 150)}...
        </div>
      </div>

      {/* Thumbnail */}
      {hasImage && (
        <Link to={`/post/${post.id}`} className="item-thumbnail post-thumbnail">
          <div className="thumbnail-inner">
            <span style={{ opacity: 0.5 }}>Image</span>
          </div>
        </Link>
      )}
    </article>
  );
}

export default PostItem;
