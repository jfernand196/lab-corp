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
      <div className="home-wrapper">
      <header>
        <div className="logo">
          <img src="logo.jpg" alt="Logo" />
        </div>
        <nav className={menuOpen ? "menu-open" : ""}>
          <ul>
            <li>
              <a href="#quienes-somos">¿Quiénes Somos?</a>
            </li>
            <li>
              <a href="#nuestro-logo">Nuestro logo</a>
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
      <section id="home" className="container">
            <h1>CREAMOS LAS <strong>APLICACIONES</strong> DEL FUTURO</h1>
            <div className="divider"></div>
            <p>JAD Corp es la mejor opción si necesitas un prototipo o quieres acelerar tu ciclo de desarrollo.</p>
{/*            <div className="social">
                <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-github"></i></a>
  </div>*/}
        </section>
      </div>
      <section id="servicios" className="container">
        <h2>SERVICIOS</h2>
        <div className="box">
            <img src="./web-design.png" alt="Web Dising"/>
            <h3>Web Desing</h3>
            <p>Somos expertos en Web Design. Nuestro equipo es por mucho el mejor. Nadie nos hace competencia.</p>
        </div>
        <div className="box">
            <img src="web-development.png" alt="Web Developend"/>
            <h3>Web Development</h3>
            <p>Somos expertos en Web Development. Usamos HTML5, CSS3, Git, Bootstrap, NodeJs, React, Mongodb.</p>
        </div>
        <div className="box">
            <img src="ux-ui.png" alt="UX and UI"/>
            <h3>Mobile Development</h3>
            <p>Somos expertos en Mobile Development. Creemos que el futuro está en responsive design y no nativo.</p>
        </div>
    </section>
    <section id="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qdIuXCfUKM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <p>Este es el mismo que el anterior pero esperemos que nadie lo note.</p>
            </div>
            <div className="box">
                <img src="dreams.png" alt="Dreams"/>
                <h3>Dreams</h3>
                <p>Una aplicación que nos quedó muy bacana. Hecha con Ruby on Rails.</p>
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
      <main>
        <section id="quienes-somos" className="section">
          <p>En JAD Corp, somos más que una start-up tecnológica colombiana; somos una fuerza impulsora detrás de la transformación digital en todo el mundo. Nuestra pasión por la innovación y nuestra dedicación a crear soluciones tecnológicas de vanguardia nos posicionan como socios confiables para empresas en busca de un cambio disruptivo y efectivo. Nos comprometemos a ofrecer a nuestros clientes globales las herramientas y la experiencia necesarias para capitalizar al máximo el potencial de sus datos, permitiéndoles alcanzar nuevos niveles de eficiencia, competitividad y éxito en sus respectivas industrias. Con un enfoque en la excelencia, la transparencia y el servicio al cliente, estamos listos para liderar el camino hacia un futuro digital sin fronteras, donde la innovación y la tecnología abren puertas hacia infinitas posibilidades. Confíe en JAD Corp para impulsar su transformación digital y llevar su empresa al siguiente nivel, donde juntos, podemos lograr grandes cosas.</p>
        </section>
        <section id="nuestro-logo" className="section">
          <p>El logo de "JAD Corp", una empresa de tecnología especializada en desarrollo de software y ciencia de datos, presenta la imagen de un guerrero con un escudo, transmitiendo fuerza, protección y determinación. La ilustración sugiere la capacidad de la empresa para superar desafíos tecnológicos con valentía y seguridad, protegiendo los datos y la información de los clientes. El nombre de la empresa se muestra de forma sólida y legible, comunicando profesionalismo y confianza. En conjunto, el logo transmite la visión de "Jad Corp" como un líder en su campo, comprometido con la excelencia y la seguridad en sus servicios tecnológicos.
</p>
        </section>
        <section id="nuestra-experiencia" className="section">
          <h2>Nuestra Experiencia</h2>
          <p>JAD Corp ofrece soluciones tecnológicas innovadoras y personalizadas para empresas de diversos sectores. Con más de 1 año de experiencia, nuestro equipo de expertos te acompaña en el diseño y desarrollo de software que impulse tu negocio al éxito.</p>
        </section>
{  /*      <section id="nuestros-proyectos" className="section">
          <h2>Nuestros Proyectos</h2>
          <ul className="proyectos-lista">
            <li>
              <img src="proyecto1.jpeg" alt="Proyecto 1" />
              <p>Descripción del Proyecto 1</p>
            </li>
            <li>
              <img src="proyecto2.jpg" alt="Proyecto 2" />
              <p>Descripción del Proyecto 2</p>
            </li>
            <li>
              <img src="proyecto3.jpg" alt="Proyecto 3" />
              <p>Descripción del Proyecto 3</p>
            </li>
          </ul>
</section>*/}
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
        <p>2024 JAD Corp, Todos Los Derechos Reservados.</p>
      </footer>
    </div>
  );
};

export default App;