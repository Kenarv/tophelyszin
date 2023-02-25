import logo from '../../logo.svg';

const HeaderComp = () => {
    return (
        <div className="h-44 mx-auto bg-slate-400 mb-10">
            <div>
                <img
                    className="h-44 select-none App-logo"
                    src={logo}
                    alt="logo"
                />
            </div>
        </div>
    );
};

export default HeaderComp;
