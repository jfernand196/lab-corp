// App.js
import React, { useState } from "react";
import "./App.css";


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="logo.jpg" alt="Logo" />
        </div>
        <nav className={menuOpen ? "menu-open" : ""}>
          <ul>
            <li>
              <a href="#quienes-somos">Quiénes Somos</a>
            </li>
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
      <main>
        <section id="quienes-somos" className="section">
          <p>En JAD Corp, somos más que una start-up tecnológica colombiana; somos una fuerza impulsora detrás de la transformación digital en todo el mundo. Nuestra pasión por la innovación y nuestra dedicación a crear soluciones tecnológicas de vanguardia nos posicionan como socios confiables para empresas en busca de un cambio disruptivo y efectivo. Nos comprometemos a ofrecer a nuestros clientes globales las herramientas y la experiencia necesarias para capitalizar al máximo el potencial de sus datos, permitiéndoles alcanzar nuevos niveles de eficiencia, competitividad y éxito en sus respectivas industrias. Con un enfoque en la excelencia, la transparencia y el servicio al cliente, estamos listos para liderar el camino hacia un futuro digital sin fronteras, donde la innovación y la tecnología abren puertas hacia infinitas posibilidades. Confíe en JAD Corp para impulsar su transformación digital y llevar su empresa al siguiente nivel, donde juntos, podemos lograr grandes cosas.</p>
        </section>
        <section id="nuestra-experiencia" className="section">
          <h2>Nuestra Experiencia</h2>
          <p>Descripción de nuestra experiencia...</p>
        </section>
        <section id="nuestros-proyectos" className="section">
          <h2>Nuestros Proyectos</h2>
          <ul className="proyectos-lista">
            <li>
              <img src="proyecto1.png" alt="Proyecto 1" />
              <p>Descripción del Proyecto 1</p>
            </li>
            <li>
              <img src="proyecto2.png" alt="Proyecto 2" />
              <p>Descripción del Proyecto 2</p>
            </li>
            <li>
              <img src="proyecto3.png" alt="Proyecto 3" />
              <p>Descripción del Proyecto 3</p>
            </li>
          </ul>
        </section>
        <section id="servicios" className="section">
          <h2>Servicios</h2>
          <p>¿Necesitas un sitio web que represente tu marca y te ayude a atraer nuevos clientes? ¿Quieres una aplicación web que automatice tus procesos y te haga más eficiente?  En JADCORP, podemos ayudarte a crear soluciones web personalizadas que se adapten a tus necesidades específicas.</p>
          <h4>Servicios que ofrecemos:</h4>
          <ul>
            <li>
            <b>Diseño web:</b> Creamos sitios web modernos, atractivos y fáciles de usar que se adaptan a cualquier dispositivo.
            </li>
            <li>
            <b>Desarrollo web:</b> Desarrollamos aplicaciones web robustas y escalables que te ayudan a optimizar tu negocio.
            </li>
            <li>
            <b>Mantenimiento web:</b> Nos encargamos de mantener tu sitio web actualizado y seguro, para que puedas despreocuparte.
            </li>
            <li>
            Ciencia, análisis e ingeniería de datos
            </li>
            <li>
            Automatización de procesos
            </li>
          </ul>
        </section>
        <section id="contactenos" className="section">
          <h2>Contáctenos</h2>
          <p>Información de contacto...</p>
        </section>
      </main>
      <footer>
        <div className="redes-sociales">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <p>Derechos de autor © 2024. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;