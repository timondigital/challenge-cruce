import { useState } from "react";

import useWindowSize from "./useWindowSize.js";
const useDetectedScreen = () => {
  let screen = "";

  const size = useWindowSize().width;
  const tabletScreenWidth = 768;
  const desktopScreenWidth = 1024;

  if (size < tabletScreenWidth) {
    screen = "phone";
  } else if (size < desktopScreenWidth) {
    screen = "tablet";
  } else {
    screen = "desktop";
  }
  return screen;
};

export default useDetectedScreen;
