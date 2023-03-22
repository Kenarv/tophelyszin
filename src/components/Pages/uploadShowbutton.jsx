


const UploadShowButton = props => {

    const {showUpload, setShowUpload} = props.uploadShowButtonObj;
    
    return(
        <button
        className={`transition duration-300 ease-in-out bg-sky-500 text-xl w-35 px-6 py-2 ml-15 hover:bg-sky-200 text-white rounded-3xl shadow-lg`}
        onClick={() => {!showUpload ? setShowUpload(true) : setShowUpload(false)}}
    >
        <p className="text-slate-700 font-semibold text-lg">Feltöltés</p>
    </button>
    )
}

export default UploadShowButton;