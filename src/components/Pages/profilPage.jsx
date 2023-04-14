import UploadShowButton from './uploadShowbutton';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { venues } from '../../Lists/test_list';
import { useState } from 'react';

const ProfilPage = ({ uploadShowButtonObj,pwChangeShowObj,loggedButtonObj }) => {

    const [clicked , setClicked] = useState(false);
    const { setShowPwChange } = pwChangeShowObj;
    const { setLogged }=loggedButtonObj;
    console.log(clicked);
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] laptop:w-[680px] desktop:w-[1200px] mx-auto form-animation p-2 bg-sky-500/30 rounded-xl shadow-lg">
                <div className=" p-10 grid-flow-row auto-rows-max">
                    <div className="w-2/5 mb-5">
                        <div className=" flex items-center border-b-2 border-sky-500 pb-2">
                            <h1 className="text-3xl font-bold mr-2">
                                Gipsz Jakab
                            </h1>
                            <div className='flex items-center'>
                                <button
                                    className="transition duration-300 ease-in-out bg-red-500/70 text-xl h-10 desktop:h-5 w-17 px-3  hover:bg-red-200/70 text-white rounded-3xl shadow-lg"
                                    onClick={() => {setLogged(false)}}
                                >
                                    <p className="text-slate-700 font-semibold text-sm">
                                        kilépés
                                    </p>
                                </button>
                                <button
                                    className="transition duration-300 ease-in-out bg-teal-500/70 ml-2 text-xl h-10 desktop:h-5 w-17 px-3  hover:bg-teal-200/70 text-white rounded-3xl shadow-lg"
                                    onClick={() => {setShowPwChange(true)}}
                                >
                                    <p className="text-slate-700 font-semibold text-sm">
                                        jelszó változtatás
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div className="text-base columns-1 desktop:columns-2 gap-2 pt-5">
                            <div className="flex items-center gap-2">
                                <AiOutlineMail />
                                <p>Email@Email</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiOutlinePhone />
                                <p>+36301234567</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-solid border-sky-500 rounded-lg border-2">
                        <div className="grid grid-cols-1 gap-5 p-5 w-full" >
                            {venues.map(element => {
                                return (
                                    <div
                                        key={element.id}
                                        className="grid grid-flow-row auto-rows-auto grid-cols-1 desktop:grid-cols-3 gap-2 bg-sky-200/40 w-full p-5 rounded-xl border-2 border-sky-400/80 hover:bg-sky-500/30 duration-300"
                                        onClick={()=>!clicked ?setClicked(true):setClicked(false)
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
                                            <p className="text-2xl desktop:text-3xl text-sky-700">
                                                {element.name}
                                            </p>
                                        </div>
                                        <div className="row-span-2 col-span-2">
                                            <p className="text-xl desktop:text-2xl text-sky-700">
                                                {element.megye}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-600">
                                                {element.varos}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-600">
                                                {element.utca}
                                            </p>
                                            <p className="text-lg desktop:text-xl text-sky-600">
                                                {element.hazszam}
                                            </p>
                                        </div>
                                        {clicked && 
                                        <div className="row-span-2 col-span-3">
                                            <p className="text-lg desktop:text-xl text-sky-600">
                                                Helyszín kapacitás: {element.kapacitas}
                                            </p>
                                        </div>}
                                        <div className="grid col-span-3 justify-items-end">
                                            <div>
                                                <button
                                                    className={`transition duration-300 ease-in-out bg-red-500/70 text-xl h-12 w-35 px-6 py-2 ml-15 hover:bg-red-200/70 text-white rounded-3xl shadow-lg`}
                                                    onClick={() => {}}
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
