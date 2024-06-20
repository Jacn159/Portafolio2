import Presentacion from "../../../Components/Perfil/Presentacion/Presentacion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import "./Perfil.css";
import Cards from "../../../Components/Perfil/Cards/Cards";
import Radar from "../../../Components/Perfil/Graficos/Radar/Radar";
import Barras from "../../../Components/Perfil/Graficos/Barras/Barras";
import Radiobar from "../../../Components/Perfil/Graficos/RadioBar/Radiobar";
import data from "../../../Data/Perfil.json";

const Perfil = () => {
  return (
    <div className="perfil">
      <div className="perfil__cabecera">
        <Presentacion></Presentacion>
        <div className="perfil__cabecera__presentacion">
          <h1 className="perfil__cabecera__presentacion__titulo">
            {data.personal_info.name}
          </h1>
          <p className="perfil__cabecera__presentacion__texto">
            {data.personal_info.description}
          </p>
          <div className="perfil__cabecera__presentacion__redes">
            <a
              href={data.personal_info.github}
              className="perfil__cabecera__presentacion__redes__item"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href={data.personal_info.linkedin}
              className="perfil__cabecera__presentacion__redes__item"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href={"mailto:" + data.personal_info.email}
              className="perfil__cabecera__presentacion__redes__item"
              target="_blank"
            >
              <IoMailSharp />
            </a>
          </div>
        </div>
      </div>
      <div className="perfil__contenedor">
        <div className="perfil__contenedor__items">
          <div className="perfil__contenedor__item ">
            <h1 className="perfil__contenedor__item__titulo">Educación</h1>
            {data.education.map((item, index) => {
              return (
                <Cards
                  oficio={item.institution}
                  img={item.img}
                  value={item.id}
                  key={index}
                ></Cards>
              );
            })}
          </div>

          <div className="perfil__contenedor__item ">
            <h1 className="perfil__contenedor__item__titulo">Experiencia</h1>
            {data.experience.map((item, index) => {
              return (
                <Cards
                  oficio={item.position}
                  img={item.img}
                  key={index}
                  value={item.id}
                ></Cards>
              );
            })}
          </div>
        </div>

        <div className="perfil__contenedor__graficos">
          
          <div className="perfil__contenedor__graficos__herramientas perfil__contenedor__graficos__habilidadesblandas">
            <h1 className="perfil__contenedor__graficos__herramientas__titulo">
              Hablidades Blandas
            </h1>
            <Radiobar></Radiobar>
          </div>
          <div className="perfil__contenedor__graficos__herramientas">
            <h1 className="perfil__contenedor__graficos__herramientas__titulo">
              Análisis de Datos
            </h1>
            <Radar></Radar>
          </div>
          <div className="perfil__contenedor__graficos__herramientas">
            <h1 className="perfil__contenedor__graficos__herramientas__titulo">
              Desarrollador Frontend
            </h1>
            <Barras></Barras>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
