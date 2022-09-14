import { App } from "../mobile";

const Render = () => {
  if(!isMob()) {
    window.location.replace("https://desktop-bundle-test.netlify.app")
    return null;
  }
  alert(window.location.replace)
  return <App/>;
};

export default Render;

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