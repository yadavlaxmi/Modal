import React,{useState} from "react";
const Modal=()=>{
    const[showModal,setShowModal]=useState(false);
    const closeModal  =()=>  setShowModal(false)
    
    const MyModal=()=>{
        return(
        <>
        <h2>STAY TUNED</h2>
            <p> Subscribe to our newsletter and never miss our designs,latest
            <br></br>news.etc.Our newsletter is sent once a week ,every Monday
            </p>
        <button onClick={closeModal }> Accept it </button>
        </>
        )
    }
    return(
        <>
        <div>
         <button onClick={()=>setShowModal(true)}>open Modal</button>
         {showModal && <MyModal/>}
        </div>
        </>

    )
}
export default Modal;