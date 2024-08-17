import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header({ toggleTheme, isDarkTheme }) {
  return (
    <header>
      <h1>Football Fanatics Blog</h1>
      <nav>
        <ul>
          <li><Link to="/scores">Scores</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/leagues">Leagues</Link></li>
          <li><Link to="/transfers">Transfers</Link></li>
          <li><Link to="/players">Players</Link></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
        <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
      </button>
    </header>
  );
}

export default Header;