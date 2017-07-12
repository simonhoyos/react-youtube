import React, { Component } from 'react';
import YTSSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBkYZoFpfwQXBUXrhGGNEUGIMHYf-UXz7c';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0];
      });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch} />
      </div>
    );
  }
}

export default App;