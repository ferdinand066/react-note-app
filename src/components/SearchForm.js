export default function SearchForm({ searchData, setSearchData }){
    function handleSearchDataChange(e){
        setSearchData(e.target.value);
    }

    return (
        <input type="text" className="navbar__search" onChange={ handleSearchDataChange } value={ searchData }></input>
    )
}