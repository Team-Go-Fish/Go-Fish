const config = require('../config.js');
const axios = require('axios');

exports.getPopularMovies = async () => {
  console.log('I am in the popular movies helper');

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${config.token}&=en-US&page=1`,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios(options);
    const popularMovies = await response.data.results;
    return popularMovies;
  }
  catch (error) {
    console.log(error);
  }
};

exports.searchMovies = async (input) => {
  console.log('I am in the search helper');

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${config.token}&language=en-US&query=${input}&page=1&include_adult=false`,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios(options);
    const searchedMovies = await response.data.results;
    return searchedMovies;

  }
  catch (error) {
    console.log(error);
  }
};
