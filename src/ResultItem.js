import React from 'react';

const ResultItem = ({result}) => {
    if (!result) {
        return null;
    }

    return (
        <table>
            <tbody>
                <tr>
                    <th><a href={result.url}>{result.name}</a></th>
                </tr>
                <tr>
                    <td>{result.displayUrl}</td>
                </tr>
                <tr>
                    <td>{result.snippet}</td>
                </tr>
                
            </tbody>
        </table>
    )
}

export default ResultItem;