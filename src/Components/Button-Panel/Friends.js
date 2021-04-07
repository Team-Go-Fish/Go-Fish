import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendList from './FriendList.js';
import FriendSearch from './FriendSearch.js';

const Friends = ( {users} ) => {
  // variables/state
  const currentUser = users[0]; // TODO remove default used during testing
  currentUser.id = 1;
  const [friendList, setFriendList] = useState([]);
  // const [currentUser1, setCurrentUser] = useState(currentUser);

  // methods
  const getFriendList = (userID) => {
    const url = `http://localhost:3005/friends/${userID}`;
    axios.get(url)
      .then((res) => {
        setFriendList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // effects
  useEffect(() => {
    getFriendList(currentUser.id);
  }, [currentUser]);

  return (
    <div>

      <FriendList users={users}/>
      <FriendSearch friends={friendList} users={users} user={currentUser} />

    </div>
  )
};

export default Friends;