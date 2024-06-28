import { NavLink } from 'react-router-dom';
import Logo from '../Icons/Logo';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo className="logo" />
      <div className="menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          RANDOM JOKE
        </NavLink>
        <NavLink
          to="/my-jokes"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          MY JOKES
        </NavLink>
        <NavLink
          to="/add-joke"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          ADD JOKE
        </NavLink>
      </div>
      <span>LOG OUT</span>
    </div>
  );
};

export default Sidebar;
