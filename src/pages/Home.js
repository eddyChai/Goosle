import React from 'react'
import './Home.css';
import {Avatar} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className='home'>
        <div className='home__header'>
            <div className='home__headerRight'>
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <AppsIcon/>
                <Avatar/>
            </div>
        </div>
        <div className='home__body'>
            
        </div>
    </div>
  )
}

export default Home