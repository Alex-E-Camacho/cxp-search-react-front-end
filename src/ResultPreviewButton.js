import React from 'react';

const ResultPreviewButton = (props) => {

    let handleClick = props.fillPreview;

    return (
        <div>
            <button type="button" onClick={() => handleClick(props.url)}>Preview</button>
        </div>
    )
}

export default ResultPreviewButton;