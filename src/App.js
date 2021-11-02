import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import { useParams } from 'react-router';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Box from './components/Box';

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        &nbsp;|&nbsp;
        <Link to="/location/Chicago">Chicago</Link>
        &nbsp;|&nbsp;
        <Link to="/location/burbank">Burbank</Link>
        &nbsp;|&nbsp;
        <Link to="/">Home</Link>
      </p>
      <Switch>
        <Route path="/:num/:txtc/:bgc">
          <Box />
        </Route>
        <Route path="/:num">
          <Number />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
