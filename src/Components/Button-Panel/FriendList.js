import React from 'react';
import FriendEntry from './FriendEntry.js';

const FriendList = ({ friends, setSelected }) => {
  // state

  return (
    <div>
      {friends.map((user, index) => (
          <FriendEntry user={user} key={index} setSelected={setSelected}/>
      ))}
    </div>
  )
};

export default FriendList;


