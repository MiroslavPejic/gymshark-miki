import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PackSizesPage from './PackSizesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
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