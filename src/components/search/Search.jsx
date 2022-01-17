import React from 'react'

const Search = ({countries, searchQuery, setSearchQuery, handleSearch }) => {
    let tmp;
    return (
        <form>
        <label>
            <span className="visually-hidden">Find a country</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => {
                    setSearchQuery(e.target.value);
                    tmp = handleSearch(e, countries, searchQuery);
                }
            }
            type="text"
            id="searchBar"
            placeholder="Search country names..."
        />
        <button type="submit">Search</button>
    </form>
    )
    
}
export default Search;