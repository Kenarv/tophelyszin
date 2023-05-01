import LoginForm from '../forms/loginForm';
import RegForm from '../forms/regFrom';
import StartPage from '../Pages/startPageComp';
import SearchForm from '../forms/searchForm';
import ProfilPage from '../Pages/profilPage';
import FullList from '../Pages/fullList';
import UploadForm from '../forms/uploadForm';
import PwChangeFrom from '../forms/pwChangeForm';
import ResultList from '../Pages/resultList';

const FirstComp = ({
    loggedUserNameObj,
    filterObj,
    resultShowButtonObj,
    loggedButtonObj,
    showFullList,
    showProfil,
    showLogin,
    showReg,
    searchShowButtonObj,
    uploadShowButtonObj,
    pwChangeShowObj,
    resetObj,
}) => {
    const { logged } = loggedButtonObj;
    const { showSearch } = searchShowButtonObj;
    const { showUpload } = uploadShowButtonObj;
    const { showPwChange } = pwChangeShowObj;
    const { showResult } = resultShowButtonObj;
    return (
        <>
            {!logged ? (
                showLogin ? (
                    <LoginForm
                        showLogin={showLogin}
                        loggedButtonObj={loggedButtonObj}
                        resetObj={resetObj}
                    />
                ) : showReg ? (
                    <RegForm showReg={showReg} resetObj={resetObj} />
                ) : showResult ? (
                    <ResultList
                        resultShowButtonObj={resultShowButtonObj}
                        filterObj={filterObj}
                    />
                ) : showSearch ? (
                    <SearchForm
                        searchShowButtonObj={searchShowButtonObj}
                        resultShowButtonObj={resultShowButtonObj}
                        filterObj={filterObj}
                    />
                ) : (
                    <StartPage searchShowButtonObj={searchShowButtonObj} />
                )
            ) : showPwChange ? (
                <PwChangeFrom
                    pwChangeShowObj={pwChangeShowObj}
                    loggedUserNameObj={loggedUserNameObj}
                />
            ) : showUpload ? (
                <UploadForm uploadShowButtonObj={uploadShowButtonObj} />
            ) : showProfil ? (
                <ProfilPage
                    uploadShowButtonObj={uploadShowButtonObj}
                    pwChangeShowObj={pwChangeShowObj}
                    loggedButtonObj={loggedButtonObj}
                    loggedUserNameObj={loggedUserNameObj}
                />
            ) : showFullList ? (
                <FullList />
            ) : showResult ? (
                <ResultList
                    resultShowButtonObj={resultShowButtonObj}
                    filterObj={filterObj}
                />
            ) : showSearch ? (
                <SearchForm
                    searchShowButtonObj={searchShowButtonObj}
                    filterObj={filterObj}
                    resultShowButtonObj={resultShowButtonObj}
                />
            ) : (
                <StartPage searchShowButtonObj={searchShowButtonObj} />
            )}
        </>
    );
};
export default FirstComp;
