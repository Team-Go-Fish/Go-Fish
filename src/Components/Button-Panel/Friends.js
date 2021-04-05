import React, { useState } from 'react';
import axios from 'axios';
import FriendList from './FriendList.js';
import FriendSearch from './FriendSearch.js';

const Friends = ( {users} ) => {
  // state

  // methods

  return (
    <div>

      <FriendList users={users}/>
      <FriendSearch />

    </div>
  )
};

export default Friends;