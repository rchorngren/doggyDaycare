import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import GetData from '../../Api/GetData';
import Welcome from '../Welcome/Welcome';
import Registry from '../Registry/Registry';
import SelectedDog from '../SelectedDog/SelectedDog';
import './App.css';

function App() {
  const [dogData, setDogData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const apiAddress = 'https://api.jsonbin.io/b/607ef0d824143e5df08a0676';

  function logsessionStorage() {
    let localDogs = sessionStorage.getItem('dogs') || ""; //TODO - default list of dogs
    console.log('localDogs: ', JSON.parse(localDogs));
  }

  function saveSelected() {
    let sessionStorageClickedDog = sessionStorage.getItem('clickedDog') || ""; //TODO - default clicked dog
    let clickedDog = JSON.parse(sessionStorageClickedDog);
    setDogData(clickedDog);
  }

  function removesessionStorage() {
    sessionStorage.removeItem('dogs');
    sessionStorage.removeItem('clickedDog');
  }

  useEffect(() => {
    GetData( apiAddress, () => setLoaded(true));
  }, []);

  return (
    <div className="App">

      <header className="App-header">
        <h1>Doggy Daycare</h1>
        <div className="Dev-tools">
          <button onClick={logsessionStorage}>What's in Local Storage?</button>
          <button onClick={saveSelected}>Any clicked dog?</button>
          <button onClick={removesessionStorage}>Delete local storage</button>
        </div>


      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/listofdogs">
              <Registry saveSelected={saveSelected} dataLoaded={loaded} />
            </Route>
            <Route path="/individualdog">
              <SelectedDog dogData={dogData} />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
