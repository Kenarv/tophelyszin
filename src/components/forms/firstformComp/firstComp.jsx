import { useState } from 'react';
import FirstForm from './firstform';
import ShowSwapperButton from './showSwapperButton';

const FirstComp = () => {
    const [show, setShow] = useState(false);

    const swapperButtonObj = {
        show,
        setShow,
    };

    return (
        <>
            <ShowSwapperButton swapperButtonObj={swapperButtonObj} />
            {show && <FirstForm />}
        </>
    );
};
export default FirstComp;
