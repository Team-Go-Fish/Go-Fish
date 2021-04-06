import { useState, useEffect } from 'react';
import './App.scss';
import ButtonPanel from './Components/Button-Panel/ButtonPanel.js'
import ListsAndSearch from './Components/ListsAndSearch/ListsAndSearch.js';
import LoginButton from './Components/Login-Signup/Login-Button';
import LogoutButton from './Components/Login-Signup/Logout-Button';
import Profile from './Components/Login-Signup/Profile';

const App = () => {
  const [user, setUser] = useState({});

  console.log('user:', user);

  return (
    <div className="App">
      <div className="login-container">
        <h1>GOFISH</h1>
        <LoginButton />
        <LogoutButton />
        <Profile setUser={setUser} />
      </div>
      <div className="button-panel">
        {/* // notification
        //. gofish
        // friends */}
        <ButtonPanel />
      </div>

      <div className="lists-and-search">
        <ListsAndSearch />
      </div>
    </div>
  );
}

export default App;
