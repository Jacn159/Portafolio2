import "./FramesPbi.css";
const FramesPbi = ({ viewModal, setViewModal, data, setReporte }) => {
  return (
    <div className="framespbi">
      <h1 className="framespbi__titulo">{data.nombre_reporte}</h1>
      <img className="framespbi__img" src={data.fuente_imagen}></img>
      <p className="framespbi__texto">{data.descripcion}</p>
      <div className="framespbi__botonera">
        <span
          className="framespbi__botonera__boton"
          onClick={() => {
            setViewModal(!viewModal);
            setReporte(data.link_reporte);
          }}
        >
          Visualizar Aquí
        </span>
        <a
          href={data.link_reporte}
          className="framespbi__botonera__boton framespbi__botonera__boton-1"
          target="_blank"
        >
          Nueva Pestaña
        </a>
      </div>
    </div>
  );
};

export default FramesPbi;
