import React, { useState, useEffect } from 'react';
import SearchField from "react-search-field";
import axios from 'axios';

const Search = ({ setMovies, setPopular }) => {
  const [input, setInput] = useState('');

  const searchMovies = () => {
    if (input.length >= 1) {
      axios.get(`http://3.131.99.55:3005/search/${input}`)
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
    } else if(input.length === 0) {
      axios.get('http://3.131.99.55:3005/movies')
      .then((response => {
        //  remove after demo
        const noTom = response.data.filter(({ title }) => !title.includes("Tom"));
        //  remove after demo
        setPopular(noTom);
        setMovies(noTom);
        }))
      .catch((error) => console.log(error))
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
