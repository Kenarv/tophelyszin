import { venues } from '../../Lists/test_list';
import ResultShowButton from './resultShowButton';
import { useState } from 'react';

const ResultList = ({ filterObj, resultShowButtonObj }) => {
    const { filteredData } = filterObj;

    const [clickedID, setClickedID] = useState();
    const [clicked, setClicked] = useState(false);

    function handleMoreInfo(state, setter, idSetter, toSet) {
        !state ? setter(true) : setter(false);
        idSetter(toSet);
    }

    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] laptop:w-[680px] desktop:w-[1200px] mx-auto form-animation p-2 bg-gradient-to-r from-sky-300/50 via-sky-600/50 to-sky-500/50 rounded-xl shadow-lg">
                <div className="border-solid border-sky-500 rounded-lg border-2">
                    <div className="grid grid-cols-1 gap-5 p-5 w-full">
                        {filteredData.map(element => {
                            const nameLength = String(element.name).length;
                            return (
                                <div
                                    key={element.helyszinID}
                                    className="grid grid-flow-row auto-rows-auto grid-cols-1 desktop:grid-cols-3 gap-2 bg-sky-200/40 w-full p-5 rounded-xl border-2 border-sky-400/80 hover:bg-sky-500/20 duration-300"
                                    onClick={() =>
                                        handleMoreInfo(
                                            clicked,
                                            setClicked,
                                            setClickedID,
                                            element.helyszinID,
                                        )
                                    }
                                >
                                    <div className="row-span-3">
                                        <img

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
                                            {element.helyszinNev}
                                        </p>
                                    </div>
                                    <div className="row-span-2 col-span-2">
                                        <p className="text-xl desktop:text-2xl text-sky-700">
                                            {element.helyszinVarMegye}
                                        </p>
                                        <p className="text-lg desktop:text-xl text-sky-700">
                                            {element.helyszinVaros}
                                        </p>
                                        <p className="text-lg desktop:text-xl text-sky-700">
                                            {element.helyszinUtca}
                                        </p>
                                        <p className="text-lg desktop:text-xl text-sky-700">
                                            {element.helyszinHsz}
                                        </p>
                                    </div>
                                    {clicked && clickedID === element.helyszinID && (
                                        <div className="row-span-2 col-span-3 bg-gradient-to-t from-sky-300/40 via-sky-300/70 to-sky-400/70 rounded-xl text-center">
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
                                                {element.ital === 1
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
                                                Árkategória: {element.arkategoria}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                Megjegyzés: {element.megjegyzes}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-800">
                                                email: {element.helyszinEmail}
                                            </p>
                                        </div>
                                    )}
                                    <div className="grid col-span-3 justify-items-end"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="grid justify-items-center mb-20">
                    <ResultShowButton
                        resultShowButtonObj={resultShowButtonObj}
                    />
                </div>
            </div>
        </>
    );
};
export default ResultList;
