


const ResultShowButton = ({resultShowButtonObj}) => {

    const {showResult, setShowResult} = resultShowButtonObj;

    return(
        <button
        className={`transition duration-300 ease-in-out text-xl w-52 px-6 py-2 ml-15 text-white rounded-3xl ${
            !showResult
                ? 'bg-sky-300/70 hover:bg-sky-400/50'
                : 'bg-red-300/70 hover:bg-red-400/50'
        } shadow-lg`}
        onClick={() => {!showResult ? setShowResult(true) : setShowResult(false)}}
    >
        <p className="text-slate-700 font-semibold text-lg">{!showResult ?"Keresés":"vissza"}</p>
    </button>
    )
}

export default ResultShowButton;