import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoFishDescription from './GoFishDescription'
import Button from 'react-bootstrap/Button';

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
    <div className="go-fish">
      <Button variant="outline-info" onClick={() => getFriendMovies()}>Go Fish!</Button>
      {modal && (<GoFishDescription show={modal} onHide={toggleModal} movie={match} id="goFish"/>)}
    </div>
  )
};

export default GoFishWithFriends;

