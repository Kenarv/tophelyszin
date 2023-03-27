const FullListShowButton = props => {
    const { showFullList, setShowFullList } = props.fullListShowButtonObj;
    const {  setShowProfil } = props.profilShowButtonObj;

    
    const handleClickLogged = (profil, fullList) => {
        setShowProfil(profil);
        setShowFullList(fullList);
    };
    return (
        <button
            className={`transition duration-300 ease-in-out text-xl w-35 px-3 py-1 ml-15 text-white rounded-3xl ${
                !showFullList
                    ? 'bg-sky-300/30 hover:bg-sky-400/50'
                    : 'bg-red-300/30 hover:bg-red-400/50'
            } shadow-lg`}

            onClick={() => {!showFullList ? handleClickLogged(false, true) : handleClickLogged(false, false)}}
            
        >
            <p className="text-slate-700 font-semibold text-lg">Teljes Lista</p>
        </button>
    );
};

export default FullListShowButton;
