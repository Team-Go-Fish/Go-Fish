import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendList from './FriendList.js';
import FriendSearch from './FriendSearch.js';
import GoFishWithFriends from './GoFishWithFriends.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const Friends = ({ user, friends, myMovies }) => {
  const [lgShow, setLgShow] = useState(false);
  const [selected, setSelected] = useState('');
  // const [friendList, setFriendList] = useState([]);

  // // methods
  // const getFriendList = (userID) => {
  //   const url = `http://localhost:3005/friends/${userID}`;
  //   axios.get(url)
  //     .then((res) => {
  //       setFriendList(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // // effects
  // useEffect(() => {
  //   getFriendList(currentUser.id);
  // }, [currentUser]);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Friends</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="friends-list"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Friends List">
            Friends List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FriendSearch friends={friends} user={user} />
          <FriendList friends={friends} setSelected={setSelected}/>
          <GoFishWithFriends selected={selected} myMovies={myMovies}/>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default Friends;