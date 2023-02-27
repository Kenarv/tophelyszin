import { useState } from 'react';
import th_logo from '../../media/tophelyszin_logo.png';
import ShowSwapperButton from '../forms/firstformComp/showSwapperButton';

const HeaderComp = () => {
    const [show, setShow] = useState(false);

    const swapperButtonObj = {
        show,
        setShow,
    };
    return (
        <div className="z-10 w-full h-20 bg-sky-200/50 items-center justify-center">
            <div className="h-full flex items-center">
                <img
                    src={th_logo}
                    alt="th_logo"
                    className="h-1/2 align-center ml-5 mr-10 select-none"
                />
                <ShowSwapperButton swapperButtonObj={swapperButtonObj} />
            </div>
        </div>
    );
};

export default HeaderComp;
