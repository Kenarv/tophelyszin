const RegShowButton = props => {
    const { showReg, setShowReg } = props.regShowButtonObj;
    const {  setShowLogin } = props.loginShowButtonObj;
    return (
        <button
            className={`transition duration-300 ease-in-out text-xl w-35 px-6 py-2 ml-15 text-white rounded-3xl ${
                !showReg
                    ? 'bg-sky-300/30 hover:bg-sky-400/50'
                    : 'bg-red-300/30 hover:bg-red-400/50'
            } shadow-lg`}
            onClick={
                !showReg
                    ? () => setShowReg(true) && setShowLogin(false)
                    : () => setShowReg(false) && setShowLogin(true)
            }
        >
            <p className="text-slate-700 font-semibold text-lg">Regisztáció</p>
        </button>
    );
};

export default RegShowButton;