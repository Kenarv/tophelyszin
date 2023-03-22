


const SearchShowButton = props => {

    const {showSearch, setShowSearch} = props.searchShowButtonObj;

    return(
        <button
        className={`transition duration-300 ease-in-out text-xl w-52 px-6 py-2 ml-15 text-white rounded-3xl ${
            !showSearch
                ? 'bg-sky-300/70 hover:bg-sky-400/50'
                : 'bg-red-300/70 hover:bg-red-400/50'
        } shadow-lg`}
        onClick={() => {!showSearch ? setShowSearch(true) : setShowSearch(false)}}
    >
        <p className="text-slate-700 font-semibold text-lg">{!showSearch ?"Keresés":"vissza"}</p>
    </button>
    )
}

export default SearchShowButton;