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
    <embed src="d2.pdf" width="800px" height="2100px" />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aKDRPIQrC8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    </Protect>
  );
}

export default App;
