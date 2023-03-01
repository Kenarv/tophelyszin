import LoginForm from './loginForm';

const FirstComp = ({ showLogin }) => {
    return (
        <>
            <LoginForm showLogin={showLogin} />
        </>
    );
};
export default FirstComp;
