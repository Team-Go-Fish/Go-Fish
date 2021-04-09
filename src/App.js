import { useState, useEffect } from 'react';
import './App.scss';
import ButtonPanel from './Components/Button-Panel/ButtonPanel.js';
import axios from 'axios';
import ListsAndSearch from './Components/ListsAndSearch/ListsAndSearch.js';
import GoFish from './Components/GoFish/GoFish.js';
import LoginButton from './Components/Login-Signup/Login-Button';
import LogoutButton from './Components/Login-Signup/Logout-Button';
import Profile from './Components/Login-Signup/Profile';
import { Row, Col, Container, Image } from 'react-bootstrap';
import bg from './images/bg1.png';

const App = () => {
  const [user, setUser] = useState(1);
  const [userID, setUserID] = useState(0);
  const [myMovies, setMyMovies] = useState([]);
  const [friends, setFriends] = useState([]);
  const [popular, setPopular] = useState([]);

  const getUserID = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/user/${user.email}`);
      const userID = response.data;
      setUserID(userID);
      getMyMovies(userID);
      getFriends(userID);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserID();
  }, [user]);

  // get movie list for user once logged in
  const getMyMovies = (user_id) => {
    axios.get(`http://localhost:3005/movies/${user_id}`)
      .then((response => setMyMovies(response.data)))
      .catch((error) => console.log(error));
  };
  // get friends list for user once logged in
  const getFriends = (user_id) => {
    axios.get(`http://localhost:3005/friends/${user_id}`)
      .then((response => setFriends(response.data)))
      .catch((error) => console.log(error));
  };
  const addUserNotification = (userID, friendID, movieID, type, message) => {
    const url = `http://localhost:3005/notifications/add`;
    const body = {
      userID: userID,
      friendID: friendID,
      movieID: movieID,
      notification_type: type,
      notification_message: message
    };
    axios.post(url, body)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const handleUserChange = (user) => {    // pass this event handler down to login component
    setUser(user);
  }

  const rowStyleRight = {
    className: 'justify-content-md-right',
  }
  // const background = {
  //   backgroundImage: linearGradient(red, yellow, green),
  // }

  return (
    <Container
      // style={{ background: `linear-gradient(#88CDDC, #E389A9, #E1B7D5)` }}
    style={{ background:`linear-gradient(#A1DAE6, #F8D8ED, #D18BC2, #58AAB8)`,  width: `calc(100vw)` }}
    >
      <div className="App">
        <Row>
          <Col style={rowStyleRight}>
            <div className="login-container" style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
              <LoginButton />
              <LogoutButton />
              <Profile setUser={setUser} />
            </div>
          </Col>
        </Row>
        <h1>GOFISH</h1>
        <Row>
          <Col>
            <div className="button-panel">
              <ButtonPanel
                myMovies={myMovies}
                friends={friends}
                user={user}
                userID={userID}
                getFriends={getFriends}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <GoFish popular={popular} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="lists-and-search">
              <ListsAndSearch
                myMovies={myMovies}
                user={user}
                getMyMovies={getMyMovies}
                setPopular={setPopular}
                userID={userID}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default App;
