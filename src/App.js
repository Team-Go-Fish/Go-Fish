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

// scrap button panel, import files here
import Friends from './Components/Button-Panel/Friends.js';
import Notifications from './Components/Button-Panel/Notifications.js';
import About from './Components/Button-Panel/About.js';

const App = () => {
  const [user, setUser] = useState(1);
  const [userID, setUserID] = useState(0);
  const [myMovies, setMyMovies] = useState([]);
  const [friends, setFriends] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [popular, setPopular] = useState([]);

  const getUserID = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/user/${user.email}`);
      const userID = response.data;
      setUserID(userID);
      getMyMovies(userID);
      getFriends(userID);
      getNotifications(userID);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserID();
  }, [user, userID]);

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
  // get notifications list for user once logged in
  const getNotifications = (userID) => {
    axios.get(`http://localhost:3005/notifications/${userID}`)
      .then((response => setNotifications(response.data)))
      .catch((error) => console.error(error));
  };
  const addUserNotification = (userID, friendID, movieID, type, message) => {
    const url = `http://localhost:3005/notifications/add`;
    const body = {
      userID: userID,
      friendID: friendID,
      movieID: movieID,
      notification_type: type,
      notification_message: message,
      notification_status: 'open'
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
        <Container fluid>
          <Row>
            <Col>
              <Profile setUser={setUser} />
            </Col>
            <Col>
              <LoginButton />
              <LogoutButton />
            </Col>
            <Col>
              <Friends userID={userID} user={user} friends={friends} myMovies={myMovies} getFriends={getFriends} addUserNotification={addUserNotification} getNotifications={getNotifications}/>
            </Col>
            <Col>
            <Notifications userID={userID} user={user} notifications={notifications} friends={friends} myMovies={myMovies}></Notifications>
            </Col>
            <Col>
              <About />
            </Col>
          </Row>
        </Container>

        <h1><strong>GO FISH</strong></h1>
        <Row>
          {/* <Col>
            <div className="button-panel">
              <ButtonPanel
                myMovies={myMovies}
                friends={friends}
                user={user}
                userID={userID}
                getFriends={getFriends}
              />
            </div>
          </Col> */}
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
      <br></br>
      <br></br>
    </Container>
  );
};

export default App;
