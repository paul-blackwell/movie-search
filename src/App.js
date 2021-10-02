import React from 'react';
import TestAtom from './components/atoms/test-atom/test-atom';

const App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <TestAtom />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
