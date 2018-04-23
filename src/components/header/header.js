import React from 'react';
import { browserHistory, Link } from 'react-router';
import StyleWrapper from './StyleWrapper';

class Header extends React.Component {
  render() {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const homeClass = (pathname === "/about" || pathname === "/contact") ? "" : "active";
    return (
      <StyleWrapper className={`header-wapper`}>
        <div className="session header text-center">
          <div>
            <a href='/Home' >
              <img
                className='logo'
                src= {require('./../../assets/img/placeholder.png')}
                alt='Logo'
              />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li><Link to ="/home" className={homeClass} activeClassName="active" >Home</Link></li>
              <li><Link to ="/about" activeClassName="active" >About</Link></li>
              <li><Link to ="/contact" activeClassName="active">Contact</Link></li>
            </ul>
          </div>
        </div>
      </StyleWrapper>
    );
  }
}

export default Header;
