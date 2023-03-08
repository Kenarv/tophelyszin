const UploadForm = () => {
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[40rem]  mx-auto form-animation p-20 bg-sky-300/30 rounded-xl shadow-lg">
                <form action="">
                    <div className="flex flex-col border-solid border-4 border-sky-500/50 rounded-lg p-5">
                        <div className="flex flex-row items-center">
                            <label className="font-bold py-2" htmlFor="Irsz">Irányítószám:</label>
                            <input className="w-12 h-8 ml-2 border-2 border-sky-500 rounded-lg py-1 focus:outline-none focus:border-sky-700" type="text" name="Irsz" id="IrszID" />

                            <label className="font-bold py-2" htmlFor="Varos">Város:</label>
                            <input className="w-32 h-8 ml-2 border-2 border-sky-500 rounded-lg py-1 focus:outline-none focus:border-sky-700" type="text" name="Varos" id="VarosID" />
                        </div>
                        <div className="flex flex-row">
                            <label className="font-bold py-2" htmlFor="Utca">Utcanév:</label>
                            <input className="w-24"type="text" name="Utca" id="UtcaID"/>

                            <label className="font-bold py-2" htmlFor="Hazszam">Házszám:</label>
                            <input className="w-10"type="text" name="Hazszam" id="HazszamID"/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
export default UploadForm;
