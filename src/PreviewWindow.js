import React from "react";

const PreviewWindow = (props) => {
    if (props.resultInPreview === null) {
        return null;
    }

    return (
        <div>
            <iframe src={props.resultInPreview} title={props.resultInPreview}></iframe>
        </div>
    )
}

export default PreviewWindow;