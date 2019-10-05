import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

export default function BottomNav() {
  const activeStyle = {
    color: 'white',
  };
  return (
    <div id="bottomNav">
      <div id="home"><NavLink exact to="/" activeStyle={activeStyle}>홈</NavLink></div>
      <div id="rank"><NavLink exact to="/shop" activeStyle={activeStyle}>랭킹</NavLink></div>
      <div id="favorite"><NavLink exact to="/favorite" activeStyle={activeStyle}>좋아</NavLink></div>
      <div id="myPage"><NavLink exact to="/myPage" activeStyle={activeStyle}>마이</NavLink></div>
    </div>
  );
}
