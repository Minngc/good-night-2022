import { useEffect, useState } from "react";

export function useQQLogin() {
  const [logined, setLogined] = useState<boolean>(false);
  const [qqToken, setQQToken] = useState<string|null>("");
  useEffect(() => {
    if (localStorage.getItem("gn2022-qqtoken") !== null) {
      const qqtoken = localStorage.getItem("gn2022-qqtoken");
      setLogined(true);
      setQQToken(qqtoken);
    }
  }, []);
  return [logined, qqToken];
}
