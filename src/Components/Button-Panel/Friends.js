import React, { useState } from 'react';
import FriendList from './FriendList.js';
import FriendSearch from './FriendSearch.js';
import GoFishWithFriends from './GoFishWithFriends.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const Friends = ({ users, myMovies }) => {
  const [lgShow, setLgShow] = useState(false);
  const [selected, setSelected] = useState('');

  // methods

  return (
      <div>
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
          <FriendList users={users} setSelected={setSelected}/>
          <GoFishWithFriends selected={selected} myMovies={myMovies}/>
        </Modal.Body>
      </Modal>
    </>

      {/* <FriendSearch /> */}
    </div>
  )
};

export default Friends;