import logo from './logo.svg';
import './App.css';
import Main from './pages/Main/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Parabéns vc conseguiu iniciar o projeto com o React.
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

      <Main />
    </div>
  );
}

export default App;
