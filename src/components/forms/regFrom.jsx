const RegForm = () => {
    return (
        <div className="animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-sky-300/50 rounded-xl shadow-2xl">
            <form action="">
            <div className="flex flex-col">
                    <label className="font-bold" htmlFor="Vname">
                        Vezetéknév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        name="Vname"
                        placeholder=""
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="Kname">
                        keresztnév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        name="Kname"
                        placeholder=""
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="name">
                        felhasználónév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        name="name"
                        placeholder=""
                        required
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
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="passwordAgain">
                        Jelszó újra:
                    </label>
                    <input
                        className="border border-1"
                        type="password"
                        name="passwordAgain"
                        placeholder=""
                        required
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
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="Phone">
                        Telefonszám:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        name="Phone"
                        placeholder="pl.: +36201234567"
                    />
                </div>
                <div className="flex flex-row my-10">
                    <button
                        className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"
                        onClick={() => ''} //innen megy majd a feltöltés az adatbázisba a bejelntkezési adatokkal valamint a továbblépés a profil oldalra a már meglévő adatokkal
                    >
                        <p className="text-slate-700 font-semibold text-base">
                            Regisztráció
                        </p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegForm;
