import React from 'react';
import './styles/main.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/templates/layout/layout';
import Home from './components/pages/home/home';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Provider store={store}>
        <Layout>
          <Home />
        </Layout>
      </Provider>
    </header>
  </div>
);

export default App;
