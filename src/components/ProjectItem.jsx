import { Link } from "react-router-dom";
import "./ItemShared.css";
import "./ProjectItem.css";

function ProjectItem({ project, index }) {
  return (
    <div className="list-item project-item">
      {/* Index */}
      <div className="item-index">{String(index + 1).padStart(2, "0")}</div>

      {/* Info (Left) */}
      <div className="item-info">
        <h2 className="item-title-wrapper">
          <Link to={`/project/${project.id}`} className="item-title-link">
            <span className="item-title">{project.title}</span>
          </Link>
        </h2>
        <div className="item-description">{project.description}</div>
        <div className="item-meta">
          <div className="meta-item">
            <span>Tech</span>
            <br />
            {project.tags.join(" / ")}
          </div>
        </div>
      </div>

      {/* Thumbnail (Right) */}
      <Link
        to={`/project/${project.id}`}
        className="item-thumbnail project-thumbnail"
      >
        <div
          className="thumbnail-inner"
          style={{
            background: project.image.includes("gradient")
              ? project.image
              : `url(${project.image}) center/cover no-repeat`,
          }}
        >
          <span className="view-hint">View Details</span>
        </div>
      </Link>
    </div>
  );
}

export default ProjectItem;
