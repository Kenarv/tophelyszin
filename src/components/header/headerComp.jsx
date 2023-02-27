import React from 'react';
import th_logo from '../../media/tophelyszin_logo.png';
const HeaderComp = () => {
    return (
        <div className="z-10 w-full h-20 bg-blue-200/50 items-center justify-center">
            <div className="h-full flex items-center">
                <img src={th_logo} alt="th_logo" className='h-1/2 align-center ml-5 select-none' />
                
            </div>
        </div>
    );
};

export default HeaderComp;
