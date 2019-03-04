import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.onInputChange} />
      </div>
    );
  }

  onInputChange = e => {
    const term = e.target.value;

    this.setState({
      term,
    });
    this.props.onSearchTermChange(term);
  };
}

export default SearchBar;
