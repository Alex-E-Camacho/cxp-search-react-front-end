import React from 'react';
import ResultPreviewButton from './ResultPreviewButton';

const ResultItem = (props) => {
    if (!props.result) {
        return null;
    }

    return (
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
                <tr>
                    <ResultPreviewButton fillPreview={props.fillPreview} url={props.result.url}/>
                </tr>
            </tbody>
        </table>
    )
}

export default ResultItem;