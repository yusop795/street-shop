/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { KAKAO_KEY } from '../../config';
import './map.scss';

const moveMap = (kakao, map, marker) => {
  kakao.maps.event.addListener(map, 'click', mouseEvent => {
    // 클릭한 위도, 경도 정보를 가져옵니다
    const latlng = mouseEvent.latLng;
    marker.setPosition(latlng); // 마커 이동
    map.panTo(latlng); // 지도 중심 이동
  });
};

const renderMap = ({ containerId = 'mapBox', location }) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`;
  document.head.appendChild(script);
  script.onload = () => {
    const { kakao } = window;
    kakao.maps.load(() => {
      const container = document.getElementById(containerId);
      const options = {
        center: new kakao.maps.LatLng(location.y, location.x), // 지도의 중심좌표.
        level: 3, // 지도의 레벨(확대, 축소 정도)
      };

      const map = new kakao.maps.Map(container, options);
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: options.center,
      });

      moveMap(kakao, map, marker);

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    });
  };
};

const MainMap = ({ location, fetchGeolocation }) => {
  useEffect(() => {
    if (location) {
      renderMap({ location });
    }
  }, [location]);

  return (
    <div id='mapBox'>
      <div id='btns' onClick={fetchGeolocation}>
        현재위치
      </div>
    </div>
  );
};
export default MainMap;
