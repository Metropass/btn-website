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
    <iframe src="https://seneca-my.sharepoint.com/personal/mahmed171_myseneca_ca/_layouts/15/embed.aspx?UniqueId=8aaf3b86-2ec4-4366-8599-f5ed8640502f&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="btn-final-work.mp4"></iframe>
    </div>
    </div>
    </Protect>
  );
}

export default App;
