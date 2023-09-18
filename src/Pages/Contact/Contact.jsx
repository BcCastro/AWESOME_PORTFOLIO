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
        <a href="https://github.com/BcCastro">
          <Social logo={github} value="GitHub" />
        </a>

        <a href="https://www.linkedin.com/in/castrocamilo/">
          <Social logo={linkedin} value="Linkedin" />
        </a>

        <a href="https://discord.com/users/camilocastro2926">
          <Social logo={discord} value="Discord" />
        </a>

        <a href="http://wa.me/573156159066">
          <Social logo={whatsapp} value="Whatsapp" />
        </a>

        <a href="https://torre.ai/bryanthernandez">
          <Social logo={torre} value="Torre" />
        </a>

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
