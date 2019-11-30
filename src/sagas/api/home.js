import axios from 'axios';
import { KAKAO_KEY } from '../../config/config';

const KAKAO_INSTANCE = axios.create({
  baseURL: 'https://dapi.kakao.com/v2/local',
  timeout: 5000,
  headers: { Authorization: `KakaoAK ${KAKAO_KEY}` },
});

export const fetchMap = ({ location }) => {
  console.log('location', location);
  return KAKAO_INSTANCE
    .get('/geo/coord2address.json', {
      params: location,
    })
    .then((response) => {
      console.log(123, response);
      return response;
    }).catch((error) => {
      return error;
    });
};
