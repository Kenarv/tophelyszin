import HeaderComp from './components/header/headerComp';
import MainComp from './components/main/mainComp';
import FirstComp from './components/main/firstComp';
import { useState } from 'react';



function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [showReg, setShowReg] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showUpload, setShowUpload] = useState(false);
    const [showProfil, setShowProfil] = useState(false);
    const [showFullList, setShowFullList] = useState(false);
    const [showPwChange, setShowPwChange] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [LoggedUserName, setLoggedUserName] = useState([]);


    const [formData, setFormData] = useState({});
    const [filteredData, setFilteredData] = useState([]);

    const [logged, setLogged] = useState(false);
    

    const resetObj = {
        setShowLogin,
        setShowReg,
        setShowSearch,
        setShowUpload,
        setShowProfil,
        setShowFullList,
        setShowPwChange,
        setShowResult,
    }

    const loggedUserNameObj = {
        LoggedUserName,
        setLoggedUserName,
    }

    const filterObj = {
        formData,
        setFormData,
        filteredData,
        setFilteredData,
    }

    const resultShowButtonObj = {
        showResult,
        setShowResult,
    }

    const loggedButtonObj = {
        logged,
        setLogged,
    };

    const pwChangeShowObj ={
        showPwChange,
        setShowPwChange,
    }

    const fullListShowButtonObj = {
        showFullList,
        setShowFullList,
    };

    const profilShowButtonObj = {
        showProfil,
        setShowProfil,
    };
    
    const regShowButtonObj = {
        showReg,
        setShowReg,
    };

    const loginShowButtonObj = {
        showLogin,
        setShowLogin,
    };

    const searchShowButtonObj = {
        showSearch,
        setShowSearch,
    };
    
    const uploadShowButtonObj = {
        showUpload,
        setShowUpload,
    };


    return (
        <div className="h-screen overflow-hidden ">
            <HeaderComp
                loginShowButtonObj={loginShowButtonObj}
                regShowButtonObj={regShowButtonObj}
                profilShowButtonObj={profilShowButtonObj}
                fullListShowButtonObj={fullListShowButtonObj}
                loggedButtonObj={loggedButtonObj}
                resetObj={resetObj}
            />
            <MainComp>
                {' '}
                <FirstComp
                    showLogin={showLogin}
                    showReg={showReg}
                    showFullList={showFullList}
                    showProfil={showProfil}
                    searchShowButtonObj={searchShowButtonObj}
                    uploadShowButtonObj={uploadShowButtonObj}
                    pwChangeShowObj={pwChangeShowObj}
                    loggedButtonObj={loggedButtonObj}
                    resultShowButtonObj={resultShowButtonObj}
                    filterObj={filterObj}
                    loggedUserNameObj={loggedUserNameObj}
                    resetObj={resetObj}
                />
                 
            </MainComp>
            
        </div>
    );
}

export default App;
