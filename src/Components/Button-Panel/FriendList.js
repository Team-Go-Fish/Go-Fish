import React from 'react';
import FriendEntry from './FriendEntry.js';

const FriendList = ({ friends, setSelected }) => {
  let hasFriends;
  if (friends) {
    hasFriends =
      friends.map((user, index) => (
          <FriendEntry user={user} key={index} setSelected={setSelected}/>
      ))
  } else {
    hasFriends = <FriendEntry setSelected={setSelected}/>
  }

  return (
    <div>
      {hasFriends}
    </div>
  )
};

export default FriendList;


