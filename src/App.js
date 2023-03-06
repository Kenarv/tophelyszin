import HeaderComp from './components/header/headerComp';
import MainComp from './components/main/mainComp';
import FirstComp from './components/main/firstComp';
import { useState } from 'react';

function App() {

    const [showLogin, setShowLogin] = useState(false);

    const [showReg, setShowReg] = useState(false);

    const [showSearch, setShowSearch] = useState(false);

    const regShowButtonObj = {
        showReg,
        setShowReg,
    }

    const loginShowButtonObj = {
        showLogin,
        setShowLogin,
    }
    
    const searchShowButtonObj = {
        showSearch,
        setShowSearch
    }
    return (
        <div className="h-screen ">
            <HeaderComp loginShowButtonObj={loginShowButtonObj} regShowButtonObj={regShowButtonObj}/>
            <MainComp>
                {' '}
                <FirstComp showLogin={showLogin} showReg={showReg} searchShowButtonObj={searchShowButtonObj}/>
            </MainComp>
        </div>
    );
}

export default App;
