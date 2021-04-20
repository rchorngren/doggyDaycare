// import Get from '../../Api/Get';
import Doggotest from '../Dogs/Doggotest';
import './App.css';

function App() {

  return (
    <div className="App">
      <Doggotest />
      <header className="App-header">
        <button onClick={localStorage.removeItem('dogs')}>Delete local storage</button>
      </header>
    </div>
  );
}

export default App;
