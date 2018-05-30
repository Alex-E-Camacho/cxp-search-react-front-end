import React, { Component } from 'react';

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
        if (this.state.checked === false) {
            this.props.addResult(this.props.url);
        } else {
            this.props.removeResult(this.props.url)
        }
    }



    render() {
        return (
            <div className="checkbox">
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
                <p>{this.state.checked} </p>
            </div>
        )
    }
}


export default SaveResultCheckBox;