import React from 'react';
import './styles/main.scss';
import Layout from './components/templates/layout/layout';
import Home from './components/pages/home/home';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Layout>
        <Home />
      </Layout>
    </header>
  </div>
);

export default App;
