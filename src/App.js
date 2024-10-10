import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
  const menu = [
    {
      name: "Buzza",
      ingredients: ["dough", "meat", "onions"]
    },
    {
      name: "Pies",
      ingredients: ["dough", "meat", "onions", "potato"]
    },
    {
      name: "Pizza",
      ingredients: ["dough", "pepperoni", "tomatoes", "cheese"]
    },
    {
      name: "Salad",
      ingredients: ["tomatoes", "cucumbers"]
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />

        {menu.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <ul>
              {item.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}

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

export default App;
