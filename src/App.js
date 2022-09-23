import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPage from './components/RoutesPage';

function App() {
  return (
      <Router>
        <RoutesPage />
      </Router>
  )
}

export default App;
