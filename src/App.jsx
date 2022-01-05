import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import Layout from './components/templates/layout/layout';
import Home from './components/pages/home/home';
import Movie from './components/pages/movie/movie';
import NoMatch from './components/pages/no-match/no-match';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </header>
  </div>
);

export default App;
