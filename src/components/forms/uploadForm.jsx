import UploadShowButton from "../Pages/uploadShowbutton";

const UploadForm = props => {
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[40rem]  mx-auto form-animation p-20 bg-sky-300/30 rounded-xl shadow-lg">
                <form action="">
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="HelyNev">
                            Adja meg a helyszín nevét:
                        </label>
                        <input
                            type="text"
                            className=" h-8  border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                            name="HelyNev"
                            id="HelyNevID"
                        />
                    </div>
                    <br />
                    <div className="grid grid-cols-2 gap-4 justify-center-end  ">
                        <div className="place-items-end">
                            <label className="font-bold py-2" htmlFor="Irsz">
                                Irányítószám:
                            </label>
                            <input
                                className="w-12 h-8 ml-2 border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                                type="text"
                                name="Irsz"
                                id="IrszID"
                            />
                            <br></br>
                            <label className="font-bold py-2" htmlFor="Varos">
                                Város:
                            </label>
                            <input
                                className="w-32 h-8 ml-2 border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                                type="text"
                                name="Varos"
                                id="VarosID"
                            />
                        </div>
                        <div className="justify-items-end">
                            <label className="font-bold py-2" htmlFor="Utca">
                                Utcanév:
                            </label>
                            <input
                                className="w-24 h-8 ml-2 border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                                type="text"
                                name="Utca"
                                id="UtcaID"
                            />
                            <br></br>
                            <label className="font-bold py-2" htmlFor="Hazszam">
                                Házszám:
                            </label>
                            <input
                                className="w-10 h-8 ml-2 border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                                type="text"
                                name="Hazszam"
                                id="HazszamID"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="grid grid-cols-1">
                    <label className="font-bold" htmlFor="password">
                        Email:
                    </label>
                    <input
                        className="h-8  border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                        type="email"
                        name="helyszinEamil"
                        placeholder=""
                        required
                    />
                    </div>
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="MegyeNev">
                            Válassza ki a megyét:
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
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="Kapacitas">
                            Mekkora a kapacitás(fő):
                        </label>
                        <input
                            type="text"
                            className=" h-8  border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                            name="Kapacitas"
                            id="KapacitasID"
                        />              
                    </div>
                    <div className="grid grid-cols-1">
                        <p className="font-bold py-2">
                            A helyszín szolgáltatja az ételt ?
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
                    <div className="grid grid-cols-1">
                        <p className="font-bold py-2">
                            A helyszín rendelkezik bárral ?
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
                    <div className="grid grid-cols-1">
                        <p className="font-bold py-2">Klimatizált ?</p>
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
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="Tancter">
                            Mekkora a tánctér(&#13217;):
                        </label>
                        <input
                            type="text"
                            className=" h-8  border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                            name="Tancter"
                            id="TancterID"
                        />                      
                    </div>
                    <div className="grid grid-cols-1">
                        <p className="font-bold py-2">
                            Saját parkolóval rendelkezik ?
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
                    <div className="grid grid-cols-1">
                        <p className="font-bold py-2">
                            Biztosít szállást a helyszín ?
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
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="Tancter">
                            Árkategória:
                        </label>
                        <select
                            name="Arkategoria"
                            id="ArkategoriaID"
                            className="my-3"
                        >
                            <option value="szereny">Szerény</option>
                            <option value="atlagos">Átlagos</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1">
                    <label className="font-bold py-2" htmlFor="EgyebInfo">
                            Megyjegyzés:
                        </label>
                        <textarea name="EgyebInfo" id="EgyebInfoID" rows="5" cols="50" className="w-full border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700" />
                    </div>

                    <div className="grid grid-cols-1">
                    <label className="font-bold py-2" htmlFor="Kep">
                            képfeltöltés:
                        </label>
                    <input className="my-5" type="file" name="Kep" id="kep" accept="image/png, image/jpeg" />

                    </div>






                    <div className="grid grid-cols-1">
                        <button
                            className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg py-3"
                            onClick={() => ''} //Ez indítja el a kilistázó lekérdezést
                        >
                            <p className="text-slate-700 font-semibold text-base">
                                Feltöltés
                            </p>
                        </button>
                        <UploadShowButton
                            uploadShowButtonObj={props.uploadShowButtonObj}
                        />
                    </div>
                    
                </form>
            </div>
        </>
    );
};
export default UploadForm;
