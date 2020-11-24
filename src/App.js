import List from "../src/components/List";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>The best books of all time</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listBooks">A list of books</Link>
          </li>
          <li>
            <Link to="/addBook">Addng a book to the list</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/">
            <List />
          </Route>
        </Switch >
      </div>
    </Router>
  );
};

export default App;
