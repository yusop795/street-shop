/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './map.scss';

const MainMap = ({ location }) => {
  useEffect(() => {
    if (location) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=e9ed32ce32d51d9533deb9715badb9c2&autoload=false';
      document.head.appendChild(script);
      script.onload = () => {
        const { kakao } = window;
        kakao.maps.load(() => {
          const container = document.getElementById('mapBox'); // 지도를 담을 영역의 DOM 레퍼런스
          const options = {
            // 지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(location.y, location.x), // 지도의 중심좌표.
            level: 3, // 지도의 레벨(확대, 축소 정도)
          };

          const map = new kakao.maps.Map(container, options);
        });
      };
    }
  }, [location]);
  return <div id='mapBox' />;
};
export default MainMap;
