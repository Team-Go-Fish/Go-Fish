import React, { useState } from 'react';
import Friends from './Friends.js';
import users from '../../exampleData.js';

const ButtonPanel = ({ props }) => {

  return (
    //Notifications
    //Go Fish
    <Friends users={users.users}/>
  );
};

export default ButtonPanel;
