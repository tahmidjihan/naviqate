import React from 'react';
import { Route, Routes } from 'react-router';
import App from './App';
import Authentication from './Components/Authentication';
import DashboardLayout from './Dashboard/dashboardLayout';
import Dashboard from './Dashboard/Dashboard';

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/SignUp' element={<Authentication signUp />} />
        <Route path='/Login' element={<Authentication />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
