import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import PreviewWindow from './PreviewWindow';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      results: [],
      resultInPreview: null,
      selectedResults: []
    }

    this.bingSearch = this.bingSearch.bind(this);
    this.fillPreviewWindow = this.fillPreviewWindow.bind(this);
    this.addResult = this.addResult.bind(this);
    this.removeResult = this.removeResult.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value })
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
  
  fillPreviewWindow(url) {
    this.setState({resultInPreview: url})
  }

  addResult(url) {
    this.setState({selectedResults: [...this.state.selectedResults, url]})
  }

  removeResult(url) {
    let currentSelectedResults = [...this.state.selectedResults];
    let index = currentSelectedResults.indexOf(url);
    currentSelectedResults.splice(index, 1);
    this.setState({selectedResults: currentSelectedResults})
  }

  saveResults() {
    fetch('http://localhost:8000/search', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search_query: this.state.searchQuery,
        results: this.state.selectedResults
      })
    })
  }

  render() {

    return (
      <div className="App">
        <div>
          <SearchBar bingSearch={this.bingSearch} searchQuery={this.state.searchQuery} handleChange={this.handleChange}/>
          <p>{this.state.selectedResults}</p>
          <p>{this.state.searchQuery}</p>
        </div>
        <div>
          <ResultList 
            results={this.state.results} 
            fillPreview={this.fillPreviewWindow} 
            addResult={this.addResult}
            removeResult={this.removeResult}
            />
        </div>
        <div>
          <PreviewWindow resultInPreview={this.state.resultInPreview} />
        </div>
      </div>
    );
  }
}

export default App;
