import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import './styles/utils/global.scss';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Login = React.lazy(() => import('./components/Login'));
const Signup = React.lazy(() => import('./components/Signup'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="dashboard/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
      </Route>
      <Route
        path="login"
        element={
          <React.Suspense fallback={<>...</>}>
            <Login />
          </React.Suspense>
        }
      />
      <Route
        path="signup"
        element={
          <React.Suspense fallback={<>...</>}>
            <Signup />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
