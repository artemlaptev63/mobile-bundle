import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function isMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

// if(!isMob() && process.env.NODE_ENV === "production") {
//   window.location.replace("https://desktop-bundle-test.netlify.app")
//   return null;
// }
// if(isMob() && process.env.NODE_ENV === "production") {
//   window.location.replace("https://artemlaptev63.github.io/mobile-bundle")
//   return null;
// }

const getIndexFile = () => {
  const environments: {[key: string]: string} = {
    "DESKTOP": 'index-desktop',
    "MOBILE": 'index-mobile',
  }

  const buildTarget: string = process.env.REACT_APP_BUILD_TARGET!;

  if(buildTarget) {
    return environments[buildTarget];
  }

  if(isMob()) {
    return environments.MOBILE;
  } else {
    return environments.DESKTOP;
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

// приложение должно быть одно - на данный момент есть два App для мобилки и десктопа отдельно

