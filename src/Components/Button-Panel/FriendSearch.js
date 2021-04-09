import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import SearchField from 'react-search-field';

const FriendSearch = ( {friends, user, userID} ) => {
  // state
  const [users, setUsers] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [friendToSearch, setFriendToSearch] = useState('');
  const [friendToAdd, setFriendToAdd] = useState('');

  // methods
  const handleChange = (e) => {
    e.persist();
    const tName = e.target.name;
    const tValue = e.target.value;
    if (friendToSearch === '') {
      setSearchList(users);
    }
    if (tName === 'friendToSearch') {
      setFriendToSearch(tValue);
      handleSearch(friendToSearch);
    } else if (tName === 'friendToAdd') {
      let friend = users.filter((user) => {
        return user.username === tValue;
      });
      let friendID = friend[0].id;
      setFriendToAdd(friendID);
    }
  };
  const handleSearch = () => {
    const q = friendToSearch.toLowerCase();
    if (q.length === 0) {
      setSearchList(users);
    } else {
      let result = users.filter(friend =>
        friend.username.toLowerCase().includes(q)
      );
      setSearchList(result);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://3.136.112.63/friends/add/${userID}`;
    const body = {
      friendID: friendToAdd
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
    const initialLoad = async () => {
      try {
        const url = `https://3.136.112.63/users`;
        const response = await axios.get(url);
        await setUsers(response.data);
        // const getID = (obj) => obj.id;
        // const filterBySet = set => obj => !set.has(getID(obj));
        // const idSet = new Set([...users.map(getID), ...friends.map(getID)]);
        // const unique = [...users.filter(filterBySet(idSet)), ...friends.filter(filterBySet(idSet))];
        // console.log({unique})
        setSearchList(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    initialLoad();
  }, []);
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
            value={friendToSearch}
            onChange={(value) => setFriendToSearch(value)}
            onClick={() => setFriendToSearch()}
            />
          </Col>
          <Col md="auto">

            <select onChange={handleChange} name="friendToAdd">
              {searchList.length ?
                searchList.map(friend => {
                  return (
                    <option selected value={friend.username}> {friend.firstname} {friend.lastname} </option>
                  )
                })
                :
                <option>none</option>
              }
            </select>

            {/* <DropdownButton
              alignRight
              id="friendToAdd"
              title="Add Friend"
              onSelect={setFriendToAdd}
              >
              {searchList.length ?
                searchList.map(friend => {
                  return (
                    <Dropdown.Item eventKey={friend.username}> {friend.username} </Dropdown.Item>
                  )
                })
                :
                <Dropdown.Item>none</Dropdown.Item>
              }
            </DropdownButton> */}



          </Col>
          <Col md="auto">
            <Button onClick={handleSubmit}>Add Friend</Button>
          </Col>
        </Row>
      </Container>


    </div>
  )
};








export default FriendSearch;
