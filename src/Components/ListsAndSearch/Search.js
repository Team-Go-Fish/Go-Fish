import React, { useState, useEffect } from 'react';
import SearchField from "react-search-field";
import axios from 'axios';

const Search = ({ setMovies }) => {
  const [input, setInput] = useState('');

  const searchMovies = () => {
    if (input.length >= 1) {
      axios.get(`http://localhost:3005/search/${input}`)
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    searchMovies();
  }, [input]);

  return (
    <SearchField
      className="QA-SearchBar"
      placeholder="Search for something to watch!"
      value={input}
      onChange={(value) => setInput(value)}
      onClick={() => setInput()}
    />
  );
};

export default Search;
