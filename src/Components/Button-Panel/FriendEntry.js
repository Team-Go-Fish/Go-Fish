import React from 'react';
import Form from 'react-bootstrap/Form';

/**If the user has friends, this component renders each friends first and
 * last name along with a selection checkbox. If the user has no friends,
 * displays add friends message */
const FriendEntry = ({ user, setSelected})=> {
  //when checkbox is selected, updates 'selected' in the Friends component
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
    displayUser = <h3>Try adding some friends!</h3>
  }

    return (
      <div>
        {displayUser}
      </div>
    )
};

export default FriendEntry;