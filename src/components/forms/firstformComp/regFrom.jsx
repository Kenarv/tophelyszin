const RegForm = () => {
    return(
        <div className="animate-form-animation flex flex-col gap-2 w-[30rem]  mx-auto form-animation p-20 bg-sky-300/30 rounded-xl shadow-lg">
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
        <div className="flex flex-col">
            <label className="font-bold" htmlFor="password">
                Jelszó újra:
            </label>
            <input
                className="border border-1"
                type="password"
                name="passwordAgain"
                placeholder=""
            />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" htmlFor="password">
                Email:
            </label>
            <input
                className="border border-1"
                type="email"
                name="eamil"
                placeholder=""
            />
        </div>
        <div className="flex flex-row gap-20">
            <button
                className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"
                onClick={() => ''}
            >
                <p className="text-slate-700 font-semibold text-base">
                    Regisztráció
                </p>
            </button>
        </div>
    </div>


    );

}

export default RegForm;