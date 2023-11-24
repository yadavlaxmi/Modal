const MyModal=({closeModal})=>{
    return(

    <>
    <div className="modal-wrapper"></div>
    <div className="modal-container">
    <h2>STAY TUNED</h2>
        <p> Subscribe to our newsletter and never miss our designs,latest
        <br></br>news.etc.Our newsletter is sent once a week ,every Monday
        </p>
    <button onClick={closeModal}> Accept it </button>
</div>
    </>
    )
}
export default MyModal