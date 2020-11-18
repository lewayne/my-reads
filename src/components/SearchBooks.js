import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


class SearchBooks extends Component {
  render() {
    const { searchBooks, myBooks, onSearch, onResetSearch, onMove } = this.props;
    console.log(myBooks);
    return (
      <div className="search-books">
        <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />
        <SearchResults searchBooks={searchBooks} myBooks={myBooks} onMove={onMove} />
      </div>
    );
  }
}

export default SearchBooks;
