import th_logo from '../../media/Th-logo.png';
import FullListShowButton from './fullListShowButton';
import LoginShowButton from './loginShowButton';
import ProfilShowButton from './profilShowButton';
import RegShowButton from './regShowButton';

const HeaderComp = props => {
    const { logged, setLogged } = props.loggedButtonObj;
    const {
        setShowLogin,
        setShowReg,
        setShowSearch,
        setShowUpload,
        setShowProfil,
        setShowFullList,
        setShowPwChange,
        setShowResult,
    } = props.resetObj;


    function spiner(){
        "animate-spin"
    }

    function handleReset(){
        setShowLogin(false);
        setShowReg(false);
        setShowSearch(false);
        setShowUpload(false);
        setShowProfil(false);
        setShowFullList(false);
        setShowPwChange(false);
        setShowResult(false);
        spiner();
        
    }

    return (
        <div className="z-10 w-full h-20 bg-gradient-to-r from-sky-300 via-indigo-300 to-sky-500 items-center justify-center">
            <div className="h-full flex items-center">
                <img
                    src={th_logo}
                    alt="th_logo"
                    className="align-center ml-5 mr-10 select-none w-50 h-20"
                    onClick={handleReset}
                />

                {!logged ? (
                    <div className=" flex flex-row gap-5">
                        <LoginShowButton
                            loginShowButtonObj={props.loginShowButtonObj}
                            regShowButtonObj={props.regShowButtonObj}
                        />
                        <RegShowButton
                            regShowButtonObj={props.regShowButtonObj}
                            loginShowButtonObj={props.loginShowButtonObj}
                        />
                    </div>
                ) : (
                    <div className=" flex flex-row gap-5">
                        <ProfilShowButton
                            profilShowButtonObj={props.profilShowButtonObj}
                            fullListShowButtonObj={props.fullListShowButtonObj}
                        />
                        <FullListShowButton
                            fullListShowButtonObj={props.fullListShowButtonObj}
                            profilShowButtonObj={props.profilShowButtonObj}
                        />
                    </div>
                )}

                <button
                    className={`transition duration-300 ease-in-out text-xl w-2 px-3 py-1 ml-15 text-white rounded-3xl ${
                        !logged
                            ? 'bg-sky-300/30 hover:bg-sky-400/50'
                            : 'bg-red-300/30 hover:bg-red-400/50'
                    } shadow-lg`}
                    onClick={() => {
                        !logged ? setLogged(true) : setLogged(false);
                    }}
                >
                    <p className="text-slate-700 text-sm">L</p>
                </button>
            </div>
        </div>
    );
};

export default HeaderComp;
