import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Profile = React.lazy(() => import('./Profile'));
const Home = React.lazy(() => import('./Home'));

const Dashboard = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<>...</>}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="profile"
        element={
          <React.Suspense fallback={<>...</>}>
            <Profile />
          </React.Suspense>
        }
      />
    </Routes>
  );
};
export default Dashboard;
