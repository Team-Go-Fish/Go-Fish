import React, { useState } from 'react';
import axios from 'axios';
import FriendEntry from './FriendEntry.js';

const FriendList = ({ users, setSelected }) => {
  // state

  // methods
  return (
    <div>
      {users.map((user, index) => (
          <FriendEntry user={user} key={index} setSelected={setSelected}/>
      ))}
    </div>
  )
};

export default FriendList;


