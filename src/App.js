import logo from './logo.svg';
import './App.css';
import data from './data/nafn.json'

function App() {
  return (
    <div className="App">
      {data.map((user) => (
          <Welcome
            name={`${user.Nafn}`}
          />
        ))}
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
  );
}


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default App;
