import React from 'react';
import axios from 'axios';

const GoFishWithFriends = ({ selected }) => {

  const openModal = () => {
    console.log('Open modal');
  }

  return (
    <div className="GoFishWithFriends">
      <button onClick={openModal}>Go Fish With A Friend</button>
    </div>
  )
};

export default GoFishWithFriends;