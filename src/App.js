import './styles/App.css';
import Maze from './components/Maze'
import Up from './components/Up';
import Config from './components/Config';
import Down from './components/Down';
import Start from './Start';

function App() {
  return (
    <div className="App">
      <Start />
      <Config />
      <header className="App-header">
        <Up />
        <Maze />
        <Down />
      </header>
    </div>
  );
}

export default App;
