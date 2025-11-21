import { useTranslation } from "react-i18next";
import "./AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <section id="about-me">
        <div className="principal-container">
          <h2>{t("aboutMe")}</h2>

          <div className="profile">
            <div className="profile-photo">
              <img src="mi-foto.jpg" alt="Foto de [Tu Nombre]" />
            </div>

            <div className="description">
              <p className="principal-pharagraph">
                ¡Hola! Soy **[Tu Nombre Completo]**, un/a{" "}
                <strong className="prominent-role">
                  [Tu Título o Rol Principal, ej: Desarrollador/a Web Full
                  Stack]
                </strong>{" "}
                apasionado/a por{" "}
                <strong className="prominent-role">
                  [Algo que te apasione de tu campo, ej: crear soluciones
                  digitales innovadoras y fáciles de usar]
                </strong>
                .
              </p>

              <p>
                Tengo **[Número]** años de experiencia en el sector,
                especializándome en **[Menciona 2-3 tecnologías o áreas clave,
                ej: JavaScript, React y desarrollo de APIs RESTful]**.
              </p>

              <p className="mention">
                Mi enfoque principal es{" "}
                <span className="emphasis">
                  [Describe tu filosofía de trabajo o lo que aportas]
                </span>
                . Estoy siempre en busca de nuevos retos y oportunidades.
              </p>

              <p>
                Cuando no estoy programando, me encontrarás **[Menciona un hobby
                o interés, ej: leyendo sobre inteligencia artificial o haciendo
                senderismo]**.
              </p>

              <a href="mi-cv.pdf" className="btn-cv" download>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
