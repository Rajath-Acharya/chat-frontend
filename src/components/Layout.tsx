import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

import styles from '../styles/Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Sidebar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
