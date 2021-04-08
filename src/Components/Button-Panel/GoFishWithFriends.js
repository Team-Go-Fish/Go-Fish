import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Description from '../ListsAndSearch/Description';
import GoFishDescription from './GoFishDescription'
import gofish from '../GoFish/goFishBro.png';

const GoFishWithFriends = ({ selected, myMovies }) => {
  const [friendMovies, setFriendMovies] = useState([]);
  const [match, setMatch] = useState({});
  const [modal, setModal] = useState(true);

  let matchedMovie = {};
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
    console.log(myIds)
    console.log(friendIds)
    for (var k = 0; k < myIds.length; k ++) {
      if (friendIds.includes(myIds[k])) {
        matchedMovie = myMovies[k];
        setMatch(matchedMovie);
        return;
      }
    }
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const getFriendMovies = async() => {
    try {
      const response = await axios.get(`http://localhost:3005/movies/${selected}`);
      setFriendMovies(response.data);
    } catch (err) {
        console.log(err);
    }
  }

  useEffect(() => {
    findMatches();
    toggleModal();
  },[friendMovies]);


  return (
<<<<<<< HEAD
    <div className="GoFishWithFriends">
      <h1>{match}</h1>
      <button onClick={getFriendMovies}>Go Fish With A Friend</button>
=======
    <div className="go-fish">
    <img
      src={gofish}
      alt=""
      onClick={() => getFriendMovies()}
    ></img>
    {modal && (<GoFishDescription show={modal} onHide={toggleModal} movie={match} id="goFish"/>)}
>>>>>>> 176d5b71f0f4ab721617585116078bcf9c255e42
    </div>
  )
};

export default GoFishWithFriends;

