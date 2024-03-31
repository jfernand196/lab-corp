// App.js
import React, { useState } from "react";
import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
      <header>
        <div className="logo">
          <img src="logo2.jpg" alt="Logo" />
        </div>
        <nav className={menuOpen ? "menu-open" : ""}>
          <ul>
            <li>
              <a href="#quienes-somos">Quiénes Somos</a>
            </li>
{/*            <li>
              <a href="#nuestro-logo">Nuestro logo</a>
  </li>*/}
            <li>
              <a href="#nuestra-experiencia">Nuestra Experiencia</a>
            </li>
            <li>
              <a href="#nuestros-proyectos">Nuestros Proyectos</a>
            </li>
            <li>
              <a href="#servicios:">Servicios</a>
            </li>
            <li>
              <a href="#contactenos">Contáctenos</a>
            </li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <section id="home" className="container">
            <h1>CREAMOS LAS <strong>APLICACIONES</strong> DEL FUTURO</h1>
            <div className="divider"></div>
            <p>JAD Corp ofrece soluciones tecnológicas innovadoras y personalizadas para empresas de diversos sectores. Con varios años de experiencia, nuestro equipo de expertos te acompaña en el diseño y desarrollo de software que impulse tu negocio al éxito.</p>
{/*            <div className="social">
                <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-github"></i></a>
  </div>*/}
        </section>
      </div>
      <section id="servicios" className="container">
        <h2>SERVICIOS</h2>

    <ImageGallery 
    items={images}
    showFullscreenButton={false}
    showThumbnails={true}
    showNav= {false}
    showBullets={true}
    showPlayButton={false} 
    autoPlay={true}
    slideInterval={3000}
    slideDuration={1000}
    />

    </section>

    <section id="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y5nq2APYURE" title="Godzilla y Kong: El nuevo imperio | Tráiler oficial 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
    <section id="portafolio">
        <div className="container">
            <h2>PORTAFOLIO</h2>
            <div className="box">
                <img src="roundicons.png" alt="Iconos redondeados"/>
                <h3>Mobile Development</h3>
                <p>Creamos los mejores íconos redondeados del mercado.</p>
            </div>
            <div className="box">
                <img src="startup-framework.png" alt="Creative Digital"/>
                <h3>Creative Digital</h3>
                <p>Excelente trabajo que nos quedó para Creative Digital Inc.</p>
            </div>
            <div className="box">
                <img src="treehouse.png" alt="We can do that"/>
                <h3>We can do that</h3>
                <p>Increíble elaboración del concepto que hicimos para Yup, we can do that.</p>
            </div>
            <div className="box">
                <img src="escape.png" alt="Escape"/>
                <h3>Escape</h3>
                <p>Un gran desarrollo para diversos sectores. Hecha con NextJs</p>
            </div>
            <div className="box">
                <img src="dreams.png" alt="Dreams"/>
                <h3>Dreams</h3>
                <p>Una aplicación que nos quedó muy bacana. Hecha en React.</p>
            </div>
            <div className="box">
                <img src="startup-framework.png" alt="Startup Framework" />
                <h3>Startup Framework</h3>
                <p>Este es increíble. Es un desarrollo que hicimos ya hace un tiempo.</p>
            </div>
    
        </div>
        
    </section>

    <section id="contacto">
        <h2>CONTACTO</h2>
        <form>
            <div><input type="text" placeholder="Tu email"/></div>
            <div><textarea rows="10" placeholder="Tu mensaje"></textarea></div>
            <button>ENVIAR</button>
        </form>
    </section>
      <footer>
        <div className="redes-sociales">
          <a href="#">Facebook</a>
          {'    '}
          <a href="#">Instagram</a>
          {'    '}
          <a href="#">Linkedin</a>
        </div>
        <p>2024 JAD Corp, Todos Los Derechos Reservados.</p>
      </footer>
    </div>
  );
};

export default App;