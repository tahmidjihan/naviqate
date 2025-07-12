import React from 'react';
import { Route, Routes } from 'react-router';
import App from './App';
import Authentication from './Components/Authentication';

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/SignUp' element={<Authentication signUp />} />
        <Route path='/Login' element={<Authentication />} />
      </Routes>
    </>
  );
}

export default Router;
