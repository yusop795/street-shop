/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from 'antd';
import scriptHelper from '../../utill/scriptHelper';
import { KAKAO_KEY } from '../../config';
import './map.scss';

import iconsHunt from '../../assets/imgs/iconsHunt.png';

const kakaoMapScript = scriptHelper(`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`);

const MainMap = ({ location, fetchGeolocation }) => {
  const [isSpin, setisSpin] = useState(true);

  const moveMap = (kakaoMap, map, marker) => {
    kakaoMap.event.addListener(map, 'click', mouseEvent => {
      // 클릭한 위도, 경도 정보를 가져옵니다
      const latlng = mouseEvent.latLng;
      marker.setPosition(latlng); // 마커 이동
      map.panTo(latlng); // 지도 중심 이동
    });
  };

  const renderMap = containerId => {
    const container = document.getElementById(containerId);
    kakaoMapScript
      .then(() => {
        const kakaoMap = window.kakao.maps;
        kakaoMap.load(() => {
          // 지도 옵션
          const options = {
            center: new kakaoMap.LatLng(location.y, location.x), // 지도의 중심좌표.
            level: 3, // 지도의 레벨(확대, 축소 정도)
          };

          // 지도 생성
          const map = new kakaoMap.Map(container, options);
          // 마커 생성
          const marker = new kakaoMap.Marker({
            position: options.center,
          });
          // 마커 표시
          marker.setMap(map);

          // 마커 이벤트
          moveMap(kakaoMap, map, marker);
          setisSpin(false);
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (location) {
      renderMap('mapBox');
    }
  }, [location]);

  return (
    <div id='mapBox'>
      {isSpin ? (
        <Icon type='loading' spin={isSpin} />
      ) : (
        <div id='btns' onClick={fetchGeolocation}>
          <img src={iconsHunt} alt='현재 위치 조회' />
        </div>
      )}
    </div>
  );
};
export default MainMap;
