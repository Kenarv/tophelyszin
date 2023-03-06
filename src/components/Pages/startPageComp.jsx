import SearchShowButton from "./searchShowButton";


const StartPage = props => {

    return (
        <>
        
        <div className="text-center mt-15">
            <h1 className="font-bold text-xl ">Üdvözöljük az oldalunkon!</h1>
            <p className="text-blue-600 px-3 py-3">A top Helyszín minden ezközt megad ahhoz hogy megtalálja a megfelelő helyszíne a nagy naphoz.</p>




        </div>
        <div className="grid justify-items-center animate-pulse">
            <SearchShowButton searchShowButtonObj={props.searchShowButtonObj}/>

        </div>
        
        </>

    );
}

export default StartPage;