import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Desarrollo Web a la Medida</h1>
      </header>
      <main>
        <section className="servicios">
          <h2>Servicios</h2>
          <ul>
            <div>
              <h3>Quienes somos</h3>
              <p>En JAD Corp, somos más que una start-up tecnológica colombiana; somos una fuerza impulsora detrás de la transformación digital en todo el mundo. Nuestra pasión por la innovación y nuestra dedicación a crear soluciones tecnológicas de vanguardia nos posicionan como socios confiables para empresas en busca de un cambio disruptivo y efectivo. Nos comprometemos a ofrecer a nuestros clientes globales las herramientas y la experiencia necesarias para capitalizar al máximo el potencial de sus datos, permitiéndoles alcanzar nuevos niveles de eficiencia, competitividad y éxito en sus respectivas industrias. Con un enfoque en la excelencia, la transparencia y el servicio al cliente, estamos listos para liderar el camino hacia un futuro digital sin fronteras, donde la innovación y la tecnología abren puertas hacia infinitas posibilidades. Confíe en JAD Corp para impulsar su transformación digital y llevar su empresa al siguiente nivel, donde juntos, podemos lograr grandes cosas.</p>
            </div>
            <div>
              <h3>Desarrollo front-end y back-end</h3>
              <p>Desarrollamos aplicaciones web completas y personalizadas.</p>
            </div>
            <div>
              <h3>Mantenimiento y actualizaciones</h3>
              <p>Ofrecemos soporte técnico para mantener tu sitio web actualizado.</p>
            </div>
          </ul>
        </section>
        <section className="portafolio">
          <h2>Portafolio</h2>
          <ul>
            <div>
              <img src="imagen1.jpg" alt="Sitio web para empresa de turismo" />
              <h3>Sitio web para empresa de turismo</h3>
              <a href="https://www.ejemplo.com">Ver sitio web</a>
            </div>
            <div>
              <img src="imagen2.jpg" alt="Tienda online de ropa" />
              <h3>Tienda online de ropa</h3>
              <a href="https://www.ejemplo.com">Ver sitio web</a>
            </div>
            <div>
              <img src="imagen3.jpg" alt="Aplicación web para gestión de tareas" />
              <h3>Aplicación web para gestión de tareas</h3>
              <a href="https://www.ejemplo.com">Ver sitio web</a>
            </div>
          </ul>
        </section>
        <section className="testimonios">
          <h2>Testimonios</h2>
          <ul>
            <div>
              <blockquote>
                "El equipo de desarrollo web a la medida fue muy profesional y eficiente. Estoy muy satisfecho con el resultado final."
              </blockquote>
              <p>Cliente 1 - CEO de Empresa X</p>
            </div>
            <div>
              <blockquote>
                "El nuevo sitio web de mi tienda online ha aumentado significativamente mis ventas. Estoy muy agradecido por el trabajo realizado."
              </blockquote>
              <p>Cliente 2 - Propietario de Tienda Y</p>
            </div>
          </ul>
        </section>
        <section className="contacto">
          <h2>Contacto</h2>
          <p>
            ¿Tienes un proyecto en mente? Contactanos para obtener una
            consulta gratuita.
          </p>
          <form action="/contacto" method="post">
            <input type="text" name="nombre" placeholder="Nombre" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="mensaje" placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <footer>
        <p>Copyright &copy; 2023 - Desarrollo Web a la Medida</p>
      </footer>
    </div>
  );
};

export default App;
