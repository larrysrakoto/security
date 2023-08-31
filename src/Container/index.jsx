import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from '../Content/Home'
import Service from '../Content/Service'
import './index.scss'

const index = () => {
  return (
    <div className='container'>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
    </div>
  );
};

export default index;