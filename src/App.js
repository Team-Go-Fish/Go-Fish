import { useState, useEffect } from 'react';
import './App.scss';
import ButtonPanel from './Components/Button-Panel/ButtonPanel.js';
import axios from 'axios';
import ListsAndSearch from './Components/ListsAndSearch/ListsAndSearch.js';
import GoFish from './Components/GoFish/GoFish.js';
import LoginButton from './Components/Login-Signup/Login-Button';
import LogoutButton from './Components/Login-Signup/Logout-Button';
import Profile from './Components/Login-Signup/Profile';
import { Row, Col, Container } from 'react-bootstrap';

const App = () => {
  // state initialization
  const [user, setUser] = useState();
  const [myMovies, setMyMovies] = useState([]);
  const [friends, setFriends] = useState([]);
  const [popular, setPopular] = useState([]);

  // on user state change, run axios requests below
  useEffect(() => {
    getMyMovies(user);
    getFriends(user);
  },[user]);

  // get movie list for user once logged in
  const getMyMovies = (user_id) => {
    axios.get(`http://localhost:3005/movies/${2}`)            //hardcoded for user 1
      .then((response => setMyMovies(response.data)))
      .catch((error) => console.log(error));
  };
  // get friends list for user once logged in
  const getFriends = (user_id) => {
    axios.get(`http://localhost:3005/friends/${2}`)               //hard coded for user 1
      .then((response => setFriends(response.data)))
      .catch((error) => console.log(error));
  };

  const handleUserChange = (user) => {    // pass this event handler down to login component
    setUser(user);
  }

  const rowStyleRight = {
    className: 'justify-content-md-right',
  }

  return (
    <Container>
      <div className="App">
        <Row>
          <Col style={rowStyleRight}>
            <div className="login-container">
              <h1>GOFISH</h1>
              <LoginButton />
              <LogoutButton />
              <Profile setUser={setUser} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="button-panel">
              <ButtonPanel
                myMovies={myMovies}
                friends={friends}
                user={user}
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
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>



  );
}

export default App;
