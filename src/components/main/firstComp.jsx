import LoginForm from '../forms/loginForm';
import RegForm from '../forms/regFrom';
const FirstComp = ({ showLogin, showReg }) => {
    return (
        <>
            {showLogin && <LoginForm showLogin={showLogin} />}
            {showReg && <RegForm showReg={showReg} />}
        </>
    );
};
export default FirstComp;
