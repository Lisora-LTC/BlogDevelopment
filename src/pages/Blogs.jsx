import { getAllPosts } from "../utils/postLoader";
import PostItem from "../components/PostItem";
import "./Home.css"; // Reusing Home styles for now

function Blogs() {
  const posts = getAllPosts(); // Get all posts here, not just top 3

  return (
    <div className="home-container page-padding-fix">
      <section className="section-container posts-section">
        <h2 className="section-title">Blogs</h2>
        <div className="content-list">
          {posts.map((post, index) => (
            <PostItem key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blogs;
