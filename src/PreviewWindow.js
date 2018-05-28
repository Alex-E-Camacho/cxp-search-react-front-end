import React from "react";
import ClosePreviewButton from "./ClosePreviewButton";

const PreviewWindow = (props) => {
    if (props.resultInPreview === null) {
        return null;
    }

    return (
        <div>
            <ClosePreviewButton exitPreviewWindow={props.exitPreviewWindow} />
            <iframe src={props.resultInPreview} title={props.resultInPreview}></iframe>
        </div>
    )
}

export default PreviewWindow;