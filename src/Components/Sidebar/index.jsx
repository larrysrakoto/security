import React from 'react';
import './index.scss'

const index = () => {
  return (
    <div className='side-bar'>
      <div className="nav">
        <div className="nav-li">
          <div className="icon home"></div>
          <div className="label">Home</div>
        </div>
        <div className="nav-li">
          <div className="icon service"></div>
          <div className="label">service</div>
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