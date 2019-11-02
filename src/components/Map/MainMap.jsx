/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './map.scss';

const MainMap = ({ values, texts }) => {
  const [value, setValue] = useState(values);
  const [text, setText] = useState(texts);

  // 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행 (componentDidMount 와 componentDidUpdate)
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!', value, text);
    return () => {
      console.log('cleanup');
      console.log(value);
    };

    // 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 됩니다.
  }, [value, text]);

  // useEffect 를 사용 할 때 특정 값이 변경이 될 때만 호출하게 하고 싶을 경우

  return (
    <div>
      <p>
        현재 카운터 값은
        <b>
          {value}
          {text}
        </b>
      </p>
      <button type="button" onClick={() => setValue(value + 1)}>+1</button>
      <button type="button" onClick={() => setValue(value - 1)}>-1</button>
      <button type="button" onClick={() => setText(`${text} a`)}>+1</button>
    </div>
  );
};
export default MainMap;
