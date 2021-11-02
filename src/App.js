import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import { useParams } from 'react-router';
import Results from './components/Results';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Switch>
        <Route path="/:param/:num">
          <Results />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
