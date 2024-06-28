import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
