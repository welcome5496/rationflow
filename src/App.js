import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="p-4 text-center text-xl font-bold">RationFlow App</div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="p-4">
      <p className="text-lg">Welcome to RationFlow</p>
    </div>
  );
}

export default App;
