import React from 'react';
import './list.scss'

const FavoriteList = (props) => {
    return (
        <div>
            <button onClick={props.getTest}>{props.title}</button>
            <span data-testid='getText'>{props.text}</span>
        </div>
    );
}

export default FavoriteList;