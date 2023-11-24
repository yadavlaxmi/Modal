// import { cleanup } from "@testing-library/react"
import { useEffect } from "react"

const MyModal=({closeModal})=>{
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            // cleanup;
        };
    },[])
    return(
    <>
    <div className="modal-wrapper" onClick={closeModal}></div>
    <div className="modal-container">
    <h2>STAY TUNED</h2>
        <p> Subscribe to our newsletter and never miss our designs,latest
        <br></br>news.etc.Our newsletter is sent once a week ,every Monday
        </p>
    <button className="modal-btn" onClick={closeModal}> Accept it </button>
</div>
    </>
    )
}
export default MyModal