import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Scores from './components/Scores';
import News from './components/News';
import Leagues from './components/Leagues';
import Transfers from './components/Transfers';
import Players from './components/Players';
import Home from './components/Home';
import BlogList from './components/BlogList';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Router>
      <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/news" element={<News />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/players" element={<Players />} />
            <Route path="/blog" element={<BlogList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;