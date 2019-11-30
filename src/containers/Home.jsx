import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../reducers/testReducer';
import { homeActions } from '../reducers/homeReducer';
import { HeaderNav, BottomNav } from '../components/Nav';
import { MainMap } from '../components/Map';

const Home = ({ text, num, address }) => {
  const [location, setLocation] = useState('');
  const getGeolocation = () => {
    const options = { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 };
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLocation({ x: coords.longitude, y: coords.latitude }),
      () => console.log('이 브라우저에서는 Geolocation이 지원되지 않습니다'),
      options,
    );
  };

  // 마운트 될 때 한번
  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <div className='container'>
      <HeaderNav left={'<'} title=' HOME' right={false} />
      <MainMap location={location} />
      <BottomNav />
    </div>
  );
};

const mapStateToProps = ({ homeReducer }) => ({
  location: homeReducer.location,
  address: homeReducer.address,
});

const mapDispatchToProps = dispatch => ({
  fetchMapSaga: location => dispatch(homeActions.fetchMap(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
