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
            key={user.firstname}
            onChange = {handleChange}
            label={<span>{user.firstname} {user.lastname}</span>}
          />
        </div>
      </Form>
    )
};

export default FriendEntry;