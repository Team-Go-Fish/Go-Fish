import React, { useState } from 'react';
import Friends from './Friends.js';
import users from '../../exampleData.js';

const ButtonPanel = ({myMovies}) => {

  return (
    //Notifications
    <Friends users={users.users} myMovies={myMovies}/>
  );
};

export default ButtonPanel;
