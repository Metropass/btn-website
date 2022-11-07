import logo from './logo.svg';
import './App.css';
import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

function App() {
  return (
    <Protect
    sha512 = 'a1b895e0fd4a8be005982e5901bb7cf880b173571bd8792365cac3177fc9c1e7d67cfb26492b66dd9e4697b35cba45e20ff92616cc14c6895508cada5802d332'
    blur={false}
    >
      <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
    </Protect>
  );
}

export default App;
