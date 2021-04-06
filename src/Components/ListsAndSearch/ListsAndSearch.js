import { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './Search.js';
import MovieList from './MovieList.js';
import WatchList from './WatchList.js';

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
      <Search setMovies={setMovies}/>
      <MovieList
        movies={movies}
      />
      <WatchList />
    </>
  );
};

export default ListsAndSearch;