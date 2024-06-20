import { useState } from "react";
import FramesPbi from "../../../Components/Common/FramesPbi/FramesPbi";
import Modal from "../../../Components/Common/Modal/Modal";
import reportesData from "../../../Data/Proyectos_web.json";

const ProyectosWeb = () => {
  const [viewModal, setViewModal] = useState(false);
  const [reporte, setReporte] = useState(0);
  return (
    <>
      <div className="proyectosgeneral">
        {viewModal ? (
          <Modal setViewModal={setViewModal} reporte={reporte}></Modal>
        ) : (
          <>
            <h1 className="proyectosgeneral__titulo proyectosweb__titulo">Proyectos Web</h1>

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

export default ProyectosWeb;
