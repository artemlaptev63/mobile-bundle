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

export const getComponentDeviceType = () => {
  const buildTarget: string = process.env.REACT_APP_BUILD_TARGET!;

  switch (buildTarget) {
    case "MOBILE":
      return "mobile";
    case "DESKTOP":
      return "desktop";
    default:
      return isMob() ? "mobile" : "desktop";
  }
}

// export const getComponentFile = () => {
//   const environments: {[key: string]: string} = {
//     "DESKTOP": 'index-desktop',
//     "MOBILE": 'index-mobile',
//   }
//
//   const buildTarget: string = process.env.REACT_APP_BUILD_TARGET!;
//
//   if(buildTarget) {
//     return environments[buildTarget];
//   }
//
//   if(isMob()) {
//     return environments.MOBILE;
//   } else {
//     return environments.DESKTOP;
//   }
//
// }