import React, { useState } from 'react';
import axios from 'axios';

const FriendList = ( props ) => {
  // state
  const user = props.user;

  // methods

  return (
    <div>

    {/* Map over friends */}
    <FriendEntry />

    </div>
  )
};

export default FriendList;