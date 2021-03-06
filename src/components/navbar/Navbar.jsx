import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
          <DarkModeIcon className='icon'/>
          </div>

          <div className="item">
          <NotificationsIcon className='icon'/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <SettingsIcon className='icon'/>
          </div>

          <div className="item">
          <AccountCircleIcon className='avatar'/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar