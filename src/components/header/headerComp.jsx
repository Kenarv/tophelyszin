import th_logo from '../../media/Th-logo.png';
import LoginShowButton from './loginShowButton';
import RegShowButton from './regShowButton copy';

const HeaderComp = props => {
    return (
        <div className="z-10 w-full h-20 bg-sky-200/50 items-center justify-center">
            <div className="h-full flex items-center">
                <img
                    src={th_logo}
                    alt="th_logo"
                    className="align-center ml-5 mr-10 select-none w-50 h-20 "
                />
                <div className=" flex flex-row gap-5">
                    <LoginShowButton
                        loginShowButtonObj={props.loginShowButtonObj}
                        regShowButtonObj={props.regShowButtonObj}
                    />
                    <RegShowButton
                        regShowButtonObj={props.regShowButtonObj}
                        loginShowButtonObj={props.loginShowButtonObj}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderComp;
