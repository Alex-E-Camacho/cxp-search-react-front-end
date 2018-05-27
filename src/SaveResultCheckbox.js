import React, { Component } from 'react';

// const SaveResultCheckBox = (props) => {

//     let handleClick = props.addResult;

//     return (
//         <div>
//             <button type="button" onClick={() => handleClick(props.url)}>Add</button>
//         </div>
//     )
// }


class SaveResultCheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({ checked: !this.state.checked });
        this.props.addResult(this.props.url);
    }


    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
                <p>{this.state.checked} </p>
            </div>
        )
    }
}


export default SaveResultCheckBox;