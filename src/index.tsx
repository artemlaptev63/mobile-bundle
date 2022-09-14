import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const getIndexFile = () => {
  const environments: {[key: string]: string} = {
    "DESKTOP": 'index-desktop',
    "MOBILE": 'index-mobile',
  }
// desktop https://6321c1cd60c6c91177543c2a--desktop-bundle-test.netlify.app/
  const buildTarget: string = process.env.REACT_APP_BUILD_TARGET!;

  if(buildTarget) {
    return environments[buildTarget];
  }

  switch (window.location.hostname) {
    case '':
      return environments.MOBILE
    default:
      return environments.DESKTOP
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
