import { venues } from '../../Lists/test_list';
import { useState } from 'react';

const FullList = () => {
    const [clickedID, setClickedID] = useState();
    const [clicked, setClicked] = useState(false);

    function handleMoreInfo(state, setter, idSetter, toSet) {
        !state ? setter(true) : setter(false);
        idSetter(toSet);
    }

    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] laptop:w-[680px] desktop:w-[1200px] mx-auto form-animation p-2 bg-sky-500/30 rounded-xl shadow-lg">
                <div className="border-solid border-sky-500 rounded-lg ">
                    <div className="grid grid-cols-1 gap-5 p-5 w-full">
                        {venues.map(element => {
                            const nameLength = String(element.name).length;

                            return (
                                <div
                                    key={element.id}
                                    className="grid grid-flow-row auto-rows-auto grid-cols-1 desktop:grid-cols-3 gap-2 bg-sky-200/40 w-full p-5 rounded-xl border-2 border-sky-400/80 hover:bg-sky-500/20 duration-300"
                                    onClick={() =>
                                        handleMoreInfo(
                                            clicked,
                                            setClicked,
                                            setClickedID,
                                            element.id,
                                        )
                                    }
                                >
                                    <div className="row-span-3">
                                        <img
                                            src={element.kep}
                                            alt={element.name}
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
                                            {element.name}
                                        </p>
                                    </div>
                                    <div className="row-span-2 col-span-2">
                                        <p className="text-xl desktop:text-2xl text-sky-700">
                                            {element.megye}
                                        </p>
                                        <p className="text-lg desktop:text-xl text-sky-700">
                                            {element.varos}
                                        </p>
                                        <p className="text-lg desktop:text-xl text-sky-700">
                                            {element.utca}
                                        </p>
                                        <p className="text-lg desktop:text-xl text-sky-700">
                                            {element.hazszam}
                                        </p>
                                    </div>
                                    {clicked && clickedID === element.id && (
                                        <div className="row-span-2 col-span-3">
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Helyszín kapacitás:{' '}
                                                {element.kapacitas}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Catering:{' '}
                                                {element.etel === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Bár:{' '}
                                                {element.bar === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Klimatizált:{' '}
                                                {element.klima === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Tánctér kapacitás:{' '}
                                                {element.tancter} &#13217;
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Parkoló:{' '}
                                                {element.parkolo === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Szállás helyszínen:{' '}
                                                {element.szallas === 1
                                                    ? 'igen'
                                                    : 'nem'}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Árkategória: {element.arkat}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Megjegyzés: {element.megj}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                email: {element.email}
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
};
export default FullList;
