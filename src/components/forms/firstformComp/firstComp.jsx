import { useState } from 'react';
import FirstForm from './firstform';
import ShowSwapperButton from './showSwapperButton';

const FirstComp = () => {
    const [show, setShow] = useState(false);
    const buttonStyle =
        '  transition duration-300 ease-in-out text-2xl w-44 p-4 font-bold text-white rounded-2xl';

    const firstformObj = {
        buttonStyle,
    };

    const swapperButtonObj = {
        show,
        setShow,
        buttonStyle,
    };

    return (
        <>
            <ShowSwapperButton swapperButtonObj={swapperButtonObj} />
            {show && <FirstForm firstformObj={firstformObj} />}
        </>
    );
};
export default FirstComp;
