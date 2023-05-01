import UploadShowButton from "../Pages/uploadShowbutton";
import React, { useState } from 'react';


const UploadForm = props => {
    const [helyszinNev, sethelyszinNev] = useState('');
    const [helyszinIrsz, sethelyszinIrsz] = useState('');
    const [helyszinVaros, sethelyszinVaros] = useState('');
    const [helyszinUtca, sethelyszinUtca] = useState('');
    const [helyszinHsz, sethelyszinHsz] = useState('');
    const [helyszinEmail, sethelyszinEmail] = useState('');
    const [helyszinVarMegye, sethelyszinVarMegye] = useState('Bács-Kiskun');
    const [kapacitas, setkapacitas] = useState('');
    const [etel, setetel] = useState('');
    const [ital, setital] = useState('');
    const [klima, setklima] = useState('');
    const [tancter, settancter] = useState('');
    const [parkolo, setparkolo] = useState('');
    const [szallas, setszallas] = useState('');
    const [arkategoria, setarkategoria] = useState('Szerény');
    const [megjegyzes, setmegjegyzes] = useState('');
    const [image, setImage] = useState(null);


    const {showUpload, setShowUpload}=props.uploadShowButtonObj;

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/upload.php', {
            method: 'POST',
            body: JSON.stringify({
                helyszinNev,
                helyszinIrsz,
                helyszinVaros,
                helyszinUtca,
                helyszinHsz,
                helyszinEmail,
                helyszinVarMegye,
                kapacitas,
                etel,
                ital,
                klima,
                tancter,
                parkolo,
                szallas,
                arkategoria,
                megjegyzes,
                image
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error)
                {
                    alert(data.error);
                }
                else
                {
                    alert(data.success);
                }


            })
            .catch(error => {
                console.error('Hiba történt a regisztráció során:', error);
                //setErrorMessage('Hiba történt a regisztráció során. Kérjük, próbálja meg később.');
            });
    };


    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-gradient-to-r from-sky-300/50 via-sky-600/50 to-sky-500/50 rounded-xl shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="helyszinNev">
                            Adja meg a helyszín nevét:
                        </label>
                        <input
                            type="text"
                            className=" h-8  border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                            value={helyszinNev}
                            onChange={event => sethelyszinNev(event.target.value)}
                            required
                        />
                    </div>
                    <br />
                    <div className="grid grid-cols-2 gap-4 justify-center-end  ">
                        <div className="place-items-end">
                            <label className="font-bold py-2" htmlFor="helyszinIrsz">
                                Irányítószám:
                            </label>
                            <input
                                className="w-12 h-8 ml-2 border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                                type="text"
                                pattern="[0-9]{4}" title="Csak szám kerülhet ide."
                                value={helyszinIrsz}
                                onChange={event => sethelyszinIrsz(event.target.value)}
                                required
                            />
                            <br></br>
                            <label className="font-bold py-2" htmlFor="helyszinVaros">
                                Város:
                            </label>
                            <input
                                className="w-24 desktop:w-32 h-8 ml-2 border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                                type="text"
                                pattern="[a-zA-Z]{2, }"
                                value={helyszinVaros}
                                onChange={event => sethelyszinVaros(event.target.value)}
                                required
                            />
                        </div>
                        <div className="justify-items-end">
                            <label className="font-bold py-2" htmlFor="helyszinUtca">
                                Utcanév:
                            </label>
                            <input
                                className="w-24 h-8 ml-2 border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                                type="text"
                                value={helyszinUtca}
                                onChange={event => sethelyszinUtca(event.target.value)}
                                required
                            />
                            <br></br>
                            <label className="font-bold py-2" htmlFor="helyszinHsz">
                                Házszám:
                            </label>
                            <input
                                className="w-10 h-8 ml-2 border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                                type="text"
                                value={helyszinHsz}
                                onChange={event => sethelyszinHsz(event.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <div className="grid grid-cols-1">
                    <label className="font-bold" htmlFor="helyszinEmail">
                        Email:
                    </label>
                    <input
                        className="h-8  border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                        type="email"
                        value={helyszinEmail}
                        onChange={event => sethelyszinEmail(event.target.value)}
                        required
                    />
                    </div>
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="helyszinVarMegye">
                            Válassza ki a megyét:
                        </label>
                        <select name="helyszinVarMegye"  required={true} value={helyszinVarMegye} onChange={event => sethelyszinVarMegye(event.target.value)} className="my-3">
                            <option value="Bács-Kiskun vármegye">Bács-Kiskun</option>
                            <option value="Baranya vármegye">Baranya</option>
                            <option value="Békés vármegye">Békés</option>
                            <option value="Borsod-Abaúj-Zemplén vármegye">
                                Borsod-Abaúj-Zemplén
                            </option>
                            <option value="Csongrád-Csanád vármegye">
                                Csongrád-Csanád
                            </option>
                            <option value="Fejér vármegye">Fejér</option>
                            <option value="Győr-Moson-Sopron vármegye">
                                Győr-Moson-Sopron
                            </option>
                            <option value="Hajdú-Bihar vármegye">Hajdú-Bihar</option>
                            <option value="Heves vármegye">Heves</option>
                            <option value="Jász-Nagykun-Szolnok vármegye">
                                Jász-Nagykun-Szolnok
                            </option>
                            <option value="Komárom-Esztergom vármegye">
                                Komárom-Esztergom
                            </option>
                            <option value="Nógrád vármegye">Nógrád</option>
                            <option value="Pest vármegye">Pest</option>
                            <option value="Somogy vármegye">Somogy</option>
                            <option value="Szabolcs-Szatmár-Bereg vármegye">
                                Szabolcs-Szatmár-Bereg
                            </option>
                            <option value="Tolna vármegye">Tolna</option>
                            <option value="Vas vármegye">Vas</option>
                            <option value="Veszprém vármegye">Veszprém</option>
                            <option value="Zala vármegye">Zala</option>
                            <option value="Budapest vármegye">Budapest</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="kapacitas">
                            Mekkora a kapacitás(fő):
                        </label>
                        <input
                            type="text"
                            pattern="[0-9]{1, }" title="Csak szám kerülhet ide."
                            className=" h-8  border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                            value={kapacitas}
                            onChange={event => setkapacitas(event.target.value)}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1">
                        <p className="font-bold py-2">
                            A helyszín szolgáltatja az ételt ?
                        </p>
                        <div className="row space-x-2 p-3">
                            <input
                                type="radio"
                                id="etelVan"
                                name="etel"
                                value="1"
                                checked={etel === "1"}
                                onChange={event => setetel(event.target.value)}
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="etelNincs"
                                name="etel"
                                value="0"
                                checked={etel === "0"}
                                onChange={event => setetel(event.target.value)}
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
                                id="italVan"
                                name="ital"
                                value="1"
                                checked={ital === "1"}
                                onChange={event => setital(event.target.value)}
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="italNincs"
                                name="ital"
                                value="0"
                                checked={ital === "0"}
                                onChange={event => setital(event.target.value)}
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <p className="font-bold py-2">Klimatizált ?</p>
                        <div className="row space-x-2 p-3">
                            <input
                                type="radio"
                                id="klimaVan"
                                name="klima"
                                value="1"
                                checked={klima === "1"}
                                onChange={event => setklima(event.target.value)}
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="klimaNincs"
                                name="klima"
                                value="0"
                                checked={klima === "0"}
                                onChange={event => setklima(event.target.value)}
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="tancter">
                            Mekkora a tánctér(&#13217;):
                        </label>
                        <input
                            type="text"
                            pattern="[0-9]{2, }" title="Csak szám kerülhet ide."
                            className=" h-8  border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700"
                            value={tancter}
                            onChange={event => settancter(event.target.value)}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1">
                        <p className="font-bold py-2">
                            Saját parkolóval rendelkezik ?
                        </p>
                        <div className="row space-x-2 p-3">
                            <input
                                type="radio"
                                id="parkoloVan"
                                name="parkolo"
                                value="1"
                                checked={parkolo === "1"}
                                onChange={event => setparkolo(event.target.value)}
                            />
                            <label>Igen</label>
                            <input
                                type="radio"
                                id="parkoloNincs"
                                name="parkolo"
                                value="0"
                                checked={parkolo === "0"}
                                onChange={event => setparkolo(event.target.value)}
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
                                id="szallasVan"
                                name="szallas"
                                value="1"
                                checked={szallas === "1"}
                                onChange={event => setszallas(event.target.value)}
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="szallasNincs"
                                name="szallas"
                                value="0"
                                checked={szallas === "0"}
                                onChange={event => setszallas(event.target.value)}
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <label className="font-bold py-2" htmlFor="arkategoria">
                            Árkategória:
                        </label>
                        <select
                            value={arkategoria}
                            onChange={event => setarkategoria(event.target.value)}
                            className="my-3"
                        >
                            <option value="Szerény">Szerény</option>
                            <option value="Átlagos">Átlagos</option>
                            <option value="Prémium">Premium</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1">
                    <label className="font-bold py-2" htmlFor="megjegyzes">
                            Megjegyzés:
                        </label>
                        <textarea name="megjegyzes" rows="5" cols="50" value={megjegyzes} onChange={event => setmegjegyzes(event.target.value)} className="w-full border-2 border-sky-200 rounded-lg py-1 focus:outline-none focus:border-sky-700" />
                    </div>

                    <div className="grid grid-cols-1">
                    <label className="font-bold py-2" htmlFor="image">
                            képfeltöltés:
                        </label>
                    <input className="my-5" type="file" onChange={handleFileChange} name="image" id="image" accept="image/png, image/jpeg" />

                    </div>






                    <div className="grid grid-cols-1">
                        <button type="submit"
                            className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg py-3"
                            onClick={() => {setShowUpload(false)}}
                            
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
}
export default UploadForm;
