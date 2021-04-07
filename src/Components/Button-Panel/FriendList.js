import React, { useState } from 'react';
import axios from 'axios';
import FriendEntry from './FriendEntry.js';

const FriendList = ({ friends, setSelected }) => {
  // state

  // methods
  return (
    <div>
      {friends.map((user, index) => (
          <FriendEntry user={user} key={index} setSelected={setSelected}/>
      ))}
    </div>
  )
};

export default FriendList;


