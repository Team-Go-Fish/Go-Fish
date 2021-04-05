import { useState, useEffect } from 'react';
import Glide from "@glidejs/glide";

const sliderConfiguration = {
  gap: 10,
  perView: 4,
  startAt: 0,
  type: "slider"
};

const MovieList = ({ movies }) => {
  const slider = new Glide('.glide', sliderConfiguration);

  useEffect(() => {
    return () => slider.mount();
  }, [slider])

  return (
    <>
      {" "}
      <div className='glide'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
        {
         movies.map((movie) => {
           return <div className="glide__slide slider">
             <p>{movie.title}</p>
             <p>{movie.vote_average}</p>
             <img src={movie.poster_path} alt="" />
           </div>
         })
        }
        </ul>
      </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='glide__arrow glide__arrow--prev'
            data-glide-dir='<'
          >
            prev
          </button>
          <button
            className='glide__arrow glide__arrow--next'
            data-glide-dir='>'
          >
            next
          </button>
        </div>
      </div>
    </>
  );
  // return (
  //   <div className="movie-list">
  //       <ul className="holla">
  //       {
  //        movies.map((movie) => {
  //          return <div className="movie">
  //            <p>{movie.title}</p>
  //            <p>{movie.vote_average}</p>
  //            <img src={movie.poster_path} alt="" />
  //          </div>
  //        })
  //       }
  //       </ul>
  //   </div>
  // );
};

export default MovieList;
