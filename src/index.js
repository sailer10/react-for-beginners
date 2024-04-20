import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
  <React.StrictMode> 태그에 감싸져 있으면 콘솔창에 값 출력시 두번씩 되는 현상이 있다
  이는 리액트가 오류 검사를 위해 렌더링 단계에서 의도적으로 함수를 두번 호출하기 떄문임.
  StrictMode 를 지우고 그냥 <App/> 만 호출해도 되지만 어짜피 배포단계에선 StrictMode 가 영향을
  끼치지 않으므로 그냥 두고 쓰자.
  */
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);
