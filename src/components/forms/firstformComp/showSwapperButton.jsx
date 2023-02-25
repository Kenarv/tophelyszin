const ShowSwapperButton = props => {
    const { show, setShow, buttonStyle } = props.swapperButtonObj;

    return (
        <button
            className={`${
                !show
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-red-500 hover:bg-red-600'
            } ${buttonStyle}`}
            onClick={!show ? () => setShow(true) : () => setShow(false)}
        >
            {!show ? 'ShowForm' : 'HideForm'}
        </button>
    );
};

export default ShowSwapperButton;
