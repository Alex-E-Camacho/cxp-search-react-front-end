import React from 'react';
import ResultItem from './ResultItem';

const ResultList = ({results}) => {
    if (!results) {
        return <div>null</div>
    }
    
    const searchResults = results.map((result) => {
        return (
            <ResultItem result={result} key={result.id}/>
        )
    })
    
    return (
        <div>
            {searchResults}
        </div>
    )   
}

export default ResultList;