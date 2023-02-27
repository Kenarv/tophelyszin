import React from 'react';
import bg_image from './Wedding_bg.jpg';
import HeaderComp from '../header/headerComp';
const Background = () => {
    return (
        <>
            <div className="w-full h-full flex justify-center items-center ">
                <div className="w-full h-full flex backdrop-blur-md">
                    <div
                        className="absolute inset-0 bg-cover bg-no-repeat bg-center  "
                        style={{ backgroundImage: `url(${bg_image})` }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Background;
