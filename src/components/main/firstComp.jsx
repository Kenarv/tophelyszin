import LoginForm from '../forms/loginForm';
import RegForm from '../forms/regFrom';
import StartPage from '../Pages/startPageComp';
import SearchForm from '../forms/searchForm';
import ProfilPage from '../Pages/profilPage';
import FullList from '../Pages/fullList';
import UploadForm from '../forms/uploadForm';
import PwChangeFrom from '../forms/pwChangeForm';
const FirstComp = ({
    loggedButtonObj,
    showFullList,
    showProfil,
    showLogin,
    showReg,
    searchShowButtonObj,
    uploadShowButtonObj,
    pwChangeShowObj,
}) => {
    const { logged } = loggedButtonObj;
    const { showSearch } = searchShowButtonObj;
    const { showUpload } = uploadShowButtonObj;
    const { showPwChange } = pwChangeShowObj;
    return (
        <>
            {!logged ? (
                showLogin ? (
                    <LoginForm showLogin={showLogin} />
                ) : showReg ? (
                    <RegForm showReg={showReg} />
                ) : showSearch ? (
                    <SearchForm searchShowButtonObj={searchShowButtonObj} />
                ) : (
                    <StartPage searchShowButtonObj={searchShowButtonObj} />
                )
            ) :  showPwChange ? (
                <PwChangeFrom pwChangeShowObj={pwChangeShowObj} 
                /> 
            ) : showProfil ? (
                <ProfilPage
                    uploadShowButtonObj={uploadShowButtonObj}
                    pwChangeShowObj={pwChangeShowObj}
                    loggedButtonObj={loggedButtonObj}
                />
            ) : showFullList ? (
                <FullList />
            ) : showUpload ? (
                <UploadForm uploadShowButtonObj={uploadShowButtonObj} />
            ) : showSearch ? (
                <SearchForm searchShowButtonObj={searchShowButtonObj} />
            ) : (
                <StartPage searchShowButtonObj={searchShowButtonObj} />
            )}
        </>
    );
};
export default FirstComp;
