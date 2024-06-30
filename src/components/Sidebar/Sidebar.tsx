import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Icons/Logo';
import './Sidebar.scss';
import { useAuth } from '../../context/Auth/AuthContext';

const Sidebar = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate('/signin');
  };
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
      <span className="logout" onClick={handleLogout}>
        LOG OUT
      </span>
      <span className="footer">made with Chuck by Chuck - 2024</span>
    </div>
  );
};

export default Sidebar;
