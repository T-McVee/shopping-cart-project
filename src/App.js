import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/style.css';
import { Nav } from './components/Nav';
import { Home } from './Home';
import { Shop } from './Shop';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
