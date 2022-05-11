import React from 'react';
import ReactDOM from 'react-dom';
import Style from './App.css';
import Icon from './GitHub-Mark.png';
import Text from './data.txt';
import Json from './data.json'; //JSON 모듈은 웹팩에서 기본으로 처리해주기 때문에 별도의 로더가 필요없다.

const App = () => (
  <div className='container'>
    <h3 className='title'>webpack example</h3>
    <div>{`name: ${Json.name}, age: ${Json.age}`}</div>
    <div>{`text: ${Text}`}</div>
    <img src={Icon} />
    <div>{`앱 버전은 ${APP_VERSION}입니다.`}</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
