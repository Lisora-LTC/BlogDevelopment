import { selectedProjects } from "../data/projects";
import ProjectItem from "../components/ProjectItem";
import "./Home.css"; // Reusing Home styles for now

function Projects() {
  return (
    <div className="home-container page-padding-fix">
      <section className="section-container projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="content-list">
          {selectedProjects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
