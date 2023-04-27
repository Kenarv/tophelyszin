const LoginForm = ({loggedButtonObj}) => {

    const {setLogged} = loggedButtonObj;

    return (
        <div className="transition ease-in-out animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-gradient-to-r from-sky-300/50 via-sky-600/50 to-sky-500/50 rounded-xl shadow-2xl">
            <form action="">
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="name">
                        felhasználónév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        name="name"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="password">
                        Jelszó:
                    </label>
                    <input
                        className="border border-1"
                        type="password"
                        name="password"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-row gap-20">
                    <button
                        className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"
                        onClick={() => ''} //innem megy majd a lekérdezés az adatbazisba a login részére vlalamint az átugrás a profil oldalra
                    >
                        <p className="text-slate-700 font-semibold text-base">
                            Belépés
                        </p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
