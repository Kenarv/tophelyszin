import LoginForm from './loginForm';
import StartPage from '../../staticPages/startPageComp';
const FirstComp = ({ showLogin }) => {
    return (
        <>
            {showLogin ?< LoginForm showLogin={showLogin} />:<StartPage/>}
        </>
    );
};
export default FirstComp;
