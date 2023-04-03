import { venues } from '../../Lists/test_list';


const FullList = () => {
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] laptop:w-[680px] desktop:w-[1200px] mx-auto form-animation p-2 bg-sky-500/30 rounded-xl shadow-lg">
            <div className="border-solid border-sky-500 rounded-lg ">
                        <div className="grid grid-cols-1 gap-5 p-5 justify-center w-full">
                            {venues.map(element => {
                                return (
                                    <div
                                        key={element.id}
                                        className="grid grid-rows-3 grid-cols-1 desktop:grid-cols-3 gap-2 bg-sky-200/40 w-full p-5 rounded-xl border-2 border-sky-400/80 hover:bg-sky-500/50 duration-300"
                                    >
                                        <div className="row-span-3">
                                            <img
                                                src={element.kep}
                                                alt={element.name}
                                                className="w-[200px] h-[200px] rounded-xl"
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
