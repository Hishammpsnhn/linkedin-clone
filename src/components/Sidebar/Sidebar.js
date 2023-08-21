import React from 'react';
import { Avatar } from '@mui/material';
import './Sidebar.css';

function Sidebar() {

  const recentItem = (topic) =>(
    <div className="sidebar__recentitems">
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54043.jpg" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Muhammed Ashfaque.M</h2>
        <h4>ashfaque678583@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className='sidebar__statNo'>connect with alumini</p>
        </div>
        <div className="sidebar__stat">
          <p>Access exclusive tools & insights</p>
          <p className="sidebar__statNo">Try sale navigator</p>
        </div>
      </div>

      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('Angular,React,Vuejs,Nodejs...')}
          {recentItem('software engineer')}
          {recentItem('developer')}
          {recentItem('reactjs')}
          {recentItem('reactjs')}

          <p>Groups</p>
          {recentItem('Angular,React,Vuejs,Nodejs...')}
          {recentItem('software engineer')}
          
          <p>Events</p>
          <p>Followed Hashtags</p>


      </div>



    </div>
  );
}

export default Sidebar;
