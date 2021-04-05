import './App.css';
import ButtonPanel from './Components/Button-Panel/Button-Panel';


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

      <div className="search-bar">
      </div>

     <div className="lists">
        <div className="movie-list">
        </div>

        <div className="watch-list">
     </div>

    </div>
  </div>
  );
}

export default App;
