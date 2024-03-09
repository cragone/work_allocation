import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './containers/HomePage';
import UnassignedPage from './containers/UnassignedPage';
import GraphPage from './containers/GraphPage';
import InvestigationsPage from './containers/InvestigationsPage';
import Navbar from './components/DaisyuiNavBar';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Unassigned" element={<UnassignedPage />} />
          <Route path="/Graphing" element={<GraphPage/>} />
          <Route path="/Investigations" element={<InvestigationsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;