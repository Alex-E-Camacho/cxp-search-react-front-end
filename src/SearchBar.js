import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.state = {searchQuery: ''}

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({searchQuery: event.target.value});
  }

  handleSubmit(event) {
      this.props.bingSearch(this.state.searchQuery);
      event.preventDefault();
  }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.searchQuery} onChange={this.handleChange}/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SearchBar;