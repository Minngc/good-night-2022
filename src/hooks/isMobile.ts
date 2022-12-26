import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMoble] = useState<boolean>(window.innerWidth <= 500);
  function handleResize() {
    if (window.innerWidth > 500) {
      setIsMoble(false);
    }
    if (window.innerWidth <= 500) {
      setIsMoble(true);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    console.log(window.innerWidth);
    console.log(isMobile);
  });
  return isMobile;
}

export default useIsMobile;
