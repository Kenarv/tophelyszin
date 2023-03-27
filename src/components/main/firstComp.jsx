import LoginForm from '../forms/loginForm';
import RegForm from '../forms/regFrom';
import StartPage from '../Pages/startPageComp';
import SearchForm from '../forms/searchForm';
import ProfilPage from '../Pages/profilPage';
import FullList from '../Pages/fullList';
import UploadForm from '../forms/uploadForm';
const FirstComp = ({
    logged,
    showFullList,
    showProfil,
    showLogin,
    showReg,
    searchShowButtonObj,
    uploadShowButtonObj,
}) => {
    const { showSearch } = searchShowButtonObj;
    const { showUpload } = uploadShowButtonObj;

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
            ) : showUpload ? <UploadForm uploadShowButtonObj={uploadShowButtonObj}/> :  showProfil ? 
                (<ProfilPage uploadShowButtonObj={uploadShowButtonObj} />)
                  
             : (
                showFullList && <FullList />
            )}
        </>
    );
};
export default FirstComp;
