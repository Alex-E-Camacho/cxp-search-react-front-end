import React from 'react';
import ResultPreviewButton from './ResultPreviewButton';
import SaveCheckBox from './SaveCheckBox';

const ResultItem = (props) => {
    if (!props.result) {
        return null;
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th><a href={props.result.url}>{props.result.name}</a></th>
                    </tr>
                    <tr>
                        <td>{props.result.displayUrl}</td>
                    </tr>
                    <tr>
                        <td>{props.result.snippet}</td>
                    </tr>
                </tbody>
            </table>
            <SaveCheckBox addResult={props.addResult}/>
            <ResultPreviewButton fillPreview={props.fillPreview} url={props.result.url}/>
        </div>
    )
}

export default ResultItem;