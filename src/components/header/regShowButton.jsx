const RegShowButton = props => {
    const { showReg, setShowReg } = props.regShowButtonObj;
    const {  setShowLogin } = props.loginShowButtonObj;

    
    const handleClick = (login, reg) => {
        setShowLogin(login);
        setShowReg(reg);
    };
    return (
        <button
            className={`transition duration-300 ease-in-out text-xl w-35 px-3 py-1 ml-15 text-white rounded-xl shadow-2xl ${
                !showReg
                    ? 'bg-sky-100/30 hover:bg-sky-500/50 transition ease-in-out delay-75'
                    : 'bg-emerald-400/50 hover:bg-emerald-600/30'
            } shadow-lg`}

            onClick={() => {!showReg ? handleClick(false, true) : handleClick(false, false)}}
            
        >
            <p className="text-slate-700 font-semibold text-lg">Regisztráció</p>
        </button>
    );
};

export default RegShowButton;
