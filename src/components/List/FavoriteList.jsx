import React from 'react';
import './list.scss';

const FavoriteList = ({ getTest, title, text }) => (
  <div>
    <button type="button" onClick={getTest}>{title}</button>
    <span data-testid="getText">{text}</span>
  </div>
);

export default FavoriteList;
