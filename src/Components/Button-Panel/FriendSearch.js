import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import SearchField from 'react-search-field';
import exampleData from '../../exampleData';

const FriendSearch = ( {friends, user} ) => {
  // state
  const allUsers = exampleData.users;
  const [searchList, setSearchList] = useState([]);
  const [friendToSearch, setFriendToSearch] = useState('');
  const [friendToAdd, setFriendToAdd] = useState('');
  const [input, setInput] = useState('');

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
  // const handleSearch = (query) => {
  //   const q = query.toLowerCase();
  //   if (q === '') {
  //     setSearchList(allUsers);
  //   } else {
  //     let result = allUsers.filter(friend =>
  //       friend.username.toLowerCase().includes(q)
  //     );
  //     setSearchList(result);
  //   }
  // };
  const handleSearch = () => {
    if (input.length >= 1) {
      axios.get(`http://localhost:3005/search/${input}`)
      .then((response) => setSearchList(response.data))
      .catch((error) => console.log(error));
    } else if(input.length === 0) {
      axios.get('http://localhost:3005/movies')
      .then((response) => setSearchList(response.data))
      .catch((error) => console.log(error))
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userID = user.id;
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
  }, [friends]);
  useEffect(() => {
    handleSearch();
  }, [friendToSearch]);

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
          {/* <form className="form">
            <label className="form">
              Search User
              <input className="form" type="text" name="friendToSearch" value={friendToSearch} onChange={handleChange}></input>
            </label>
          </form> */}
          <SearchField
            className="friend-search"
            placeholder="Search for username"
            value={input}
            onChange={(value) => setFriendToSearch(value)}
            onClick={() => setFriendToSearch()}
            />
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
