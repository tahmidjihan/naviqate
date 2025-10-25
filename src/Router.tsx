import { Route, Routes } from 'react-router';
import App from './App';
import Layout from './Dashboard/Layout';
import Dashboard from './Dashboard/Dashboard';
import Blogs from './Dashboard/Blogs';
import Settings from './Dashboard/Settings';
import Inbox from './Dashboard/Inbox';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Dashboard' element={<Layout />}>
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Dashboard/Inbox' element={<Inbox />} />
        <Route path='/Dashboard/Blogs' element={<Blogs />} />
        <Route path='/Dashboard/Naviq' element={<Dashboard />} />
        <Route path='/Dashboard/Settings' element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default Router;
