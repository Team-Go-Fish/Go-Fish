import React from 'react';
import FriendEntry from './FriendEntry.js';

const FriendList = ({ users, setSelected }) => {

  return (
    <div>
      {users.map((user, index) => (
          <FriendEntry user={user} key={index} setSelected={setSelected}/>
      ))}
    </div>
  )
};

export default FriendList;


