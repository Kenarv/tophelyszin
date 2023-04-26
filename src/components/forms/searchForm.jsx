import ResultShowButton from '../Pages/resultShowButton';
import SearchShowButton from '../Pages/searchShowButton';
import { venues } from '../../Lists/test_list';
//import { useEffect, useState } from 'react';

const SearchForm = ({searchShowButtonObj,resultShowButtonObj,filterObj,}) => {

    
    
    const {formData,setFormData,filteredData,setFilteredData} = filterObj;
    //const [filteredArray, setFilteredArray] = useState([]);

    function handleChange(event) {

        const { name, value } = event.target;
        
        setFormData({
          ...formData,
          [name]: value
        });
       
      }

    // const filteringArray = () => { 
    // // const Fkeys = Object.keys(formData);
    // // const Fvalues = Object.values(formData);

    // // const result = venues.filter(item => {
    // //     return(
    // //         Fkeys.map( ( element,index ) => {
    // //             item[element].toString().includes(Fvalues[index].toString())
    // //         })
    // //     )
    // //         }) 
    // const result = venues.filter(item => {
    //     return(
    //             item.megye.toString().includes(formData.megye.toString()) &&
    //             //item.kapacitas.toString().includes(formData.kapacitas.toString()) &&
    //             item.etel.toString().includes(formData.etel.toString()) &&
    //             item.bar.toString().includes(formData.bar.toString()) &&
    //             //item.tancter.toString().includes(formData.tancter.toString()) &&
    //             item.parkolo.toString().includes(formData.parkolo.toString()) &&
    //             item.szallas.toString().includes(formData.szallas.toString()) &&
    //             item.arkat.toString().includes(formData.arkat.toString())
    //     )
    //         }) 
            
    //         console.log("result")
    //         console.log(result)
    // // const result = Fkeys.map( ( element,index ) => {
    // //         return(
    // //             venues.filter(item => 
    // //                 item[element].toString().includes(Fvalues[index].toString())
    // //             )
    // //         )
    // //     })
            
    // //         console.log("result")
    // //         console.log(result)
    // };


    //   useEffect(() => {
        
       
        
    //     // setFilteredArray(
    //     //     ...filteredArray
    //     //     ,filteringArray()
    //     //     )
        
        

    //   }, [formData]);
      


      function handleSubmit(event) {
        // filteringArray()
        // console.log(formData)
        // console.log(filteredArray)

        event.preventDefault();
        const filtered = venues.filter((item) => {
          return (
            (formData.megye ? item.megye === formData.megye : true) &&
            (formData.kapacitas ? item.kapacitas === formData.kapacitas : true) &&
            (formData.etel ? item.etel === formData.etel : true) &&
            (formData.bar ? item.bar === formData.bar : true) &&
            (formData.klima ? item.klima === formData.klima : true) &&
            (formData.tancter ? item.tancter === formData.tancter : true) &&
            (formData.parkolo ? item.parkolo === formData.parkolo : true) &&
            (formData.szallas ? item.szallas === formData.szallas : true) &&
            (formData.arkat ? item.arkat === formData.arkat : true)
          );
        });

        setFilteredData(filtered);
        console.log(filteredData);
      }

    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-sky-300/50 rounded-xl shadow-2xl">
                
                    <div className="flex flex-col">
                        <label className="font-bold py-2" htmlFor="MegyeNev">
                            Válassza ki a kivánt megyét:
                        </label>
                        <select name="megye" id="MegyeNev" className="my-3" onChange={handleChange}>
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
                        <label className="font-bold py-2" htmlFor="kapacitas">
                            Válassza ki a kívánt kapacitást:
                        </label>
                        <select
                            name="kapacitas"
                            id="KapacitasID"
                            className="my-3"
                            onChange={handleChange}
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
                                name="etel"
                                value="1"
                                onChange={handleChange}
                                checked
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
                                checked
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
                                checked
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
                            <option value="80+">
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
                                checked
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
                                checked
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
