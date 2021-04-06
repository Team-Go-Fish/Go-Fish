import React, { useState } from 'react';
import FriendList from './FriendList.js';
import FriendSearch from './FriendSearch.js';
import GoFishWithFriends from './GoFishWithFriends.js'

const Friends = ( {users} ) => {
  // state
  const [selected, setSelected] = useState('');

  // methods

  return (
    <div>
      <FriendList users={users} setSelected={setSelected}/>
      <FriendSearch />
      <GoFishWithFriends selected={selected}/>
    </div>
  )
};

export default Friends;