import { useState } from 'react';
import LoginForm from './loginForm';
import LoginShowButton from './loginShowButton';

const FirstComp = () => {
    const [showLogin, setShowLogin] = useState(false);

    const loginShowButtonObj = {
        showLogin,
        setShowLogin,
    };

    return (
        <>
            <LoginShowButton loginShowButtonObj={loginShowButtonObj} />
            {showLogin && <LoginForm />}
        </>
    );
};
export default FirstComp;
