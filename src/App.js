import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ResultList from './ResultList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      selectedResults: []
    }

    this.bingSearch = this.bingSearch.bind(this);
  }

  bingSearch(term) {
    fetch('http://localhost:8000/search/results?search_query=' + term)
    .then((response) => {
      response.json()
      .then((json) => {
        this.setState({results: json.value})
      })
     })
    
  }  


  render() {
    return (
      <div className="App">
        <div>
          <SearchBar bingSearch={this.bingSearch} />
        </div>
        <div>
          <ResultList results={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default App;
