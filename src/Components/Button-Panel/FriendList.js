import React from 'react';
import FriendEntry from './FriendEntry.js';

/**if a user has friends, this components maps over the input array and passes
 * each individual friend to FriendEntry. If the user has no friends, this component
 * just passes props to FriendEntry */
const FriendList = ({ userID, friends, setSelected }) => {
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


