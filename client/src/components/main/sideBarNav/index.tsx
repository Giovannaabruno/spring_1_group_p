import React from 'react';
import './index.css';
import { NavLink, useNavigate } from 'react-router-dom';

/**
 * The SideBarNav component has two menu items: "Questions" and "Tags".
 * It highlights the currently selected item based on the active page and
 * triggers corresponding functions when the menu items are clicked.
 */
const SideBarNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('name', '');
    navigate('/');
  };
  return (
    <div id='sideBarNav' className='sideBarNav'>
      <NavLink
        to='/home'
        id='menu_questions'
        className={({ isActive }) => `menu_button ${isActive ? 'menu_selected' : ''}`}>
        Questions
      </NavLink>
      <NavLink
        to='/tags'
        id='menu_tag'
        className={({ isActive }) => `menu_button ${isActive ? 'menu_selected' : ''}`}>
        Tags
      </NavLink>
      <NavLink
        to='/view-settings'
        id='view'
        className={({ isActive }) => `menu_button ${isActive ? 'menu_selected' : ''}`}>
        View Settings
      </NavLink>

      <button onClick={handleLogout} id='logout-btn'>
        Logout
      </button>
    </div>
  );
};

export default SideBarNav;
