import "./Modal.css";

export const Modal = ({ children,closeModal, isOpen }) => {
  
  const stopPropagation=e=> e.stopPropagation();
  
  return (
    <article className={`modal ${isOpen?"is-open":""}`}  onClick={closeModal}>
      <div className="modal-conteiner"  onClick={stopPropagation} >
        <button  onClick={closeModal}   className="modal-close">X</button>

        {children}
      </div>
    </article>
  );
};
