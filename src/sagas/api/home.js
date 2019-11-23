import axios from 'axios';
import { KAKAO_KEY } from '../../config/config';

const KAKAO_INSTANCE = axios.create({
  baseURL: 'https://dapi.kakao.com/v2/local',
  timeout: 5000,
  headers: { Authorization: `KakaoAK ${KAKAO_KEY}` },
});


export const fetchMap = (location) => {
  return KAKAO_INSTANCE
    .get('/geo/coord2address.json?x=127.423084873712&y=37.0789561558879')
    .then((response) => {
      // console.log(123, response);
      return response;
    }).catch((error) => {
      return error;
    });
};
