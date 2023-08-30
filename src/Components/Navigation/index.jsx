import React from 'react';
import './index.scss'

const index = () => {
  return (
    <div>
      <div className="nav-bar">
        <div className="left-nav">
          <div className="theme">
            <div className="logo"></div>
            <div className="title">Hexadecimal</div>
          </div>
            <div className="hider"></div>

        </div>
        <div className="right-nav">
          <div className="nav-item search"></div>
          <div className="nav-item email"></div>
          <div className="nav-item notification"></div>
          <div className="nav-item setting"></div>
          <div className="nav-item menu"></div>
        </div>
      </div>

    </div>
  );
};

export default index;