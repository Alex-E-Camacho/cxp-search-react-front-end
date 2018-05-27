import React from 'react';
import ResultItem from './ResultItem';

const ResultList = (props) => {
    if (!props.results) {
        return <div>null</div>
    }

    const searchResults = props.results.map((result) => {
        return (
            <ResultItem 
                result={result} 
                key={result.id} 
                fillPreview={props.fillPreview} 
                addResult={props.addResult}
                removeResult={props.removeResult}
                />
        )
    })
    
    return (
        <div>
            {searchResults}
        </div>
    )   
}

export default ResultList;