import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className='top'>
           <span className="logo">Salary</span>
        </div>
        <hr />
       <div className='center'>
           <ul>
               <p className="title">MAIN</p>
               <li>
                     <DashboardIcon className='icon' />      
                   <span>DashBoard</span>
                   
                </li>
                <p className="title">LISTS</p>
               <li>
                     <GroupIcon className='icon' />
                   <span>Users</span>
                </li>
                <li>
                        <StoreMallDirectoryIcon className='icon' />
                   <span>Products</span>
                </li>
               <li>
                        <CreditCardIcon className='icon'/>
                   <span>Orders</span>
                </li>
                <p className="title">SERVICE</p>
                
               <li>
                        <QueryStatsIcon className='icon' />
                   <span>Stats</span>
                   </li> 
               <li>
                        <CircleNotificationsIcon className='icon' />
                   <span>Notifications</span>
                   
                </li> 
               <li>
                        <SettingsIcon className='icon'/>
                   <span>Settings</span>
                   
                </li> 
                <p className="title">USER</p>
               <li>
                        <AccountCircleIcon className='icon'/>
                   <span>Profile</span>
                </li> 
               <li>
                        <LogoutIcon className='icon'/>
                   <span>Logout</span>
                   
                </li> 
           </ul>
           </div>
        <div className='bottom'>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>

    </div> 
  )
}

export default Sidebar