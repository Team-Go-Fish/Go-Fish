import React, { useState } from 'react';
import axios from 'axios';
import FriendList from './'

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