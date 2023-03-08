import SearchShowButton from '../Pages/searchShowButton';

const SearchForm = props => {
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[30rem]  mx-auto form-animation p-20 bg-sky-300/30 rounded-xl shadow-lg">
                <form action="">
                    <div className="flex flex-col">
                        <label className="font-bold py-2" htmlFor="MegyeNev">
                            Válassza ki a kivánt megyét:
                        </label>
                        <select name="MegyeNev" id="MegyeNev" className="my-3">
                            <option value="Bács-Kiskun">Bács-Kiskun</option>
                            <option value="Baranya">Baranya</option>
                            <option value="Békés">Békés</option>
                            <option value="Borsod-Abaúj-Zemplén">
                                Borsod-Abaúj-Zemplén
                            </option>
                            <option value="Csongrád-Csanád">
                                Csongrád-Csanád
                            </option>
                            <option value="Fejér">Fejér</option>
                            <option value="Győr-Moson-Sopron">
                                Győr-Moson-Sopron
                            </option>
                            <option value="Hajdú-Bihar">Hajdú-Bihar</option>
                            <option value="Heves">Heves</option>
                            <option value="Jász-Nagykun-Szolnok">
                                Jász-Nagykun-Szolnok
                            </option>
                            <option value="Komárom-Esztergom">
                                Komárom-Esztergom
                            </option>
                            <option value="Nógrád">Nógrád</option>
                            <option value="Pest">Pest</option>
                            <option value="Somogy">Somogy</option>
                            <option value="Szabolcs-Szatmár-Bereg">
                                Szabolcs-Szatmár-Bereg
                            </option>
                            <option value="Tolna">Tolna</option>
                            <option value="Vas">Vas</option>
                            <option value="Veszprém">Veszprém</option>
                            <option value="Zala">Zala</option>
                            <option value="Budapest">Budapest</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold py-2" htmlFor="Kapacitas">
                            Válassza ki a kívánt kapacitást:
                        </label>
                        <select
                            name="Kapacitas"
                            id="KapacitasID"
                            className="my-3"
                           
                        >
                            <option value="20-60 fő">20-60 fő</option>
                            <option value="60-150 fő">60-150 fő</option>
                            <option value="150+ fő">150+ fő</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold py-2">
                            A helyszín szolgáltassa az ételt ?
                        </p>
                        <div className="row space-x-2 p-3">
                            <input
                                type="radio"
                                id="EtelVanID"
                                name="Etel"
                                value="1"
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="EtelNincsID"
                                name="Etel"
                                value="0"
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold py-2">
                            A helyszín szolgáltassa az bárt ?
                        </p>
                        <div className="row space-x-2 p-3">
                            <input
                                type="radio"
                                id="ItalVanID"
                                name="Ital"
                                value="1"
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="ItalNincsID"
                                name="Ital"
                                value="0"
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold py-2">Klimatizált legyen ?</p>
                        <div className="row space-x-2 p-3">
                            <input
                                type="radio"
                                id="KlimaVanID"
                                name="Klima"
                                value="1"
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="KlimaNincsID"
                                name="Klima"
                                value="0"
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold py-2" htmlFor="Tancter">
                            Mekkora legyen a tánctér:
                        </label>
                        <select name="Tancter" id="TancterID" className="my-3">
                            <option value="kis tánctér(30-40 &#13217;)">
                                kis tánctér(30-40 &#13217;)
                            </option>
                            <option value="közepes tánctér(50-70 &#13217;)">
                                közepes tánctér(50-70 &#13217;)
                            </option>
                            <option value="csarnok(80+ &#13217;)">
                                csarnok(80+ &#13217;)
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold py-2">
                            Saját parkolóval rendelkezzen ?
                        </p>
                        <div className="row space-x-2 p-3">
                            <input
                                type="radio"
                                id="ParkoloVanID"
                                name="Parkolo"
                                value="1"
                            />
                            <label>Igen</label>
                            <input
                                type="radio"
                                id="ParkoloNincsID"
                                name="Parkolo"
                                value="0"
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold py-2">
                            Biztosítson szállást a helyszín ?
                        </p>
                        <div className="row space-x-2 p-3">
                            <input
                                type="radio"
                                id="SzallasVanID"
                                name="Szallas"
                                value="1"
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="SzallasNincsID"
                                name="Szallas"
                                value="0"
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="font-bold py-2" htmlFor="Tancter">
                            Árkategória:
                        </label>
                        <select
                            name="Arkategoria"
                            id="ArkategoriaID"
                            className="my-3"
                        >
                            <option value="Szerény">Szerény</option>
                            <option value="Átlagos">Átlagos</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>

                    <div className="flex flex-row gap-20">
                        <button
                            className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg py-3"
                            onClick={() => ''} //Ez indítja el a kilistázó lekérdezést
                        >
                            <p className="text-slate-700 font-semibold text-base">
                                Keresés
                            </p>
                        </button>
                    </div>
                </form>
                <div className="py-5">
                    <SearchShowButton
                        searchShowButtonObj={props.searchShowButtonObj}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchForm;
