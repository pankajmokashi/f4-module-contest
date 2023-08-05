import SearchIcon from "./../Styles/SearchIcon.svg"

const Search = () => {
    return(
        <div className="search-div">
            <div className="heading">Social Media For Travellers</div>
            <div className="search">
                <button>
                    <img src={SearchIcon} alt="search"></img>
                </button>
                <input type="search" placeholder="Search here..."></input>
            </div>
            
        </div>
    )
}

export default Search