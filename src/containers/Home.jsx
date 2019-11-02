import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { homeReducer } from '../reducers';


import { HeaderNav, BottomNav } from '../components/Nav';
import { MainMap } from '../components/Map';
import { RankList, FavoriteList } from '../components/List';

const Home = () => {
  return (
    <div className="container">
      <HeaderNav
        left={'<'}
        title=" HOME"
        right={false}
      />
      <MainMap texts="aa" values={1} />
      <BottomNav />
    </div>
  );
};


export default Home;
