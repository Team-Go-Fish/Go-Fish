import React, { useState } from 'react';
import Friends from './Friends.js';
import users from '../../exampleData.js';

const ButtonPanel = ({user, myMovies, friends}) => {

  return (
    //Notifications
    <Friends user={user} friends={friends} myMovies={myMovies}/>
  );
};

export default ButtonPanel;
