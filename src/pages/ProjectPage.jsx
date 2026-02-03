import { useParams, Link } from "react-router-dom";
import { selectedProjects } from "../data/projects";
import ReactMarkdown from "react-markdown";
import "../Markdown.css";
import "./ProjectPage.css";

function ProjectPage() {
  const { id } = useParams();
  const project = selectedProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div
        className="page-padding-fix"
        style={{ textAlign: "center", paddingTop: "200px" }}
      >
        <h2>Project not found!</h2>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="page-padding-fix project-page-container">
      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <article className="project-detail-card">
        <header className="project-header">
          <h1 className="project-title-large">{project.title}</h1>
          <div className="project-meta-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag-badge">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="project-hero-image"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>

        <div className="markdown-body">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>

        <div className="project-actions">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="action-button primary"
          >
            View Source / Demo
          </a>
        </div>
      </article>
    </div>
  );
}

export default ProjectPage;
