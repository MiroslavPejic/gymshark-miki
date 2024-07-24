import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PackSizesPage from './PackSizesPage';
import logo from './assets/gymshark-logo.jpg'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
        <img src={logo} alt="Logo" className="logo" height={100} width={200}/>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculate-pack-sizes">Order here</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculate-pack-sizes" element={<PackSizesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;