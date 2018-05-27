import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import PreviewWindow from './PreviewWindow';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      resultInPreview: null,
      selectedResults: []
    }

    this.bingSearch = this.bingSearch.bind(this);
    this.fillPreviewWindow = this.fillPreviewWindow.bind(this);
    this.addResult = this.addResult.bind(this);
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

  render() {

    return (
      <div className="App">
        <div>
          <SearchBar bingSearch={this.bingSearch} />
          <p>{this.state.selectedResults}</p>
        </div>
        <div>
          <ResultList results={this.state.results} fillPreview={this.fillPreviewWindow} addResult={this.addResult}/>
        </div>
        <div>
          <PreviewWindow resultInPreview={this.state.resultInPreview} />
        </div>
      </div>
    );
  }
}

export default App;
