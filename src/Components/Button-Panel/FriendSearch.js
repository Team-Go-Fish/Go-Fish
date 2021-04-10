import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SearchField from 'react-search-field';

const FriendSearch = ({ friends, user, userID, getFriends, addUserNotification, getNotifications }) => {
  // state
  const [users, setUsers] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [friendToSearch, setFriendToSearch] = useState('');
  const [friendToAdd, setFriendToAdd] = useState('');
  const [friendNameToAdd, setFriendNameToAdd] = useState('');
  const [wasFriendAdded, setWasFriendAdded] = useState(false);

  // methods
  const handleChange = (e) => {
    e.persist();
    const tName = e.target.name;
    const tValue = e.target.value;
    if (friendToSearch === '') {
      setSearchList(users);
    }
    if (tName === 'friendToSearch') {
      setWasFriendAdded(false);
      setFriendToSearch(tValue);
      handleSearch(friendToSearch);
    } else if (tName === 'friendToAdd') {
      setWasFriendAdded(false);
      let friend = users.filter((user) => {
        return user.username === tValue;
      });
      let friendID = friend[0].id;
      setFriendNameToAdd(friend[0].username);
      setFriendToAdd(friendID);
    }
  };
  const handleSearch = () => {
    const q = friendToSearch.toLowerCase();
    if (q.length === 0) {
      let set = new Set(users);
      setSearchList(set);
    } else {
      let result = users.filter(friend =>
        friend.username.toLowerCase().includes(q)
      );
      setSearchList(result);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const url = `https://gofishmovies.com/friends/add/${userID}`;
=======
    let alreadyFriend = friends.filter((friend) => {
      return friend.username === friendNameToAdd;
    });
    if (alreadyFriend.length > 0) {
      return;
    };
>>>>>>> 5cc8c814014e8f80049ce61300c96fe65b58d088
    const body = {
      friendID: friendToAdd
    };
    axios.post(`http://localhost:3005/friends/add/${userID}`, body)
      .then((doc) => {
        console.log(doc);
        getFriends(userID);
        setWasFriendAdded(true);
      })
      .catch((err) => {
        console.error(err);
      });
    addUserNotification(
      friendToAdd,
      userID,
      'NULL',
      'newFriend',
      `${user.name} wants to be friends!`,
    );
    getNotifications(userID);
  };

  useEffect(() => {
    const initialLoad = async () => {
      try {
        const url = `https://gofishmovies.com/users`;
        const response = await axios.get(url);
        await setUsers(response.data);
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
          <SearchField
            className="friend-search"
            placeholder="Search for username"
            value={friendToSearch}
            onChange={(value) => setFriendToSearch(value)}
            onClick={() => setFriendToSearch()}
            />
          </Col>
          <Col md="auto" className="flex-column">

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

          {wasFriendAdded ?
            <p className="friend-added">{friendNameToAdd} was added successfully!</p>
          :
            null
          }

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
