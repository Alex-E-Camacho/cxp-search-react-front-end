import React from "react";

const PreviewWindow = (props) => {
    // if (resultInPreview === null) {
    //     return null;
    // }

    return (
        <iframe src={props.resultInPreview} title={props.resultInPreview}>
        </iframe>
    )
}

export default PreviewWindow;