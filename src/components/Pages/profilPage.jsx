import UploadShowButton from './uploadShowbutton';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
//import {venues} from '../../Lists/test_list';
import {useState, useEffect} from 'react';
import {data} from "autoprefixer";


//function Logged() {

    const ProfilPage = ({
                            uploadShowButtonObj,
                            pwChangeShowObj,
                            loggedButtonObj,
                        }) => {
        const [clickedID, setClickedID] = useState();
        const [clicked, setClicked] = useState(false);
        const {setShowPwChange} = pwChangeShowObj;
        const {setLogged} = loggedButtonObj;
        const [LoggedUserName, setLoggedUserName] = useState([]);
        const [LoggedUserPhone, setLoggedUserPhone] = useState([]);
        const [LoggedUserEmail, setLoggedUserEmail] = useState([]);
        const [helyszinek, setHelyszinek] = useState([]);
        const [loading, setLoading] = useState(true);



        useEffect(() => {
            // Az adatok betöltése az adatbázisból
            fetch("/loggeduser.php")
                .then((response) => response.json())
                .then((logged) => {
                    setLoggedUserName(logged.username);
                    setLoggedUserEmail(logged.email);
                    setLoggedUserPhone(logged.phone);
                    });
        }, []);

        useEffect(() => {
            // Az adatok betöltése az adatbázisból
            fetch("/loggedhelyszin.php")
                .then((response) => response.json())
                .then((data) => {
                    setHelyszinek(data);
                    setLoading(false);

                });
        }, []); // [] üres tömb jelzi, hogy csak egyszer fusson le az useEffect hook

        function handleDelete(id) {
            // Törlés a szerverről


            fetch("/modding.php?id=" + id, {
                method: "DELETE",
            })
                .then((response) => response.json())
                .then((data) => {
                    // Frissítjük a helyszinek állapotát a törlés után
                    setHelyszinek((prevHelyszinek) =>
                        prevHelyszinek.filter((helyszin) => helyszin.helyszinID !== id)
                    );
                });
        }

        if (loading) {
            return <p>Betöltés...</p>;
        }

        return (
            <>
                <div
                    className="animate-form-animation flex flex-col gap-2 w-[360px] laptop:w-[680px] desktop:w-[1200px] mx-auto form-animation p-2 bg-sky-500/30 rounded-xl shadow-lg">
                    <div className=" p-10 grid-flow-row auto-rows-max">
                        <div className="w-2/5 mb-5">
                            <div className=" flex items-center border-b-2 border-sky-500 pb-2">
                                <h1 className="text-3xl font-bold mr-2">
                                    {LoggedUserName}
                                </h1>
                                <div className="flex items-center">
                                    <button
                                        className="transition duration-300 ease-in-out bg-red-500/70 text-xl h-10 desktop:h-5 w-17 px-3  hover:bg-red-200/70 text-white rounded-3xl shadow-lg"
                                        onClick={() => {
                                            setLogged(false);
                                        }}
                                    >
                                        <p className="text-slate-700 font-semibold text-sm">
                                            kilépés
                                        </p>
                                    </button>
                                    <button
                                        className="transition duration-300 ease-in-out bg-teal-500/70 ml-2 text-xl h-10 desktop:h-5 w-17 px-3  hover:bg-teal-200/70 text-white rounded-3xl shadow-lg"
                                        onClick={() => {
                                            setShowPwChange(true);
                                        }}
                                    >
                                        <p className="text-slate-700 font-semibold text-sm">
                                            jelszó változtatás
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div className="text-base columns-1 desktop:columns-2 gap-2 pt-5">
                                <div className="flex items-center gap-2">
                                    <AiOutlineMail/>
                                    <p>{LoggedUserEmail}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <AiOutlinePhone/>
                                    <p>{LoggedUserPhone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-solid border-sky-500 rounded-lg border-2">
                            <div className="grid grid-cols-1 gap-5 p-5 w-full">
                                {helyszinek.map((helyszin) => {
                                    const nameLength = String(helyszin.helyszinNev).length;

                                    console.log(clickedID);
                                    console.log(clicked);

                                    return (
                                        <div
                                            key={helyszin.helyszinID}
                                            className="grid grid-flow-row auto-rows-auto grid-cols-1 desktop:grid-cols-3 gap-2 bg-sky-200/40 w-full p-5 rounded-xl border-2 border-sky-400/80 hover:bg-sky-500/20 duration-300"
                                            onClick={() =>
                                                (!clicked
                                                        ? setClicked(true)
                                                        : setClicked(false)
                                                ) &&
                                                setClickedID(helyszin.helyszinID.valueOf)
                                            }
                                        >
                                            <div className="row-span-3">
                                                <img
                                                    src={""}
                                                    alt={""}
                                                    className="h-[100px] w-[100px] desktop:w-[200px] desktop:h-[200px] rounded-xl"
                                                />
                                            </div>

                                            <div className="col-span-2">
                                                <p
                                                    className={`${
                                                        nameLength > 20
                                                            ? 'text-lg'
                                                            : 'text-2xl'
                                                    } desktop:text-3xl text-sky-700`}
                                                >
                                                    {helyszin.helyszinNev}
                                                </p>
                                            </div>
                                            <div className="row-span-2 col-span-2">
                                                <p className="text-xl desktop:text-2xl text-sky-700">
                                                    {helyszin.helyszinVarMegye}
                                                </p>
                                                <p className="text-lg desktop:text-xl text-sky-700">
                                                    {helyszin.helyszinVaros}
                                                </p>
                                                <p className="text-lg desktop:text-xl text-sky-700">
                                                    {helyszin.helyszinUtca}
                                                </p>
                                                <p className="text-lg desktop:text-xl text-sky-700">
                                                    {helyszin.helyszinHsz}
                                                </p>
                                            </div>
                                            {clicked && clickedID && (
                                                <div className="row-span-2 col-span-3">
                                                    <p className="text-lg desktop:text-xl text-sky-800">
                                                        Helyszín kapacitás:{' '}
                                                        {helyszin.kapacitas}
                                                    </p>
                                                    <p className="text-lg desktop:text-xl text-sky-800">
                                                        Catering:{' '}
                                                        {helyszin.etel === 1
                                                            ? 'igen'
                                                            : 'nem'}
                                                    </p>
                                                    <p className="text-lg desktop:text-xl text-sky-800">
                                                        Bár:{' '}
                                                        {helyszin.ital === 1
                                                            ? 'igen'
                                                            : 'nem'}
                                                    </p>
                                                    <p className="text-lg desktop:text-xl text-sky-800">
                                                        Klimatizált:{' '}
                                                        {helyszin.klima === 1
                                                            ? 'igen'
                                                            : 'nem'}
                                                    </p>
                                                    <p className="text-lg desktop:text-xl text-sky-800">
                                                        Tánctér kapacitás:{' '}
                                                        {helyszin.tancter} &#13217;
                                                    </p>
                                                    <p className="text-lg desktop:text-xl text-sky-800">
                                                        Parkoló:{' '}
                                                        {helyszin.parkolo === 1
                                                            ? 'igen'
                                                            : 'nem'}
                                                    </p>
                                                    <p className="text-lg desktop:text-xl text-sky-800">
                                                        Szállás helyszínen:{' '}
                                                        {helyszin.szallas === 1
                                                            ? 'igen'
                                                            : 'nem'}
                                                    </p>
                                                    <p className="text-lg desktop:text-xl text-sky-800">
                                                        Árkategória: {helyszin.arkategoria}
                                                    </p>
                                                    <p className="text-lg desktop:text-xl text-sky-800">
                                                        Megjegyzés: {helyszin.megjegyzes}
                                                    </p>
                                                </div>
                                            )}
                                            <div className="grid col-span-3 justify-items-end">
                                                <div>
                                                    <button
                                                        className={`transition duration-300 ease-in-out bg-red-500/70 text-xl h-12 w-35 px-6 py-2 ml-15 hover:bg-red-200/70 text-white rounded-3xl shadow-lg`}
                                                        onClick={() => handleDelete(helyszin.helyszinID)}
                                                    >
                                                        <p className="text-slate-700 font-semibold text-lg">
                                                            törlés
                                                        </p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className=" grid justify-items-center mt-3 mb-24">
                            <UploadShowButton
                                uploadShowButtonObj={uploadShowButtonObj}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    };


export default ProfilPage;
