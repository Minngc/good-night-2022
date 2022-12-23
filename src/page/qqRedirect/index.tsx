import React from "react";
import { useLogin } from "../../hooks/login";

function QqRedirect() {
  const [logined, uniID] = useLogin();
  if (logined) {
    window.location.href = "https://goodnight2022.sast.fun";
  }
  if (window.location.href === "https://goodnight2022.sast.fun/qqre")
    window.location.href = "https://goodnight2022.sast.fun";
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.6rem",
      }}
    >
      正在重定向至源网站
    </div>
  );
}

export default QqRedirect;
