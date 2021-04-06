import { useState, useEffect } from 'react';
import './App.scss';
import ButtonPanel from './Components/Button-Panel/ButtonPanel.js';
import axios from 'axios';

import ListsAndSearch from './Components/ListsAndSearch/ListsAndSearch.js';

const App = () => {
  // state initialization
  const [user, setUser] = useState(null);
  const [myMovies, setMyMovies] = useState([]);
  const [friends, setFriends] = useState([]);

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
    axios.get(`http://localhost:3005/friends/${user_id}`)
      .then((response => setFriends(response.data)))
      .catch((error) => console.log(error));
  };

  // pass this event handler down to login component
  const handleUserChange = (user) => {
    setUser(user);
  }

  return (
    <div className="App">
      <h1>GOFISH</h1>
      <div className="login-container">
      {/* // do login / signup shit */}
      onChange={(user) => handleUserChange(user)}
      </div>

      <div className="button-panel">
        {/* // notification
        //. gofish
        // friends */}
        <ButtonPanel />
      </div>

     <div className="lists-and-search">
       <ListsAndSearch
        myMovies={myMovies}
        user={user}
       />
     </div>
  </div>
  );
}

export default App;
