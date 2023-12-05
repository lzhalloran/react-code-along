import logo from './logo.svg';
import './App.css';
import { useContext } from "react";
import { ApiContext } from "./contexts/ApiProvider.jsx";

function App() {
  let apiUrl = useContext(ApiContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>In context: {apiUrl}</p>
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
  );
}

export default App;
