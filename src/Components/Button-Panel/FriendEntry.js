import React from 'react';
import Form from 'react-bootstrap/Form';

const FriendEntry = ({ user, setSelected})=> {

  const handleChange = (event) => {
    setSelected(user.friendid);
  };
  let displayUser;
  if (user) {
    displayUser =
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
  } else {
    displayUser = <h2>No friends</h2>
  }

    return (
      <div>
        {displayUser}
      </div>
    )
};

export default FriendEntry;