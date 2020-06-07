import 'bulma/css/bulma.min.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header'

import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div className="container is-fluid">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
