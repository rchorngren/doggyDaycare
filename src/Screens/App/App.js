import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import GetData from '../../Api/GetData';
import Registry from '../Registry/Registry';
import SelectedDog from '../SelectedDog/SelectedDog';
import './App.css';

function App() {
  const [dogData, setDogData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  

  function logLocalStorage() {
    let localDogs = localStorage.getItem('dogs');
    console.log('localDogs: ', JSON.parse(localDogs));
  }

  function logClickedDog() {
    let clickedDog = JSON.parse(localStorage.getItem('clickedDog'));
    console.log('clickedDog: ', clickedDog);
    setDogData(clickedDog);
  }

  function removeLocalStorage() {
    localStorage.removeItem('dogs');
    localStorage.removeItem('clickedDog');
  }

  useEffect(() => {
    GetData(() => setLoaded(true));
  }, []);

  return (
    <div className="App">

      <header className="App-header Dev-tools">
        <button onClick={logLocalStorage}>What's in Local Storage?</button>
        <button onClick={logClickedDog}>Any clicked dog?</button>
        <button onClick={removeLocalStorage}>Delete local storage</button>
        
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <Link to="listofdogs">List of dogs</Link>
              </div>
            </Route>
            <Route exact path="/listofdogs">
              <Registry logClickedDog={logClickedDog} dataLoaded={loaded} />
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
