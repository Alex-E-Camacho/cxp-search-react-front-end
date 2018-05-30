import React from 'react';

const SearchBar = (props) => {
    
    let className = "search-container";

    if (props.results.length > 1) {
        className += " search-container-active"
    }

    const handleSubmit = (event) => {
         props.bingSearch(props.searchQuery);
         event.preventDefault();
     }

    
    return (
        <div className={className}>
            <form onSubmit={handleSubmit}>
                <input className="search-input" value={props.searchQuery} onChange={props.handleChange} />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;