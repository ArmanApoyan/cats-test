import React, { useLayoutEffect } from "react";

//this hook is detecting what device is using website

const checkDevice = (width) => {
  if(width > 1000) {
    return "desktop"
  }
  else if (width > 768) {
    return "tablet"
  }
  return "mobile"
}

export default function useDetectDevice() {
  const [device, setDevice] = React.useState({ device: "mobile", width: window.innerWidth, height: window.innerHeight })

  useLayoutEffect(() => {
    const handleResize = () => {
      setDevice({ device: checkDevice(window.innerWidth), width: window.innerWidth, height: window.innerHeight })
    };
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}