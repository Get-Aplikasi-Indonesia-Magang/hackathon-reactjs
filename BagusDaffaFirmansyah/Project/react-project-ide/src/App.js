import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './containers/Page/Dashboard/dahsboard';
import Login from './containers/Page/Login/login';
import Register from './containers/Page/Register/register';

function App() {
  return (
    <Router>
      <Routes>
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>

          <Route path="/" exact Component={Dashboard} />
          <Route path="/login" exact Component={Login} />
          <Route path="/register" exact Component={Register} />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
