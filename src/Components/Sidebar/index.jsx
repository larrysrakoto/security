import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className='side-bar'>
      <div className="nav">
        <div className="nav-li">
          <div className="icon home"></div>
          <Link to="/Home">
            <div className="label">Home</div>
          </Link>

        </div>
        <div className="nav-li">
          <div className="icon service"></div>
          <Link to="/Service">
            <div className="label">Service</div>
          </Link>
        </div>
        <div className="nav-li">
          <div className="icon about"></div>
          <div className="label">about</div>
        </div>
      </div>

    </div>
  );
};

export default index;