import FramesPbi from "../../../Components/Common/FramesPbi/FramesPbi";
import Modal from "../../../Components/Common/Modal/Modal";
import reportesData from "../../../Data/Proyectos_agro.json";
import { useState } from "react";

const ProyectosAgro = () => {
  const [viewModal, setViewModal] = useState(false);
  const [reporte, setReporte] = useState(0);
  return (
    <>
      <div className="proyectosgeneral">
        {viewModal ? (
          <Modal setViewModal={setViewModal} reporte={reporte}></Modal>
        ) : (
          <>
            <h1 className="proyectosgeneral__titulo">
              Reportes Agro Industriales
            </h1>

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

export default ProyectosAgro;
