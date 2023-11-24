import React,{useState} from "react";
import MyModal from "./ShowModal";
const Modal=()=>{
  
    const[showModal,setShowModal]=useState(false);
    const closeModal  =()=>  setShowModal(false)
    
  
    return(
        <>
        <div>
         <button className="modal-btn"onClick={()=>setShowModal(true)}>
            open Modal
        </button>
         {showModal && <MyModal closeModal={closeModal}/>}
        </div>
        <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
    <p>
     A computer is a machine that can store and process 
     information. Most computers 
     rely on a binary system, which uses two variables, 0 and 1,
      to complete tasks such as storing data, calculating algorithms, and displaying information   
    </p>
        </>

    )
}
export default Modal;