const MainComp = ({ children }) => {
    return (
        <div
            className={`h-screen w-full bg-wedding bg-cover bg-no-repeat bg-center`}
        >
            <div className="relative w-full h-full">
                <div className="w-full h-full overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainComp;
