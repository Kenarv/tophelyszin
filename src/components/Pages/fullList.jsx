import { venues } from '../../Lists/test_list';
import {useEffect, useState} from "react";


function FullList() {
    const [helyszinek, setHelyszinek] = useState([]);


    useEffect(() => {
        // Az adatok betöltése az adatbázisból
        fetch("/fullList.php")
            .then((response) => response.json())
            .then((data) => {
                setHelyszinek(data);

            });
    }, []); // [] üres tömb jelzi, hogy csak egyszer fusson le az useEffect hook


    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] laptop:w-[680px] desktop:w-[1200px] mx-auto form-animation p-2 bg-sky-500/30 rounded-xl shadow-lg">
            <div className="border-solid border-sky-500 rounded-lg ">
                        <div className="grid grid-cols-1 gap-5 p-5 justify-center w-full">
                            {helyszinek.map(items => {
                                return (
                                    <div
                                        key={items.helysziID}
                                        className="grid grid-rows-3 grid-cols-1 desktop:grid-cols-3 gap-2 bg-sky-200/40 w-full p-5 rounded-xl border-2 border-sky-400/80 hover:bg-sky-500/50 duration-300"
                                    >
                                        <div className="row-span-3">
                                            <img
                                                src={""}
                                                alt={""}
                                                className="w-[200px] h-[200px] rounded-xl"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <p className="text-3xl text-sky-700">
                                                {items.helyszinNev}
                                            </p>
                                        </div>
                                        <div className="row-span-2 col-span-2">
                                            <p className="text-2xl text-sky-700">
                                                {items.helyszinVarMegye}
                                            </p>
                                            <p className="text-xl text-sky-600">
                                                {items.helyszinVaros}
                                            </p>
                                            <p className="text-xl text-sky-600">
                                                {items.helyszinUtca}
                                            </p>
                                            <p className="text-xl text-sky-600">
                                                {items.helyszinHsz}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


            </div>
        </>
    );
}
export default FullList;
