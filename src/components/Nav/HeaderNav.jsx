import React from 'react';
import './nav.scss';

export default function HeaderNav({ left = true, title, right = true }) {
  return (
    <div id="headerNav">
      <div id="headerNavLeft">{left}</div>
      <div id="headerNavTitle">{title}</div>
      <div id="headerNavRight">{right}</div>
    </div>
  );
}
