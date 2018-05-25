import React from "react";

const PreviewWindow = (resultInPreview) => {
    // if (resultInPreview === null) {
    //     return null;
    // }

    return (
        <iframe src={resultInPreview} title={resultInPreview}>
        </iframe>
    )
}

export default PreviewWindow;