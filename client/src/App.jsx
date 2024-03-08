import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './containers/HomePage'; // Corrected import path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Corrected component name */}
      </Routes>
    </Router>
  );
}
export default App;
