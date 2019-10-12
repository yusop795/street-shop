import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import './nav.scss';

export default function BottomNav() {
  const activeStyle = {
    opacity: 1,
  };

  return (
    <div id="bottomNav">
      <div id="home">
        <NavLink exact to="/" activeStyle={activeStyle}>
          <Icon type="home" />
        </NavLink>
      </div>
      <div id="rank">
        <NavLink exact to="/shop" activeStyle={activeStyle}>
          <Icon type="rise" />
        </NavLink>
      </div>
      <div id="favorite">
        <NavLink exact to="/favorite" activeStyle={activeStyle}>
          <Icon type="heart" />
        </NavLink>
      </div>
      <div id="myPage">
        <NavLink exact to="/myPage" activeStyle={activeStyle}>
          <Icon type="user" />
        </NavLink>
      </div>
    </div>
  );
}
