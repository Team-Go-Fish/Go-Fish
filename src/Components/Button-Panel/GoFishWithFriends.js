import React from 'react';

const GoFishWithFriends = (props) => {

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