import React, { useState, useEffect } from 'react';

import GetData from '../../Api/GetData';
import Registry from '../Dogs/Registry';
import './App.css';

function App() {
  const LOADING = 'loading', LOADED = 'loaded';

  const [hasData, setHasData] = useState(LOADING);

  function logLocalStorage() {
    let localDogs = localStorage.getItem('dogs');
    console.log('localDogs: ', JSON.parse(localDogs));
  }

  function removeLocalStorage() {
    localStorage.removeItem('dogs');
  }

  useEffect(() => {
    GetData(() => {setHasData(LOADED)});
  }, []);

  let content = null;
  switch(hasData) {
    case LOADED:
      content = <Registry />
      break;
    default:
      content = <div>Loading...</div>
  }

  return (
    <div className="App">
            
      <header className="App-header">     
        <button onClick={logLocalStorage}>What's in Local Storage?</button>
        <button onClick={removeLocalStorage}>Delete local storage</button>
        
        {content}
        
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
