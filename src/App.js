import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import TodoList from "./Components/TodoList"
import RandomQuote from "./Components/RandomQuote"
import Calculator from "./Components/Calculator"


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/todolist">
          <TodoList />
        </Route>
        <Route exact path="/randomquotemachine">
          <RandomQuote />
        </Route>
        <Route exact path="/calculator">
          <Calculator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
