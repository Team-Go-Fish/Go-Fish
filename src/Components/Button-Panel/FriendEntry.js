import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const FriendEntry = ({ user })=> {
  const [selected, setSelected] = useState('');

  const handleChange = (key, event) => {
    setSelected(user.username);
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