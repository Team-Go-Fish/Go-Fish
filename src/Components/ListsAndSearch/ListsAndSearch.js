import { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './Search.js';
import MovieList from './MovieList.js';
import WatchList from './WatchList.js';

const ListsAndSearch = ({ myMovies, user, getMyMovies, setPopular }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    axios.get('http://3.131.99.55:3005/movies')
      .then((response => {
        //  remove after demo
        const noTom = response.data.filter(({ title }) => !title.includes("Tom"));
        //  remove after demo
        setPopular(noTom);
        setMovies(noTom);
        }))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Search setMovies={setMovies} setPopular={setPopular}/>
      <MovieList
        movies={movies}
        user={user}
        getMyMovies={getMyMovies}
      />
      <WatchList
        myMovies={myMovies}
        user={user}
        movies={movies}
        getMyMovies={getMyMovies}
      />
    </>
  );
};

export default ListsAndSearch;