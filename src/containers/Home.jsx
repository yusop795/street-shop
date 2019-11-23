import React, { useState } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../reducers/testReducer';
import { homeActions } from '../reducers/homeReducer';
import { HeaderNav, BottomNav } from '../components/Nav';
import { MainMap } from '../components/Map';

const Home = ({ text, num, updateNumIncrement, updateNumDecrement, updateText, fetchMapSaga }) => {
  const increment = () => {
    if (num < 10) {
      updateNumIncrement();
      fetchMapSaga(111);
    } else console.log('증가 끝');
  };

  const decrement = () => {
    if (num > 0) {
      updateNumDecrement();
    } else console.log('감소 끝');
  };

  const changeText = ({ target }) => {
    updateText(target.value);
    console.log('text변경');
  };

  return (
    <div className='container'>
      <HeaderNav left={'<'} title=' HOME' right={false} />
      <MainMap />
      <div>
        {text}
        {num}
      </div>
      <input defaultValue={text} onChange={changeText} />
      <button type='button' onClick={increment}>
        +
      </button>
      <button type='button' onClick={decrement}>
        -
      </button>
      <BottomNav />
    </div>
  );
};

const mapStateToProps = ({ testReducer }) => ({
  text: testReducer.text,
  num: testReducer.num,
});

const mapDispatchToProps = dispatch => ({
  updateText: text => dispatch(testAction.updateText(text)),
  updateNumIncrement: () => dispatch(testAction.updateNumIncrement()),
  updateNumDecrement: () => dispatch(testAction.updateNumDecrement()),
  fetchMapSaga: location => dispatch(homeActions.fetchMap(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
