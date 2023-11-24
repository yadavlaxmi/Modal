import React,{useState} from "react";
import MyModal from "./ShowModal";
const Modal=()=>{
    const[showModal,setShowModal]=useState(false);
    const closeModal  =()=>  setShowModal(false)
    
  
    return(
        <>
        <div>
         <button onClick={()=>setShowModal(true)}>open Modal</button>
         {showModal && <MyModal closeModal={closeModal}/>}
        </div>
        </>

    )
}
export default Modal;