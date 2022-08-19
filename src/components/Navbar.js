import SearchForm from "./SearchForm";

export default function Navbar({ searchData, setSearchData }){
    return (
        <nav className="navbar">
            <div className="navbar__title">Note App</div>
            <SearchForm searchData={ searchData } setSearchData={ setSearchData }/>
        </nav>
    )
}