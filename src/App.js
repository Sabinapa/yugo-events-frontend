// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Zdruzeno from './components/Zdruzeno';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Zdruzeno />} />
      </Routes>
    </Router>
  );
}

export default App;
