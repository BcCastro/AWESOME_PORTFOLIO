import "./About.scss";
import InfoCard from "./InfoCard/InfoCard";

const About = () => {
  return (
    <div className="about">
      <div className="name">
        <div>
          <h1 className="txt">ACER</h1>
          <h1 className="txt">CA</h1>
        </div>

        <h1 className="txt lg">DE MÍ</h1>

      </div>

      <div className="info">
        <InfoCard
          sectionTitle="ACERCA DE MÍ"
          sectionDetails="Soy un apasionado Desarrollador Web Frontend que encuentra una gran
          satisfacción en la creación web. Mi curiosidad y entusiasmo me impulsaron a
          adentrarme en el mundo del código."
        />

        <InfoCard
          sectionTitle="EDUCACIÓN"
          sectionDetails={
            <div>
              <p>
                Técnico en Programación de Aplicaciones y Servicios para la Nube
                Servicio Nacional de Aprendizaje (SENA)
                2021 - 2023
              </p>
              <p>
                Bootcamp Prográmate Academy
                Fundación Educamás
                Abril - 2023 / Septiembre - 2023
              </p>
              <p>

                Tecnología en Desarrollo de Software
                Corporación Universitaria Remington
                Cursando actualmente
              </p>
            </div>
          }
        />


        <InfoCard
          sectionTitle="TECNOLOGÍAS"
          sectionDetails="Poseo destrezas en escritura de código en HTML, CSS, JAVASCRIPT, y en la actualidad, estoy inmerso en el aprendizaje de REACT JS para ampliar mis conocimientos. Cuento con destrezas en manejo de diseños en FIGMA y manejo de metodología Scrum en TRELLO."
        />

        <InfoCard
          sectionTitle="HABILIDADES"
          sectionDetails="Soy un joven que se caracteriza por tener una comunicación abierta y clara, ponerme en los zapatos de los demás para entender situaciones que generen problemáticas dentro del contexto en el que nos encontremos, soy atento ante la resolución de conflictos, tengo un sentido de escucha activo, respeto mutuo y soy autónomo con respecto a la adquisición de nuevos conocimientos."
        />
      </div>
    </div>
  );
};

export default About;
