import React from 'react';

const ClosePreviewButton = (props) => {
    return (
        <div>
            <button type="button" onClick={props.exitPreviewWindow}>X</button>
        </div>
    )
}

export default ClosePreviewButton;