import { useState } from 'react';
import './App.scss';
import { GithubLink } from './components/GithubLink/GithubLink';
import { Heading } from './components/Heading/Heading';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import BeiAn from './components/BeiAn/BeiAn';

function App() {
  // 每次刷新时清除控制台
  console.clear();

  return (
    <div className="App">
      <div className="password-generator-wrapper">
        <Heading
          title='React.ts 密码生成器'
          description='使用React.ts创建一个密码生成器的简单示例。' 
        />
        <PasswordGenerator />
        <GithubLink />
        <p
          style={{
            textAlign: 'center',
            fontSize: 10,
            opacity: 0.5,
          }}
        >
          <BeiAn />
        </p>
      </div>
    </div>
  )
};

export default App;

