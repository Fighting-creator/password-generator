import { useState, useEffect } from 'react';
import './App.scss';
import { GithubLink } from './components/GithubLink/GithubLink';
import { Heading } from './components/Heading/Heading';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import BeiAn from './components/BeiAn/BeiAn';
import { SocialPanel } from './components/SocialPanel/SocialPanel';

function App() {
  useEffect(() => {
    // 每次刷新时清除控制台
    console.clear();

    // 追加meta标签
    const jsNode = document.createElement('meta');
    jsNode.name = 'referrer';
    jsNode.content = 'unsafe-url';
    document.head.appendChild(jsNode);

    // 百度统计
    var _hmt: any = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b62249b3a75c125feca52a97f0a16918";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode!.insertBefore(hm, s);
    })();
  }, []);

  return (
    <div className="App">
      <div className="password-generator-wrapper">
        <PasswordGenerator />
        <GithubLink />
        <SocialPanel />
      </div>
    </div>
  )
};

export default App;

