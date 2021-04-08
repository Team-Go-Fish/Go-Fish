import React, { useState } from 'react';
import axios from 'axios';
import FriendList from './FriendList.js';
import GoFishWithFriends from './GoFishWithFriends.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FriendSearch from './FriendSearch.js';

const Friends = ({ userID, user, friends, myMovies }) => {
  const [lgShow, setLgShow] = useState(false);
  const [selected, setSelected] = useState('');
  // const [friendList, setFriendList] = useState([]);

  return (
    <>
      <Button variant="outline-info" onClick={() => setLgShow(true)}>Friends</Button>
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
          <FriendSearch friends={friends} user={user} userID={userID}/>
          <FriendList friends={friends} userID={userID} setSelected={setSelected}/>
          <GoFishWithFriends selected={selected} userID={userID} myMovies={myMovies}/>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default Friends;