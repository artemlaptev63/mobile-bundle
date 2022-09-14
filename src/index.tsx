import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const getIndexFile = () => {
  const environments: {[key: string]: string} = {
    "DESKTOP": 'index-desktop',
    "MOBILE": 'index-mobile',
  }

  const buildTarget: string = process.env.REACT_APP_BUILD_TARGET!;

  if(buildTarget) {
    return environments[buildTarget];
  }
  alert(`window.location.hostname: ${window.location.hostname}`);
  switch (window.location.hostname) {
    case 'artemlaptev63.github.io':
      return environments.MOBILE
    case 'desktop-bundle-test.netlify.app':
      return environments.DESKTOP
    default:
      alert("Error");
      throw new Error("unknown domain name")
  }

}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const App = lazy(() => import(`./index/${getIndexFile()}`));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// вынести логику проверки девайса из компонентов чтобы не выгружать лишний раз
// ненужный бандл в функцию getIndexFile, проверить dev или prod, если dev то вернуть
// из конфига, если prod то посмотреть какой девайс и вернуть нужный

// добавить алерты вместо консоль логов чтобы понимать что лишние не попали

// приложение должно быть одно - на данный момент есть два App для мобилки и десктопа отдельно
