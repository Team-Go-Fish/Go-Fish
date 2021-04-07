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
  const [user, setUser] = useState(1);
  const [myMovies, setMyMovies] = useState([]);
  const [friends, setFriends] = useState([]);
  const [popular, setPopular] = useState([]);

  // on user state change, run axios requests below
  useEffect(() => {
    getMyMovies(user);
    getFriends(user);
  }, [user]);
  // get movie list for user once logged in
  const getMyMovies = (user_id) => {
    axios.get(`http://localhost:3005/movies/${user_id}`)
      .then((response => setMyMovies(response.data)))
      .catch((error) => console.log(error));
  };
  // get friends list for user once logged in
  const getFriends = (user_id) => {
    axios.get(`/friends/${user_id}`)
      .then((response => setFriends(response.data)))
      .catch((error) => console.log(error));
  };

  // pass this event handler down to login component
  const handleUserChange = (user) => {
    setUser(user);
  }

  const rowStyleRight = {
    className: 'justify-content-md-right',
  }

  return (
    <Container>
      <div className="App">
      <h4>Go Fish</h4>
        {/* <Row>
          <Col style={rowStyleRight}>
            <div className="login-container">
              <h1>GOFISH</h1>
              <LoginButton />
              <LogoutButton />
              <Profile setUser={setUser} />
            </div>
          </Col>
        </Row> */}
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
