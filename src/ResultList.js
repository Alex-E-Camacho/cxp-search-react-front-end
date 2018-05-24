import React from 'react';

const ResultList = ({results}) => {
    if (!results) {
        return <div>null</div>
    }
    
    const searchResults = results.map((result) => {
        return (
            <li>{result.url}</li>
        )
    })
    
    return (
        <div>
            <ul>
                {searchResults}
            </ul>
        </div>
    )   
}

export default ResultList;