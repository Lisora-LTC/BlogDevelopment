import { getAllPosts } from "../utils/postLoader";
import { selectedProjects } from "../data/projects";
import HeroSection from "../components/HeroSection";
import ProjectItem from "../components/ProjectItem";
import PostItem from "../components/PostItem";
import "./Home.css";

function Home() {
  const posts = getAllPosts().slice(0, 3); // Get top 3 latest posts

  return (
    <div className="home-container">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Divider - Outside Hero */}
      <div className="section-divider"></div>

      {/* Selected Projects Section */}
      <section className="section-container projects-section">
        <h2 className="section-title">Recent Projects</h2>
        <div className="content-list">
          {selectedProjects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Recent Blogs Section */}
      <section className="section-container posts-section">
        <h2 className="section-title">Recent Blogs</h2>
        <div className="content-list">
          {posts.map((post, index) => (
            <PostItem key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
