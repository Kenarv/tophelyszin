const SearchForm = () => {
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[30rem]  mx-auto form-animation p-20 bg-sky-300/30 rounded-xl shadow-lg">
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="MegyeNev">
                        Válassza ki a kivánt megyét:
                    </label>
                    <select name="MegyeNev" id="MegyeNev">
                        <option value="Bács-Kiskun"></option>
                        <option value="Baranya"></option>
                        <option value="Békés"></option>
                        <option value="Borsod-Abaúj-Zemplén"></option>
                        <option value="Csongrád-Csanád"></option>
                        <option value="Fejér"></option>
                        <option value="Győr-Moson-Sopron"></option>
                        <option value="Hajdú-Bihar"></option>
                        <option value="Heves"></option>
                        <option value="Jász-Nagykun-Szolnok"></option>
                        <option value="Komárom-Esztergom"></option>
                        <option value="Nógrád"></option>
                        <option value="Pest"></option>
                        <option value="Somogy"></option>
                        <option value="Szabolcs-Szatmár-Bereg"></option>
                        <option value="Tolna"></option>
                        <option value="Vas"></option>
                        <option value="Veszprém"></option>
                        <option value="Zala"></option>
                        <option value="Budapest"></option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="Kapacitas">
                        Válassza ki a kívánt kapacitást:
                    </label>
                    <select name="Kapacitas" id="KapacitasID">
                        <option value="20-60 fő"></option>
                        <option value="60-150 fő"></option>
                        <option value="150+ fő"></option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">
                        A helyszín szolgáltassa az ételt ?
                    </p>
                    <input
                        type="checkbox"
                        id="EtelVanID"
                        name="EtelVan"
                        value="1"
                    >
                        proba
                    </input>
                    <label for="EtelVan">Igen</label>
                    <input
                        type="checkbox"
                        id="EtelNincsID"
                        name="EtelNincs"
                        value="0"
                    >
                        proba
                    </input>
                    <label for="EtelNincs">Nem</label>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">
                        A helyszín szolgáltassa az bárt ?
                    </p>
                    <input
                        type="checkbox"
                        id="ItalVanID"
                        name="ItallVan"
                        value="1"
                    >
                        proba
                    </input>
                    <label for="ItalVan">Igen</label>
                    <input
                        type="checkbox"
                        id="ItalNincsID"
                        name="ItalNincs"
                        value="0"
                    >
                        proba
                    </input>
                    <label for="ItalNincs">Nem</label>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">Klimatizált legyen ?</p>
                    <input
                        type="checkbox"
                        id="KlimaVanID"
                        name="KlimalVan"
                        value="1"
                    >
                        proba
                    </input>
                    <label for="KlimaVan">Igen</label>
                    <input
                        type="checkbox"
                        id="KlimaNincsID"
                        name="KlimaNincs"
                        value="0"
                    >
                        proba
                    </input>
                    <label for="klimaNincs">Nem</label>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="Tancter">
                        Mekkora legyen a tánctér:
                    </label>
                    <select name="Tancter" id="TancterID">
                        <option value="kis tánctér(30-40 &#13217;)"></option>
                        <option value="közepes tánctér(50-70 &#13217;)"></option>
                        <option value="csarnok(80+ &#13217;)"></option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">Saját parkolóval rendelkezzen ?</p>
                    <input
                        type="checkbox"
                        id="ParkoloVanID"
                        name="ParkoloVan"
                        value="1"
                    >
                        proba
                    </input>
                    <label for="ParkoloVan">Igen</label>
                    <input
                        type="checkbox"
                        id="ParkoloNincsID"
                        name="ParkoloNincs"
                        value="0"
                    >
                        proba
                    </input>
                    <label for="ParkoloNincs">Nem</label>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">
                        Biztosítson szállást a helyszín ?
                    </p>
                    <input
                        type="checkbox"
                        id="SzallasVanID"
                        name="SzallasVan"
                        value="1"
                    >
                        proba
                    </input>
                    <label for="SzallasVan">Igen</label>
                    <input
                        type="checkbox"
                        id="SzallasNincsID"
                        name="SzallasNincs"
                        value="0"
                    >
                        proba
                    </input>
                    <label for="SzallasNincs">Nem</label>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="Tancter">
                        Árkategória:
                    </label>
                    <select name="Arkategoria" id="ArkategoriaID">
                        <option value="Szerény"></option>
                        <option value="Átlagos"></option>
                        <option value="Premium"></option>
                    </select>
                </div>

                <div className="flex flex-row gap-20">
                    <button
                        className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"
                        onClick={() => ''} //Ez indítja el a kilistázó lekérdezést
                    >
                        <p className="text-slate-700 font-semibold text-base">
                            Keresés
                        </p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchForm;
