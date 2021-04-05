import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './Search.js';
import MovieList from './MovieList.js';
//  import watchList

const ListsAndSearch = ({ props }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    axios.get('http://localhost:3005/movies')
      .then((response => setMovies(response.data)))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <SearchBar />
      <MovieList
        movies={movies}
      />
    </>
  );
};

export default ListsAndSearch;