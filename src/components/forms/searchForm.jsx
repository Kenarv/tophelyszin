import ResultShowButton from '../Pages/resultShowButton';
import SearchShowButton from '../Pages/searchShowButton';
import { venues } from '../../Lists/test_list';

const SearchForm = ({searchShowButtonObj,resultShowButtonObj,filterObj,}) => {

    const {formData,setFormData,filteredData,setFilteredData} = filterObj;

    function handleChange(event) {

        const { name, value } = event.target;
        
        setFormData({
          ...formData,
          [name]: value
        });
       
      }

      function handleSubmit(event) {
        event.preventDefault();
        const filtered = venues.filter((item) => {
          return (
            (formData.megye ? item.megye.includes(formData.megye) : true) &&
            (formData.kapacitas ? formData.kapacitas.split('-')[0] < item.kapacitas < formData.kapacitas.split('-')[1] : true) &&
            (formData.etel ? item.etel.toString().includes(formData.etel) : true) &&
            (formData.bar ? item.bar.toString().includes(formData.bar) : true) &&
            (formData.klima ? item.klima.toString().includes( formData.klima) : true) &&
            (formData.tancter ? formData.tancter.split('-')[0] < item.tancter < formData.tancter.split('-')[1] : true) &&
            (formData.parkolo ? item.parkolo.toString().includes(formData.parkolo) : true) &&
            (formData.szallas ? item.szallas.toString().includes(formData.szallas) : true) &&
            (formData.arkat ? item.arkat.includes(formData.arkat) : true)
          );
        });
        
        setFilteredData(filtered);
        console.log(filteredData)
      }
      
      


      // const kapacitasValue = value.split('-') // result: kapacitasValue[20,60]

    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-sky-300/50 rounded-xl shadow-2xl">
                
                    <div className="flex flex-col">
                        <label className="font-bold py-2" htmlFor="MegyeNev">
                            Válassza ki a kivánt megyét:
                        </label>
                        <select name="megye" id="MegyeNev" className="my-3" onChange={handleChange}>
                            <option value="Bács-Kiskun vármegye">Bács-Kiskun vármegye</option>
                            <option value="Baranya vármegye">Baranya vármegye</option>
                            <option value="Békés vármegye">Békés vármegye</option>
                            <option value="Borsod-Abaúj-Zemplén vármegye">
                                Borsod-Abaúj-Zemplén vármegye
                            </option>
                            <option value="Csongrád-Csanád vármegye">
                                Csongrád-Csanád vármegye
                            </option>
                            <option value="Fejér vármegye">Fejér vármegye</option>
                            <option value="Győr-Moson-Sopron vármegye">
                                Győr-Moson-Sopron vármegye
                            </option>
                            <option value="Hajdú-Bihar vármegye">Hajdú-Bihar vármegye</option>
                            <option value="Heves vármegye">Heves vármegye</option>
                            <option value="Jász-Nagykun-Szolnok vármegye">
                                Jász-Nagykun-Szolnok vármegye
                            </option>
                            <option value="Komárom-Esztergom vármegye">
                                Komárom-Esztergom vármegye
                            </option>
                            <option value="Nógrád vármegye">Nógrád vármegye</option>
                            <option value="Pest vármegye">Pest vármegye</option>
                            <option value="Somogy vármegye">Somogy vármegye</option>
                            <option value="Szabolcs-Szatmár-Bereg vármegye">
                                Szabolcs-Szatmár-Bereg vármegye
                            </option>
                            <option value="Tolna vármegye">Tolna vármegye</option>
                            <option value="Vas vármegye">Vas vármegye</option>
                            <option value="Veszprém vármegye">Veszprém vármegye</option>
                            <option value="Zala vármegye">Zala vármegye</option>
                            <option value="Budapest vármegye">Budapest vármegye</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold py-2" htmlFor="kapacitas">
                            Válassza ki a kívánt kapacitást:
                        </label>
                        <select
                            name="kapacitas"
                            id="KapacitasID"
                            className="my-3"
                            onChange={handleChange}
                        >
                            <option value="20-60">20-60 fő</option>
                            <option value="60-150">60-150 fő</option>
                            <option value="150-5000">150+ fő</option>
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
                                name="etel"
                                value="1"
                                onChange={handleChange}
                                
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="EtelNincsID"
                                name="etel"
                                value="0"
                                onChange={handleChange}
                                
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
                                name="bar"
                                value="1"
                                onChange={handleChange}
                                
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="ItalNincsID"
                                name="bar"
                                value="0"
                                onChange={handleChange}
                                
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
                                name="klima"
                                value="1"
                                onChange={handleChange}
                                
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="KlimaNincsID"
                                name="klima"
                                value="0"
                                onChange={handleChange}
                                
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold py-2" htmlFor="Tancter">
                            Mekkora legyen a tánctér:
                        </label>
                        <select name="tancter" id="TancterID" className="my-3" onChange={handleChange}>
                            <option value="30-40">
                                kis tánctér(30-40 &#13217;)
                            </option>
                            <option value="50-70">
                                közepes tánctér(50-70 &#13217;)
                            </option>
                            <option value="80-5000">
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
                                name="parkolo"
                                value="1"
                                onChange={handleChange}
                                
                            />
                            <label>Igen</label>
                            <input
                                type="radio"
                                id="ParkoloNincsID"
                                name="parkolo"
                                value="0"
                                onChange={handleChange}
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
                                name="szallas"
                                value="1"
                                onChange={handleChange}
                                
                            />
                            <label>Igen</label>

                            <input
                                type="radio"
                                id="SzallasNincsID"
                                name="szallas"
                                value="0"
                                onChange={handleChange}
                            />
                            <label>Nem</label>
                        </div>
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="font-bold py-2" htmlFor="Tancter">
                            Árkategória:
                        </label>
                        <select
                            name="arkat"
                            id="ArkategoriaID"
                            className="my-3"
                            onChange={handleChange}
                        >
                            <option value="Szerény">Szerény</option>
                            <option value="Átlagos">Átlagos</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>

                    <div className="flex flex-row gap-20" onClick={handleSubmit}>
                        <ResultShowButton
                            resultShowButtonObj={resultShowButtonObj}
                        />
                        {/*<button
                            className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg py-3"
                            onClick={() => ''} //Ez indítja el a kilistázó lekérdezést
                        >
                            <p className="text-slate-700 font-semibold text-base">
                                Keresés
                            </p>
                        </button> */}
                    </div>
                
                <div className="py-5">
                    <SearchShowButton
                        searchShowButtonObj={searchShowButtonObj}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchForm;
