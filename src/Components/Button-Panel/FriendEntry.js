import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const FriendEntry = ({ user, setSelected})=> {

  const handleChange = (event) => {
    setSelected(user.id);
  };

    return (
      <Form>
        <div key={'default-checkbox'} className="mb-3">
          <Form.Check
            type='checkbox'
            key={user.firstName}
            onChange = {handleChange}
            label={<span>{user.firstName} {user.lastName}</span>}
          />
        </div>
      </Form>
    )
};

export default FriendEntry;