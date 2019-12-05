import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../reducers/testReducer';
import { homeActions } from '../reducers/homeReducer';
import { HeaderNav, BottomNav } from '../components/Nav';
import { MainMap } from '../components/Map';

const Home = ({ address }) => {
  const [location, setLocation] = useState('');
  const [navigatorId, setnavigatorId] = useState('');

  const fetchGeolocation = () => {
    const options = { enableHighAccuracy: true, maximumAge: 0, timeout: 27000 };
    const id = navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLocation({ x: coords.longitude, y: coords.latitude }),
      () => console.log('이 브라우저에서는 Geolocation이 지원되지 않습니다'),
      options,
    );
    setnavigatorId(id);
  };

  // 마운트 될 때 한번
  useEffect(() => {
    fetchGeolocation();
    return () => {
      console.log('unMount');
    };
  }, []);

  return (
    <div className='container'>
      <HeaderNav left={'<'} title=' HOME' right={false} />
      <MainMap location={location} fetchGeolocation={fetchGeolocation} />
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
