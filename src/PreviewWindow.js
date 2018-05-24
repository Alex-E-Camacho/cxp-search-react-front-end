import React from "react";

const PreviewWindow = ({resultInPreview}) => {
    if (!resultInPreview) {
        return null;
    }

    return (
        <iframe src={resultInPreview.url} title={resultInPreview.name}>
        </iframe>
    )
}

export default PreviewWindow;