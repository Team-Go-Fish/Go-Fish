import React, { useState } from 'react';
import axios from 'axios';

const GoFishWithFriends = ({ selected, myMovies }) => {
  const [friendMovies, setFriendMovies] = useState([]);

  let match = '';
  const findMatches = (friendMovies, myMovies) => {
    for (var i = 0; i < myMovies.length; i ++) {
      let currentMovie = myMovies[i];
      if(friendMovies.find(currentMovie) !== undefined) {
        match = currentMovie;
      }
    }
    match = 'No Matches'
  }

  const getFriendMovies = (selected) => {
    axios.get(`/movies/${selected}`)
      .then((response => setFriendMovies(response.data)))
      .then(findMatches(friendMovies, myMovies))
      .catch((error) => console.log(error));
  };

  return (
    <div className="GoFishWithFriends">
      <h1>{match}</h1>
      <button onClick={getFriendMovies(selected)}>Go Fish With A Friend</button>
    </div>
  )
};

export default GoFishWithFriends;