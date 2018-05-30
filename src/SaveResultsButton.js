import React from 'react';

const SaveResultsButton = (props) => {

    if (props.selectedResults.length === 0) {
        return null
    }

    let handleClick = props.saveResults;

    return (
        <div className="save-results-button-container">
            <button className="save-results-button" type="button" onClick={handleClick}>Save Results</button>
        </div>
    )
}

export default SaveResultsButton;