import { useState, useEffect } from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
        <ul className="holla">
        {
         movies.map((movie) => {
           return <div className="movie">
             <p>{movie.title}</p>
             <p>{movie.vote_average}</p>
             <img src={movie.poster_path} alt="" />
           </div>
         })
        }
        </ul>
    </div>
  );
};

export default MovieList;
