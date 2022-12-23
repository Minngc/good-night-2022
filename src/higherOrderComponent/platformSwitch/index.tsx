import React from "react";
import useIsMobile from "../../hooks/isMobile";
// import qrCode from "../../assets/image/qrcode.png";
import LoginCard from "../../components/LoginCard";
import { useLogin } from "../../hooks/login";
import { useUserInfo } from "../../hooks/userInfo";
import Iframe from "../../components/Iframe";

type PlatformSeitchConponentsProps<T> = {
  children: React.FC<T>;
  url: string;
  aguments?: T;
  style?: React.CSSProperties;
};

export default function platformSwitch<T>(
  props: PlatformSeitchConponentsProps<T>
) {
  const Children = props.children;
  const aguments = props.aguments as T;
  return () => {
    const [logined, uniID] = useLogin();
    const [nickname, location] = useUserInfo();
    const quitLogin = () => {
      localStorage.clear();
      window.location.href = "https://goodnight2022.sast.fun/";
    };
    return (
      <>
        {useIsMobile() ? (
          <div
            style={props.style ? props.style : undefined}
            className="page-body"
          >
            <div className="container">
              {logined ? <></> : <LoginCard></LoginCard>}
              <div className="function-box">
                <span className="welcome-info">欢迎登机，{nickname}</span>
                <span className="quit" onClick={quitLogin}>
                  退出登录 {">"}
                </span>
              </div>
              <Children {...aguments} as T />
            </div>
          </div>
        ) : (
          <Iframe url={props.url} />
          //   <div
          //     className="container"
          //     style={{ height: "100%", backgroundColor: "#1c1f18" }}
          //   >
          //     <div
          //       style={{
          //         height: "100%",
          //         display: "flex",
          //         gap: "20px",
          //         justifyContent: "center",
          //         flexDirection: "row",
          //         alignItems: "center",
          //       }}
          //     >
          //       {/* <img src={astronaut} alt="image" width='300px'></img>
          //   <h1 style={{ color: 'white' }}>哎呀，页面不见了</h1>
          //   <h1 style={{ color: 'white' }}>请使用手机竖屏访问</h1> */}
          //       <iframe
          //         src="/"
          //         frameBorder="0"
          //         title="Good night 2022"
          //         style={{ height: "844px", width: "380px" }}
          //         id="son"
          //       ></iframe>
          //       <div
          //         className="infoBox"
          //         style={{
          //           height: "100%",
          //           display: "flex",
          //           gap: "20px",
          //           justifyContent: "center",
          //           flexDirection: "column",
          //           alignItems: "center",
          //         }}
          //       >
          //         <div style={{ color: "white", fontSize: "2rem" }}>
          //           推荐使用手机访问
          //         </div>
          //         <img src={qrCode} alt="qrcode" />
          //       </div>
          //     </div>
          //   </div>
        )}
      </>
    );
  };
}
