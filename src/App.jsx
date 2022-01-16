import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import Layout from './components/templates/layout/layout';
import Home from './components/pages/home/home';
import Movie from './components/pages/movie/movie';
import SearchResults from './components/pages/search-results/search-results';
import Favorites from './components/pages/favorites/favorites';
import NoMatch from './components/pages/no-match/no-match';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie" element={<Movie />}>
            <Route path=":movieID" element={<Movie />} />
          </Route>
          <Route path="search-results" element={<SearchResults />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </header>
  </div>
);

export default App;
