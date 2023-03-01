import HeaderComp from './components/header/headerComp';
import MainComp from './components/main/mainComp';
import FirstComp from './components/forms/firstformComp/firstComp';
import { useState } from 'react';

function App() {

    const [showLogin, setShowLogin] = useState(false);

    const loginShowButtonObj = {
        showLogin,
        setShowLogin,
    }


    return (
        <div className="h-screen overflow-hidden md:container lg">
            <HeaderComp loginShowButtonObj={loginShowButtonObj}/>
            <MainComp>
                {' '}
                <FirstComp showLogin={showLogin} />
            </MainComp>
        </div>
    );
}

export default App;
