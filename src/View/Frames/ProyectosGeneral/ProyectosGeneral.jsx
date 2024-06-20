import { useState } from "react";
import FramesPbi from "../../../Components/Common/FramesPbi/FramesPbi";
import "./ProyectosGeneral.css";
import Modal from "../../../Components/Common/Modal/Modal";

// Importamos el JSON de reportes
import reportesData from "../../../Data/Proyectos.json";

const ProyectosGeneral = () => {
  const [viewModal, setViewModal] = useState(false);
  const [reporte, setReporte] = useState(0);
  return (
    <>
      <div className="proyectosgeneral">
        {viewModal ? (
          <Modal setViewModal={setViewModal} reporte={reporte}></Modal>
        ) : (
          <>
            <h1 className="proyectosgeneral__titulo">Reportes Generales</h1>

            <div className="proyectosgeneral__contenedor">
              <>
                {/* Mapeamos los reportes y generamos un FramesPbi para cada uno */}
                {reportesData.reportes.map((reporte) => (
                  <FramesPbi
                    key={reporte.id} // Usamos el id como clave única
                    viewModal={viewModal}
                    setViewModal={setViewModal}
                    data={reporte}
                    setReporte={setReporte}
                  />
                ))}
              </>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProyectosGeneral;
