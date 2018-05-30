import React from 'react';
import ResultPreviewButton from './ResultPreviewButton';
import SaveResultCheckbox from './SaveResultCheckbox';

const ResultItem = (props) => {
    if (!props.result) {
        return null;
    }

    return (
        <div className="result-item">
            
            <table>
                <tbody>
                    <tr>
                        <th className="result-title"><a href={props.result.url} target="_blank">{props.result.name}</a></th>
                        <th><SaveResultCheckbox addResult={props.addResult} url={props.result.url} removeResult={props.removeResult}/></th>
                    </tr>
                    <tr>
                        <td className="display-url">{props.result.displayUrl}</td>
                    </tr>
                    <tr>
                        <td>{props.result.snippet}</td>
                    </tr>
                </tbody>
            </table>
            {/* <ResultPreviewButton fillPreview={props.fillPreview} url={props.result.url}/> */}
        </div>
    )
}

export default ResultItem;