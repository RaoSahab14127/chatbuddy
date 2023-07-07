import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';




const Header = (props) => {



  // const logout = () => {
  //   dispatch(logout())
  // }

  return(
    <header className="header">
        <div style={{display: 'flex'}}>
          <div className="logo">Web Messenger</div>
            
            {
              true ? 
              <ul className="leftMenu">
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/signup'}>Sign up</NavLink></li>
              </ul> : null
            }
              

            
        </div>
          <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
          </div>
        <ul className="menu">

            {
              true ?
              <li>
                <Link to={'#'} onClick={() => {
                }}>Logout</Link>
            </li> : null
            }
          
            
             
        </ul>
    </header>
   )

 }

export default Header