import { useState } from 'react';
import './App.scss';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';

function App() {

  return (
    <div className="App">
      <div className="password-generator-wrapper">
        <PasswordGenerator />
      </div>
    </div>
  )
};

export default App;
