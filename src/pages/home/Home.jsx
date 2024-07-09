import React from 'react';
import "./Home.css"
import Subspage from '../subspage/Subspage';

const Home = () => {
  return (
    <div className='home'>
        <h2 className='title'> Manage all of your subs</h2>
        <h2 className='title'>on one website</h2>
        <Subspage />
    </div>
  );
};

export default Home;
