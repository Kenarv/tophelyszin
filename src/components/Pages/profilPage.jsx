import UploadShowButton from './uploadShowbutton';

const ProfilPage = ({ uploadShowButtonObj }) => {
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] desktop:w-[1200px] mx-auto form-animation p-20 bg-sky-300/30 rounded-xl shadow-lg">
                <div className="grid grid-rows-3">
                    <div>11</div>
                    <div>22</div>
                    <div className="items-center">
                        <UploadShowButton
                            uploadShowButtonObj={uploadShowButtonObj}
                        />
                    </div>
                </div>
            </div>

            {document.get}
        </>
    );
};
export default ProfilPage;
