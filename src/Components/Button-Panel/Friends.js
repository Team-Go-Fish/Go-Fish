import React, { useState } from 'react';
import axios from 'axios';
import FriendList from './FriendList.js';
import FriendSearch from './FriendSearch.js';
import GoFishWithFriends from './GoFishWithFriends.js'

const Friends = ( {users} ) => {
  // state

  // methods

  return (
    <div>
      <FriendList users={users}/>
      <FriendSearch />
      <GoFishWithFriends />
    </div>
  )
};

export default Friends;