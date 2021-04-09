import React, { useState } from 'react';
import axios from 'axios';
//import Description from '../ListsAndSearch/Description';

const GoFishWithFriends = ({ selected, myMovies }) => {
  const [friendMovies, setFriendMovies] = useState([]);
  // const [match, setMatch] = useState({});

  let match = ''
  const findMatches = () => {
    console.log(myMovies);
    console.log(friendMovies)

    let myIds = [];
    for (var i = 0; i < myMovies.length; i ++) {
      myIds.push(myMovies[i].moviedbid);
    }
    let friendIds = [];
    for (var j = 0; j < friendMovies.length; j ++) {
      friendIds.push(friendMovies[j].moviedbid)
    }
    for (var k = 0; k < myIds.length; k ++) {
      if (friendIds.includes(myIds[k])) {
        match = myMovies[k];
        break;
      }
    }
    console.log(match)
  }

  const getFriendMovies = () => {
    axios.get(`http://3.131.99.55:3005/movies/${selected}`)
      .then((response => setFriendMovies(response.data)))
      .then(findMatches)
      .catch((error) => console.log(error));
  };


  return (
    <div className="GoFishWithFriends">
      <h1>{match}</h1>
      <button onClick={getFriendMovies}>Go Fish With A Friend</button>
      {/* <Description movie={match} /> */}
    </div>
  )
};

export default GoFishWithFriends;