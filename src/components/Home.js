import React from 'react';
import Songs  from './Songs';
import Artists from './Artists';
import { AddPlus } from './AddPlus';
import { Link } from 'react-router-dom';
 
// Home page
const Home = () => {
    return (
        <div className="App">
            <div className='container-fluid'>
                <div className='col-6'><h2>Top 10 Songs</h2></div>
                <div className='col-6'><Link to="/addsong"><button><AddPlus /></button></Link></div>
            </div>
            <Songs />
            <h2>Top 10 Artists</h2>
            <Artists />
    
        </div>
    );
  };
  

export default Home;