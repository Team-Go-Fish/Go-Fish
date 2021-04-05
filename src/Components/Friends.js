import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendList from './FriendList.js';
import FriendSearch from './FriendSearch.js';

const testUser = {
  "id": 1,
  "username": "princess",
  "firstname": "Princess",
  "lastname": "Leia",
  "email": "leia@starwars.com",
  "phone": 1234567890,
  "password": "hash"
};

const Friends = ( props ) => {
  // variables/state
  const currentUser = props.user || testUser; // TODO remove default used during testing
  const [friendList, setFriendList] = useState([]);

  // methods
  const getFriendList = (userID) => {
    const url = `http://localhost:3005/friends/${userID}`;
    axios.get(url)
      .then((res) => {
        console.log(res);
        setFriendList(res.body);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // initial load
  useEffect(() => {
    getFriendList(currentUser.id);
  }, []);

  console.log({currentUser});
  return (
    <div>
      <p>testss</p>
      <FriendList />
      <FriendSearch friends={friendList} />

    </div>
  )
};

export default Friends;