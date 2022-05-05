import {useContext} from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import {DarkModeContext} from '../../context/darkModeContext';

const Sidebar = () => {

   const {dispatch} = useContext(DarkModeContext);

   return (
      <div className='sidebar'>
         <div className='top'>
            <Link to="/" className='link'>
               <span className="logo">React Dash</span>
            </Link>
         </div>
         <hr />
         <div className='center'>
            <ul>
               <p className="title">MAIN</p>
               <li>
                  <DashboardIcon className='icon' />
                  <Link to="/" className='link'>
                  <span>DashBoard</span>
                  </Link>

               </li>
               <p className="title">LISTS</p>
               <li>
                  <GroupIcon className='icon' />
                  <Link to="/users" className='link'>
                     <span>Users</span>
                  </Link>

               </li>
               <li>
                  <StoreMallDirectoryIcon className='icon' />
                  <Link to="/products" className='link'>
                     <span>Products</span>
                  </Link>

               </li>
               <li>
                  <CreditCardIcon className='icon' />
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
                  <SettingsIcon className='icon' />
                  <span>Settings</span>

               </li>
               <p className="title">USER</p>
               <li>
                  <AccountCircleIcon className='icon' />
                  <span>Profile</span>
               </li>
               <li>
                  <LogoutIcon className='icon' />
                  <span>Logout</span>

               </li>
            </ul>
         </div>
         <div className='bottom'>
            <div className="colorOption" onClick={()=>dispatch( {type: "LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch( {type: "DARK"})}></div>
         </div>

      </div>
   )
}

export default Sidebar