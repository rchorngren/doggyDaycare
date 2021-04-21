import React, { useState, useEffect } from 'react';

import GetData from '../../Api/GetData';
import Registry from '../Dogs/Registry';
import SelectedDog from '../SelectedDog/SelectedDog';
import './App.css';

function App() {
  const LOADING = 'loading', LOADED = 'loaded', CLICKED = 'clicked';

  const [hasData, setHasData] = useState(LOADING);
  const [dogData, setDogData] = useState(null);

  function logLocalStorage() {
    let localDogs = localStorage.getItem('dogs');
    console.log('localDogs: ', JSON.parse(localDogs));
  }

  function logClickedDog() {
    let clickedDog = JSON.parse(localStorage.getItem('clickedDog'));
    console.log('clickedDog: ', clickedDog);
    setDogData(clickedDog);
    setHasData(CLICKED);
  }

  function navigateBack() {
    setHasData(LOADED);
  }

  function removeLocalStorage() {
    localStorage.removeItem('dogs');
  }

  useEffect(() => {
    GetData(() => { setHasData(LOADED) });
  }, []);

  let content = null;
  switch (hasData) {
    case LOADED:
      content = <Registry logClickedDog={logClickedDog} />
      break;
    case CLICKED:
      content = <SelectedDog dogData={dogData} navBack={navigateBack} />
      break;
    default:
      content = <div>Loading...</div>
  }

  return (
    <div className="App">

      <header className="App-header Dev-tools">
        <button onClick={logLocalStorage}>What's in Local Storage?</button>
        <button onClick={logClickedDog}>Any clicked dog?</button>
        <button onClick={removeLocalStorage}>Delete local storage</button>



      </header>
      <main>
        {content}
      </main>
    </div>
  );
}

export default App;
