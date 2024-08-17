import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the homepage content.</p>
            <p>
                Check out our <Link to="/blog">Blog</Link> for the latest articles!
            </p>
        </div>
    );
};

export default Home;