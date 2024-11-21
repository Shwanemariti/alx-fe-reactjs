import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li><Link to="/blog/1">Blog Post 1</Link></li>
        <li><Link to="/blog/2">Blog Post 2</Link></li>
        <li><Link to="/blog/3">Blog Post 3</Link></li>
      </ul>
    </div>
  );
};

export default Home;
