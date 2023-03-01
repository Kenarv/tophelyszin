import LoginForm from './loginForm';
import StartPage from '../../staticPages/startPageComp';
import RegForm from './regFrom';
const FirstComp = ({ showLogin,showReg }) => {
    return (
        <>
            {showLogin ?< LoginForm showLogin={showLogin} />:<StartPage/>}
            {showReg ? <RegForm showReg={showReg} />  :<StartPage/> }
        </>
    );
};
export default FirstComp;
