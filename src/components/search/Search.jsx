import React from 'react'

const Search = ({countries, searchQuery, setSearchQuery, handleSearch }) => {
    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
        >
        <label>
            <span className="visually-hidden">Find a country</span>
        </label>
        <input
            onChange={e => {
                    handleSearch(e);
                    setSearchQuery(e.target.value);
                }
            }
            value={searchQuery}
            type="text"
            id="searchBar"
            placeholder="Search country names..."
        />
    </form>
    )
    
}
export default Search;