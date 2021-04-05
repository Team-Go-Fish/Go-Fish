import { useState, useEffect } from 'react';
import './App.css';
import ButtonPanel from './Components/Button-Panel/ButtonPanel.js'

import ListsAndSearch from './Components/ListsAndSearch/ListsAndSearch.js';

const App = () => {
  return (
    <div className="App">
      <h1>GOFISH</h1>
      <div className="login-container">
      {/* // do login / signup shit */}
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
