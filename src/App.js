import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import RestaurantsSearch from './components/RestaurantsSearch';
import RestaurantsCreate from './components/RestaurantsCreate';
import RestaurantsUpdate from './components/RestaurantsUpdate';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected'
import Portfolio from './components/portfolio';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/Home" element={<Protected><Home /></Protected>} />
          <Route path="/create" element={<Protected><RestaurantsCreate /></Protected>} />
          <Route path="/portfolio" element={<Protected><Portfolio /></Protected>} />
          <Route path="/search" element={<Protected><RestaurantsSearch /></Protected>} />
          <Route path="/update/:id" element={<Protected><RestaurantsUpdate /></Protected>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;