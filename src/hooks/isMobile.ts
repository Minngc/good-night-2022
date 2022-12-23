import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, SetIsMoble] = useState<boolean>(true);
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);
  function handleResize() {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth > 500) {
      SetIsMoble(false);
    } else SetIsMoble(true);
  }, [isMobile, innerHeight, innerWidth]);
  return isMobile;
}

export default useIsMobile;
