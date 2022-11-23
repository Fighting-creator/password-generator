import { useState } from 'react';
import './App.scss';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';

function App() {
  // 每次刷新时清除控制台
  console.clear();

  return (
    <div className="App">
      <div className="password-generator-wrapper">
        <PasswordGenerator />
      </div>
    </div>
  )
};

export default App;

