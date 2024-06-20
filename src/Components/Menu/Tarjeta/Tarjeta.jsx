import React, { useState } from "react";
import "./Tarjeta.css";

const Tarjeta = ({ navegador, isActive, onClick, Icono,  }) => {
  const IconoComponent = Icono; // Debes usar el componente como una variable

  return (
    <div
      className={"tarjeta " + (isActive ? "tarjeta__activate" : "")}
      onClick={onClick}
    >
      <span className="tarjeta__icono">
        <IconoComponent /> {/* Renderiza el componente de icono */}
      </span>
      {navegador}
    </div>
  );
};

export default Tarjeta;
