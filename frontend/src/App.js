import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Game from './component/Game';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Game />
      </header>
    </div>
  );
}

export default App;
