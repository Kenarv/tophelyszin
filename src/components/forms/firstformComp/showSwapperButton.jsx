const ShowSwapperButton = props => {
    const { show, setShow } = props.swapperButtonObj;

    return (
        <button
            className="transition duration-300 ease-in-out text-xl w-35 px-6 py-2 ml-15 text-white rounded-3xl bg-sky-300/30 hover:bg-sky-400/50 shadow-lg"
            onClick={!show ? () => setShow(true) : () => setShow(false)}
        >
            <p className="text-slate-700 font-semibold text-lg">Belépés</p>
        </button>
    );
};

export default ShowSwapperButton;
