import Tag from "../Tag/Tag";
import "./ProjectTemplate.scss";

const ProjectTemplate = ({ projectName, projectDesc, tags, img }) => {
  return (
    <div className="project">
      <div className="project-details">
        <h2 className="project-name">{projectName}</h2>
        <span className="project-desc">{projectDesc}</span>

        <div className="tags">
          <h2 className="tech-stack">Tecnologías usadas:</h2>
          <div className="tags-wrapper">
            {tags.map((tag) => {
              return <Tag key={projectName} value={tag} />;
            })}
          </div>
        </div>
      </div>

      <div className="project-images">
        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
