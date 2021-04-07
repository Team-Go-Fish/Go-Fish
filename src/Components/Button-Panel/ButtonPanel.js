import React, { useState } from 'react';
import Friends from './Friends.js';
import users from '../../exampleData.js';
import FriendSearch from './FriendSearch.js';

const ButtonPanel = ({myMovies}) => {

  return (
    <div>
      {/* Notifications */}
      <FriendSearch />
      <Friends users={users.users} myMovies={myMovies}/>
    </div>
  );
};

export default ButtonPanel;
