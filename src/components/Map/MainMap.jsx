/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import './map.scss';

const MainMap = ({ location, fetchGeolocation }) => {
  useEffect(() => {
    console.log(33);
    if (location) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=e9ed32ce32d51d9533deb9715badb9c2&autoload=false';
      document.head.appendChild(script);
      script.onload = () => {
        const { kakao } = window;
        kakao.maps.load(() => {
          const container = document.getElementById('mapBox');
          const options = {
            center: new kakao.maps.LatLng(location.y, location.x), // 지도의 중심좌표.
            level: 3, // 지도의 레벨(확대, 축소 정도)
          };

          const map = new kakao.maps.Map(container, options);
          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            position: options.center,
          });

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);
        });
      };
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
