import Social from "../../Components/SocialCard/Social";
import "./Contact.scss";

import whatsapp from "../../assets/whatsapp.png";
import discord from "../../assets/discord (1).png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import torre from "../../assets/torre.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contactáme</h1>
      <span>
        La comunicación es clave,  para ponerse en contacto conmigo, puedes utilizar los siguientes medios:
      </span>

      <div className="socials">
        <Social logo={github} value="GitHub" />
        <Social logo={linkedin} value="Linkedin" />
        <Social logo={discord} value="Discord" />
        <Social logo={whatsapp} value="Whatsapp" />
        <Social logo={torre} value="Torre" />
      </div>

      <footer>
        <span>
        ¡Gracias por visitar mi sitio web. Espero podamos contactarnos pronto!
        </span>
      </footer>
    </div>
  );
};

export default Contact;
