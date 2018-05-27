import React from 'react';

const SearchBar = (props) => {

   const handleSubmit = (event) => {
        props.bingSearch(props.searchQuery);
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={props.searchQuery} onChange={props.handleChange} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchBar;