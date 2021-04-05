import react, { useState } from 'react';
import axios from 'axios';

const FriendSearch = ( props ) => {
  // state
  const friendList = props.friendList;
  const [searchList, setSearchList] = useState(friendList);
  const [friendToSearch, setFriendToSearch] = useState('');

  // methods
  const handleChange = (e) => {
    e.preventDefault();
    const tName = e.target.name;
    const tValue = e.target.value;
    if (tName === 'friendToSearch') {
      setFriendToSearch(tValue);
      handleSearch(friendToSearch);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/rsvps'
    axios.post(url, formBody)
      .then((doc) => {
        console.log(doc);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleSearch = (query) => {
    query.toLowerCase();
    let result = searchList.filter(friend =>
      friend.username.toLowerCase().includes(query)
    );
    setSearchList(result);
  }

  return (
    <div>
      <form className="form">
        <label className="form">
          Search User
          <input className="form" type="text" name="friendToSearch" value={friendToSearch} onChange={handleChange}></input>
        </label>

        <button onClick={handleSubmit}>Add Friend</button>

        {isFormSubmitted
        ?
          <InsertConfirmation rsvp={formBody} />
        :
          null
        }
      </form>

    </div>
  )
};

export default FriendSearch;
