import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import exampleData from '../../exampleData';

const FriendSearch = ( props ) => {
  // state
  const friendList = props.friends;
  const allUsers = exampleData.users;
  const currentUser = props.user;
  const [searchList, setSearchList] = useState([]);
  const [friendToSearch, setFriendToSearch] = useState('');
  const [friendToAdd, setFriendToAdd] = useState('');

  // methods
  const handleChange = (e) => {
    e.persist();
    const tName = e.target.name;
    const tValue = e.target.value;
    if (friendToSearch === '') {
      setSearchList(allUsers);
    }

    if (tName === 'friendToSearch') {
      setFriendToSearch(tValue);
      handleSearch(friendToSearch);
    } else if (tName === 'friendToAdd') {
      setFriendToAdd(tValue);
    }
  };
  const handleSearch = (query) => {
    const q = query.toLowerCase();
    if (q === '') {
      setSearchList(allUsers);
    } else {
      let result = allUsers.filter(friend =>
        friend.username.toLowerCase().includes(q)
      );
      setSearchList(result);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userID = currentUser.id;
    const url = `http://localhost:3005/friends/add/${userID}`;
    const body = {
      username: friendToAdd
    };
    axios.post(url, body)
      .then((doc) => {
        console.log(doc);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    setSearchList(allUsers);
  }, [friendList]);

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
          <form className="form">
            <label className="form">
              Search User
              <input className="form" type="text" name="friendToSearch" value={friendToSearch} onChange={handleChange}></input>
            </label>
          </form>
          </Col>
          <Col md="auto">
            <select onChange={handleChange} name="friendToAdd">
              {searchList.length ?
                searchList.map(friend => {
                  return (
                    <option selected value={friend.username}> {friend.username} </option>
                  )
                })
                :
                <option>none</option>
              }
            </select>
            <button onClick={handleSubmit}>Add Friend</button>
          </Col>
        </Row>
      </Container>


    </div>
  )
};








export default FriendSearch;
