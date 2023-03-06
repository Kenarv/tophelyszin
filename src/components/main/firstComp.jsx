import LoginForm from '../forms/loginForm';
import RegForm from '../forms/regFrom';
import StartPage from '../staticPages/startPageComp';
const FirstComp = ({ showLogin, showReg }) => {
    return (
        <>
            {showLogin ? (
                <LoginForm showLogin={showLogin} />
            ) : showReg ? (
                <RegForm showReg={showReg} />
            ) : (
                <StartPage />
            )}
        </>
    );
};
export default FirstComp;
