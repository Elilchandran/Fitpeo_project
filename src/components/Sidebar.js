import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Custom CSS for Sidebar

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <Link
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            to="/home"
            onClick={() => handleLinkClick('home')}
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-home"></i>
            </div>
          </Link>
          <Link
            className={`nav-link ${activeLink === 'chart-line' ? 'active' : ''}`}
            to="/chart-line"
            onClick={() => handleLinkClick('chart-line')}
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-chart-line"></i>
            </div>
          </Link>
          <Link
            className={`nav-link ${activeLink === 'clipboard-list' ? 'active' : ''}`}
            to="/clipboard-list"
            onClick={() => handleLinkClick('clipboard-list')}
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
          </Link>
          <Link
            className={`nav-link ${activeLink === 'wallet' ? 'active' : ''}`}
            to="/wallet"
            onClick={() => handleLinkClick('wallet')}
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-wallet"></i>
            </div>
          </Link>
          <Link
            className={`nav-link ${activeLink === 'shopping-bag' ? 'active' : ''}`}
            to="/shopping-bag"
            onClick={() => handleLinkClick('shopping-bag')}
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-shopping-bag"></i>
            </div>
          </Link>  
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <Link
          className={`nav-link ${activeLink === 'sign-in' ? 'active' : ''}`}
          to="/sign-in"
          onClick={() => handleLinkClick('sign-in')}
        >
          <div className="sb-nav-link-icon">
            <i className="fas fa-sign-in-alt"></i>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
