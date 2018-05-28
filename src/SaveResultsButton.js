import React from 'react';

const SaveResultsButton = (props) => {

    let handleClick = props.saveResults;

    return (
        <div>
            <button type="button" onClick={handleClick}>Save Results</button>
        </div>
    )
}

export default SaveResultsButton;