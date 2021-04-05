const config = require('./config.js');
const axios = require('axios');

exports.getPopularMovies = async () => {
  console.log('I am in the popular movies helper');
  try {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${config.token}&=en-US&page=1`,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await axios(options);
    const popularMovies = await response.data.results;
    return popularMovies;
  }
  catch (error) {
    console.log(error);
  }
};
