import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to EWaste Management</h1>
      <div className="btn-container">
        <Link to="/create-passport" className="btn-link">
          <button className="home-btn">Create EWaste Passport</button>
        </Link>
        <Link to="/perform-transactions" className="btn-link">
          <button className="home-btn">Perform Transactions</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
