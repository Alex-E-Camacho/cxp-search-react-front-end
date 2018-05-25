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


  render() {
    let previewWindow = null;

    if (this.state.resultInPreview) {
      previewWindow = <PreviewWindow resultInPreview={this.state.resultInPreview} />
    }

    return (
      <div className="App">
        <div>
          <SearchBar bingSearch={this.bingSearch} />
        </div>
        <div>
          <ResultList results={this.state.results} fillPreview={this.fillPreviewWindow} />
        </div>
        <div>
          {previewWindow}
        </div>
      </div>
    );
  }
}

export default App;
