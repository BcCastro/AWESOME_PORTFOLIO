import { useState } from "react";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import "./Projects.scss";

import wheelofdoom from "../../assets/wheelofdoom.jpg";
import enfoquedegenero from "../../assets/enfoquedegenero.jpg";
import cryptodash from "../../assets/crypto.jpg";
import pokedex from "../../assets/pokedex.jpg";
import motostributo from "../../assets/moto.jpg";

const Projects = () => {
  const [tags] = useState(["Html", "CSS/SCSS", "JS", "React JS", "Trello", "Figma", "Más..."]);

  return (
    <div className="projects-wrapper">
      <h2 class="projects">PROYECTOS</h2>
      <div></div>

      <ProjectTemplate 
        projectName="Wheel of Doom Colombia"
        projectDesc="Juego sobre cazar programadores"
        tags={tags}
      img={wheelofdoom}
      />

      <ProjectTemplate
        projectName="Enfoque de género"
        projectDesc="Banco de recursos sobre la inclusión"
        tags={tags}
        img={enfoquedegenero} />

      <ProjectTemplate
        projectName="Crypto Dash"
        projectDesc="Medidor de valor cripto activos"
        tags={tags}
        img={cryptodash} />

      <ProjectTemplate
        projectName="Pokedex"
        projectDesc="Pokedex consumo de Api"
        tags={tags}
        img={pokedex} />

      <ProjectTemplate
        projectName="Web tributo"
        projectDesc="Pagina HTML tributo sobre motos"
        tags={tags}
        img={motostributo} />

      <div></div>
    </div>
  );
};

export default Projects;
