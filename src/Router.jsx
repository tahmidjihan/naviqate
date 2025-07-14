import React from 'react';
import { Route, Routes } from 'react-router';
import App from './App';
import Authentication from './Components/Authentication';
import DashboardLayout from './Dashboard/dashboardLayout';
import Dashboard from './Dashboard/Dashboard';
import Databases from './Dashboard/Databases';

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/SignUp' element={<Authentication signUp />} />
        <Route path='/Login' element={<Authentication />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/databases' element={<Databases />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
