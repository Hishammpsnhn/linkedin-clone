import React from 'react';
import { Avatar } from '@mui/material';
import './Sidebar.css';


function Sidebar() {

  const recentItem = (topic) => (
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
        <div className='sidebar__bottom'>
          <a href='/'>Muhammed Ashfaque.M</a>
          <span>Student at University of calicut</span>
        </div>
        <div style={{ borderTop: "2px solid #C1D1D0 ", marginTop: '10px', marginBottom: '10px' }}></div>
        <div className='sidebar_top_text'>
          <span>Connections</span><br />
          <span className='sidebar__statNo' style={{textDecoration:'none'}}>connect with alumini</span>
        </div>
        <div style={{ borderTop: "2px solid #C1D1D0 ", marginTop: '10px', marginBottom: '10px' }}></div>
        <div className='sidebar_top_text' style={{marginBottom:'10px'}}>
          <span>Access exclusive tools & insights</span><br></br>
          <span className="sidebar__statNo">Try sale navigator</span>
        </div>
      </div>

      {/* <div className="sidebar__bottom">
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


      </div> */}



    </div>
  );
}

export default Sidebar;
