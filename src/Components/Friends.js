import React, { useState } from 'react';
import axios from 'axios';
import FriendList from './FriendList.js';
import FriendSearch from './FriendSearch.js';

const Friends = ( props ) => {
  // state
  const user = props.user;

  // methods

  return (
    <div>

      <FriendList />
      <FriendSearch />

    </div>
  )
};

export default Friends;