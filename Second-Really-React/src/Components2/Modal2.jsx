import React,{ReactDOM} from "react-dom";

export const Modal2 = ({ children,isClose,open}) => {


  if(open){
    document.documentElement.style.overflowY="hidden"
  }else{
    document.documentElement.style.overflowY="auto";
  }

  const stop=e=>e.stopPropagation()
  return  (
    <>
      <article className={`modal2 ${open&&"is-open2"}`}    onClick={isClose}>
      


<div className="modal-conteiner2" onClick={stop}>
<button className="btnM-close"  onClick={isClose}>X</button>
   {children}
</div>
       
      </article>



      
    </>
  );
};
