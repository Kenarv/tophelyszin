import th_logo from '../../media/Th-logo.png';


const FooterComp = () => {
    return(
        <>

            <div className="bg-sky-300/50 w-full h-[100px] align-center text-center py-2 inset-y-0 static bottom-0 ">
                <div className="grid grid-rows-1 grid-cols-2">
                    <div className='text-sm justify-items-center '>
                        <p>Tophelyszin minden jog fentartva &#169;</p>
                    </div>
                    <div className='justify-items-center'>
                        {th_logo}
                    </div>
                </div>
                
            </div>            



        </>
    )
}
export default FooterComp;