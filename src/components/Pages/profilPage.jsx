import UploadShowButton from './uploadShowbutton';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
const ProfilPage = ({ uploadShowButtonObj }) => {
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] desktop:w-[1200px] mx-auto form-animation p-20 bg-sky-300/30 rounded-xl shadow-lg">
                <div className="grid grid-rows-3">
                    <div className="w-2/5 ">
                        <h1 className="text-2xl font-bold">Helyszín neve</h1>
                        <div className="text-base columns-1 desktop:columns-2 gap-2 py-2">
                            <div className="flex ">
                                <AiOutlineMail className="align-middle"/>
                                <p >Email@Email</p>
                            </div>
                            <div className="flex">
                                <AiOutlinePhone/>
                                <p>+36301234567</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-solid border-sky-500 rounded-lg border-2 p-10">
                        "itt lesznek a helyszin profilon található feltöltések"
                    </div>
                    <div className=" grid justify-items-center">
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
