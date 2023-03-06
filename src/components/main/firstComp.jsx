import LoginForm from '../forms/loginForm';
import RegForm from '../forms/regFrom';
import StartPage from '../Pages/startPageComp';
import SearchForm from '../forms/searchForm';
const FirstComp = ({ showLogin, showReg, searchShowButtonObj }) => {
    const { showSearch } = searchShowButtonObj;

    return (
        <>
            {showLogin ? (
                <LoginForm showLogin={showLogin} />
            ) : showReg ? (
                <RegForm showReg={showReg} />
            ) : showSearch ? (
                <SearchForm searchShowButtonObj={searchShowButtonObj}/>
            ) : (
                <StartPage searchShowButtonObj={searchShowButtonObj} />
            )}
        </>
    );
};
export default FirstComp;
