import React from 'react'
import '../../components/navbar/header.css'
import logo from '../../../src/linkedin.png'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import HeaderOption from '../navbar/HeaderOption'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import SmsIcon from '@mui/icons-material/Sms'
import NotificationsIcon from '@mui/icons-material/Notifications'

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="left">
          <img src={logo} alt="icon" />
          <div className="search">
            <SearchIcon />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div className="right">
          <div className="headerOptionContainer">
            <HeaderOption icon={HomeIcon} title="Home" />
            <HeaderOption icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption icon={WorkIcon} title="Job" />
            <HeaderOption icon={SmsIcon} title="Messaging" />
            <HeaderOption icon={NotificationsIcon} title="Notifications" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header