import React from 'react';
import './BasicSelect.css';

const BasicSelect = () => {
  return (
    <div className="app-bar">
      <div className="header">Welcome to sign Board!</div>
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
};

export default BasicSelect;
