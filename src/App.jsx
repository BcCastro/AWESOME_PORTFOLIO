import { useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";

import Nav from "./Components/Nav/Nav";
import Social from "./Components/SocialCard/Social";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

import whatsapp from "./assets/whatsapp.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import discord from "./assets/discord (1).png";
import torre from "./assets/torre.png";

function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li");
    const indicator = document.querySelector("nav .indicator");

    const navIcons = document.querySelectorAll(".nav-toggle .nav-icon");

    const pages = document.querySelectorAll(".page");

    const profile = document.querySelector(".profile");

    function handleScroll() {
      let homeBottom = pages[0].getBoundingClientRect().bottom;
      let homeHeight = pages[0].offsetHeight;

      if (homeBottom < homeHeight / 2) {
        profile.classList.add("active");
      } else {
        profile.classList.remove("active");
      }

      for (let i = 0; i < pages.length; i++) {
        let currentPage = pages[i];

        let pageTop = currentPage.getBoundingClientRect().top;

        if (pageTop < 300) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          navLinks[i].classList.add("active");

          let width = navLinks[i].offsetWidth;
          let left = navLinks[i].offsetLeft;

          indicator.style.width = `${width + 28}px`;
          indicator.style.left = left + "px";

          navIcons.forEach((icon) => {
            icon.classList.remove("active");
          });

          navIcons[i].classList.add("active");
        }
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />

      <main>
        <div className="page" id="home">
          <Home />
        </div>

        <div className="page" id="about">
          <About />
        </div>

        <div className="socials-wrapper">
          <h2 className="quick-links">Links Rapidos</h2>

          <div className="socials">
            <a href="https://github.com/BcCastro">
              <Social logo={github} value="GitHub" />
            </a>

            <a href="https://www.linkedin.com/in/castrocamilo/">
              <Social logo={linkedin} value="Linkedin" />
            </a>

            <a href="http://wa.me/573156159066">
              <Social logo={whatsapp} value="Whatsapp" />
            </a>

            <a href="https://discord.com/users/camilocastro2926">
              <Social logo={discord} value="Discord" />
            </a>

            <a href="https://torre.ai/bryanthernandez">
              <Social logo={torre} value="Torre" />
            </a>

          </div>
        </div>

        <div className="page" id="projects">
          <Projects />
        </div>

        <div className="page" id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
