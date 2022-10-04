import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPage from './components/RoutesPage';
import { Context } from './components/Store/Context';
function App() {
  return (
    <Context>
      <Router>
        <RoutesPage />
      </Router>
    </Context>
  )
}

export default App;
