import {useEffect, useState} from "react";
import ImagesList from '../../Lists/imagesList';

const FullList = () => {
    const [helyszinek, setHelyszinek] = useState([]);
    const [clickedID, setClickedID] = useState();
    const [clicked, setClicked] = useState(false);

    function handleMoreInfo(state, setter, idSetter, toSet) {
        !state ? setter(true) : setter(false);
        idSetter(toSet);
    }


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
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] laptop:w-[680px] desktop:w-[1200px] mx-auto form-animation p-2 bg-gradient-to-r from-sky-300/50 via-sky-600/50 to-sky-500/50 rounded-xl shadow-lg">
                <div className="border-solid border-sky-500 rounded-lg ">
                    <div className="grid grid-cols-1 gap-5 p-5 w-full">
                        {helyszinek.map(items => {
                            const nameLength = String(items.helyszinNev).length;

                            return (
                                <div
                                    key={items.helysziID}
                                    className="grid grid-flow-row auto-rows-auto grid-cols-1 desktop:grid-cols-3 gap-2 bg-sky-200/40 w-full p-5 rounded-xl border-2 border-sky-400/80 hover:bg-sky-500/20 duration-300"
                                    onClick={() =>
                                        handleMoreInfo(
                                            clicked,
                                            setClicked,
                                            setClickedID,
                                            items.helyszinID,
                                        )
                                    }
                                >
                                    <div className="row-span-3">
                                        <img
                                            alt=''
                                            src={ImagesList.wip}
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
                                            {items.helyszinNev}
                                        </p>
                                    </div>
                                    <div className="row-span-2 col-span-2">
                                        <p className="text-xl desktop:text-2xl text-sky-700">
                                            {items.helyszinVarMegye}
                                        </p>
                                        <p className="text-lg desktop:text-xl text-sky-700">
                                            {items.helyszinVaros}
                                        </p>
                                        <p className="text-lg desktop:text-xl text-sky-700">
                                            {items.helyszinUtca}
                                        </p>
                                        <p className="text-lg desktop:text-xl text-sky-700">
                                            {items.helyszinHsz}
                                        </p>
                                    </div>
                                    {clicked && clickedID === items.helyszinID && (
                                        <div className="row-span-2 col-span-3 bg-gradient-to-t from-sky-300/40 via-sky-300/70 to-sky-400/70 rounded-xl text-center">
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Helyszín kapacitás:{' '}
                                                {items.kapacitas}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Catering:{' '}
                                                {items.etel === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Bár:{' '}
                                                {items.ital === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Klimatizált:{' '}
                                                {items.klima === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Tánctér kapacitás:{' '}
                                                {items.tancter} &#13217;
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Parkoló:{' '}
                                                {items.parkolo === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Szállás helyszínen:{' '}
                                                {items.szallas === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Árkategória: {items.arkategoria}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Megjegyzés: {items.megjegyzes}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                email: {items.helyszinEmail}
                                            </p>
                                        </div>
                                    )}
                                    <div className="grid col-span-3 justify-items-end"></div>
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
