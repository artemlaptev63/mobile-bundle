import { App } from "../desktop";

const Render = () => {

  if(isMob() && process.env.NODE_ENV === "production") {
    window.location.replace("https://artemlaptev63.github.io/mobile-bundle")
    return null;
  }

  return <App/>
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