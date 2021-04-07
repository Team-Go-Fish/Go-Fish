import React, { useState } from 'react';
import Friends from './Friends.js';
import users from '../../exampleData.js';

const ButtonPanel = ({myMovies, friends}) => {

  return (
    //Notifications
    <Friends friends={friends} myMovies={myMovies}/>
  );
};

export default ButtonPanel;
