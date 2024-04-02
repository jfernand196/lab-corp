// App.js
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { useWindowScroll } from "react-use";
import { SocialIcon } from "react-social-icons";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, setState] = useState(false);
  const [stateHeader, setStateHeader] = useState(false);

  const { y } = useWindowScroll();

  useLayoutEffect(() => {
    if (y >= 50) {
      setStateHeader(true);
    } else {
      setStateHeader(false);
    }
  }, [y]);

  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 100,
    reset: true,
  });

  useEffect(() => {
    sr.reveal(`.logo, .menu-open`);
    sr.reveal(`.container`, { origin: "left", delay: 100 });
    sr.reveal(`.home__tree-2`, { origin: "right", delay: 100 });
    sr.reveal(`.video`, { delay: 100 });
    sr.reveal(`.contacto`, { interval: 100 });
    // sr.reveal(`.about__img, .about__data, .footer__tree-2`, {
    //   origin: "left",
    // });
    // sr.reveal(`.party__images, .party__data, .footer__tree-1`, {
    //   origin: "right",
    // });
  }, []);

  const form = useRef(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vkuh4hh", "template_yh45u15", form.current, {
        publicKey: "DK0mfVqpuP1ee4p9Y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Clear form data after successful sending
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const images = [
    {
      original: "./servicio11.JPG",
    },
    {
      original: "./servicio22.JPG",
    },
    {
      original: "./servicio33.JPG",
    },
    {
      original: "./servicio44.JPG",
    },
    {
      original: "./servicio55.JPG",
    },
    {
      original: "./servicio66.JPG",
    },
  ];

  return (
    <div className="App">
      <div className="home-wrapper">
        <header className={stateHeader ? "header-bg-header" : "header"}>
          <div className="logo">
            <img src="logo2.jpg" alt="Logo" />
          </div>
          <nav className="menu-open">
            <ul>
              <li>
                <a href="#divider">Quiénes Somos</a>
              </li>
              <li>
                <a href="#portafolio">Nuestros Proyectos</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#contacto">Contáctenos</a>
              </li>
            </ul>
          </nav>
        </header>
        <section id="home" className="container">
          <h1>
            CREAMOS LAS <strong>APLICACIONES</strong> DEL FUTURO
          </h1>
          <div id="divider" className="divider"></div>
          <p>
            Jad Corp ofrece soluciones tecnológicas innovadoras y personalizadas
            para empresas de diversos sectores. Con varios años de experiencia,
            nuestro equipo de expertos te acompaña en el diseño y desarrollo de
            software que impulse tu negocio al éxito.
          </p>
        </section>
      </div>
      <section id="servicios" className="container">
        <h2>SERVICIOS</h2>

        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showThumbnails={true}
          showNav={false}
          showBullets={true}
          showPlayButton={false}
          autoPlay={true}
          slideInterval={6000}
          slideDuration={1000}
        />
      </section>

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=+573011916711&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20."
        class="float"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>

      <section id="video" className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Y5nq2APYURE"
          title="Godzilla y Kong: El nuevo imperio | Tráiler oficial 2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
      <section id="portafolio">
        <div className="container">
          <h2>PORTAFOLIO</h2>
          <div className="box">
            <img src="roundicons.png" alt="Iconos redondeados" />
            <h3>Mobile Development</h3>
            <p>Creamos los mejores íconos redondeados del mercado.</p>
          </div>
          <div className="box">
            <img src="startup-framework.png" alt="Creative Digital" />
            <h3>Creative Digital</h3>
            <p>Excelente trabajo que nos quedó para Creative Digital Inc.</p>
          </div>
          <div className="box">
            <img src="treehouse.png" alt="We can do that" />
            <h3>We can do that</h3>
            <p>
              Increíble elaboración del concepto que hicimos para Yup, we can do
              that.
            </p>
          </div>
          <div className="box">
            <img src="escape.png" alt="Escape" />
            <h3>Escape</h3>
            <p>Un gran desarrollo para diversos sectores. Hecha con NextJs</p>
          </div>
          <div className="box">
            <img src="dreams.png" alt="Dreams" />
            <h3>Dreams</h3>
            <p>Una aplicación que nos quedó muy bacana. Hecha en React.</p>
          </div>
          <div className="box">
            <img src="startup-framework.png" alt="Startup Framework" />
            <h3>Startup Framework</h3>
            <p>
              Este es increíble. Es un desarrollo que hicimos ya hace un tiempo.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="contacto">
        <h2>CONTACTO</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="name">
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Tu email"
              required
            />
          </div>
          <div>
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              placeholder="Tu mensaje"
              rows="10"
              required
            />
          </div>
          <button type="submit">ENVIAR</button>
        </form>
      </section>
      <footer>
        <div className="logo-footer">
          <img src="logo2.jpg" alt="Logo" />
        </div>

        <h2>Conosca más de nosotros</h2>

        <SocialIcon
          className="social"
          url="https://www.facebook.com/profile.php?id=61557840956051"
          network="facebook"
        />
        <SocialIcon
          className="social"
          url="https://www.instagram.com/jadcorptech/"
          network="instagram"
        />
        <SocialIcon
          className="social"
          url="https://www.linkedin.com/company/103108870/admin/feed/posts/?feedType=following"
          network="linkedin"
        />
        <SocialIcon
          className="social"
          url="https://www.tiktok.com/@jad.corp.tech?lang=en"
          network="tiktok"
        />

        <p>2024 JAD Corp, Todos Los Derechos Reservados.</p>
      </footer>
    </div>
  );
};

export default App;
