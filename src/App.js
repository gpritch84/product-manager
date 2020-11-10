import './App.css';
import React from 'react'
import Main from './views/Main';
import Details from './views/Details';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='product/'/>
        <Details path='product/:id'/>
      </Router>
    </div>
  );
}

export default App;
