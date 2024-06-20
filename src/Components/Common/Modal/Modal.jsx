import "./Modal.css";

const Modal = ({  setViewModal, reporte }) => {
  return (
    <div className="modal">
      <iframe className="modal__iframe" src={reporte}></iframe>
      <span
        className="modal__boton"
        onClick={() => {
          setViewModal(false);
        }}
      >
        Regresar
      </span>
    </div>
  );
};

export default Modal;
