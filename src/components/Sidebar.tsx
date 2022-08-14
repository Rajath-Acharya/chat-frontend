import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/home-icon.svg';
import profilePicture from '../assets/profile-placeholder.png';

import styles from '../styles/Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <section>
        <div className={styles.logo}>
          <h1>LOGO</h1>
        </div>
        <div className={styles.links}>
          <NavLink to="/dashboard/" className={styles.navLink}>
            <img src={logo} alt="hilo" />
            Home
          </NavLink>
          <NavLink to="/" className={styles.navLink}>
            <img src={logo} alt="hilo" />
            Home
          </NavLink>
          <NavLink to="/" className={styles.navLink}>
            <img src={logo} alt="hilo" />
            Home
          </NavLink>
          <NavLink to="/" className={styles.navLink}>
            <img src={logo} alt="hilo" />
            Home
          </NavLink>
          <NavLink to="/" className={styles.navLink}>
            <img src={logo} alt="hilo" />
            Home
          </NavLink>
        </div>
      </section>
      <section>
        <NavLink to="/dashboard/profile/" className={styles.profileInfo}>
          <div>
            <img src={profilePicture} alt="profile" />
          </div>
          <div>
            <p>Full Name</p>
            <p>you@email.com</p>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default Sidebar;
