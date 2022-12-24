import React from "react";
import { useLogin } from "../../hooks/login";

function FeishuRedirect() {
  const [logined, uniID] = useLogin();
  setTimeout(() => {
    if (logined) {
      window.location.href = 'http://192.168.31.103:3000';
    }
  }, 1000)
  // if (window.location.href === "https://goodnight2022.sast.fun/fsre")
  //   window.location.href = "https://goodnight2022.sast.fun";
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

export default FeishuRedirect;
