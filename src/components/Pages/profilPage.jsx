import UploadShowButton from './uploadShowbutton';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { venues } from '../../Lists/test_list';

const ProfilPage = ({ uploadShowButtonObj }) => {
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] laptop:w-[680px] desktop:w-[1200px] mx-auto form-animation p-2 bg-sky-500/30 rounded-xl shadow-lg">
                <div className=" p-10 grid-flow-row auto-rows-max">
                    <div className="w-2/5 mb-5">
                        <h1 className="text-3xl font-bold">Gipsz Jakab</h1>
                        <div className="text-base columns-1 desktop:columns-2 gap-2 py-2">
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
                        <div className="grid grid-cols-1 gap-5 p-5 w-full">
                            {venues.map(element => {
                                return (
                                    <div
                                        key={element.id}
                                        className="grid grid-rows-3 grid-cols-1 desktop:grid-cols-3 gap-2 bg-sky-200/40 w-full p-5 rounded-xl border-2 border-sky-400/80 hover:bg-sky-500/90 duration-300"
                                    >
                                        <div className="row-span-3">
                                            <img
                                                src={element.kep}
                                                alt={element.name}
                                                className="w-1/2 h-1/2 rounded-full"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <p className="text-3xl text-sky-700">
                                                {element.name}
                                            </p>
                                        </div>
                                        <div className="row-span-2 col-span-2">
                                            <p className="text-2xl text-sky-700">
                                                {element.megye}
                                            </p>
                                            <p className="text-xl text-sky-600">
                                                {element.varos}
                                            </p>
                                            <p className="text-xl text-sky-600">
                                                {element.utca}
                                            </p>
                                            <p className="text-xl text-sky-600">
                                                {element.hazszam}
                                            </p>
                                        </div>
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
