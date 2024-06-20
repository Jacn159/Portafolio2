import React, { useEffect, useState } from "react";
import Cabecera from "../../Components/Menu/Cabecera/Cabecera";
import Pie from "../../Components/Menu/Pie/Pie";
import Tarjeta from "../../Components/Menu/Tarjeta/Tarjeta";
import {
  FaUser,
  FaChartBar,
  FaSeedling,
  FaCode,
  FaEllipsisH,
} from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { HiDocumentDownload } from "react-icons/hi";

import "./Menu.css";
import data from "../../Data/Menu.json";

const MenuHamburguesa = ({ setMenuHamburguesa }) => (
  <span
    className="menu__hamburguesa"
    onClick={() => {
      setMenuHamburguesa(false);
      // Agregar clase al body para evitar desplazamiento
      document.body.classList.add("no-scroll");
    }}
  >
    <TiThMenu />
  </span>
);

const Menu = ({ setPage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuHamburguesa, setMenuHamburguesa] = useState(screenWidth < 720);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth < 720) {
        setMenuHamburguesa(true);
      } else {
        setMenuHamburguesa(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTarjetaClick = (index) => {
    setPage(data.menu[index].valor);
    setActiveIndex(index);
    if (window.innerWidth < 720) {
      setMenuHamburguesa(true);
      document.body.classList.remove("no-scroll");
    }
  };

  const iconos = [FaUser, FaChartBar, FaCode, FaEllipsisH, FaSeedling];

  return (
    <>
      {menuHamburguesa ? (
        <MenuHamburguesa setMenuHamburguesa={setMenuHamburguesa} />
      ) : (
        <div className="menu">
          <Cabecera />
          <div className="menu__tarjeta">
            {data.menu.map((item, index) => {
              const Icono = iconos[index];
              return (
                <Tarjeta
                  key={index}
                  navegador={item.name}
                  valorNavegador={item.valor}
                  isActive={activeIndex === index}
                  Icono={Icono}
                  onClick={() => handleTarjetaClick(index)}
                />
              );
            })}
          </div>
          <a
            className="menu__cv tarjeta"
            href="https://drive.google.com/file/d/1Ecg0gD57imvfyhAvFeW8BI4yrVvv9nNk/view?usp=sharing"
            target="_blank"
          >
            <span className="tarjeta__icono">
            <HiDocumentDownload />
            </span>
            CV
          </a>
          <Pie />
        </div>
      )}
    </>
  );
};

export default Menu;
