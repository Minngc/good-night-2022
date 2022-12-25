import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import homeLogo from "../../assets/image/home-logo.png";
import sendWish from "../../assets/image/send-wish.png";
import lookWish from "../../assets/image/look-wish.png";
import about from "../../assets/image/about.png";
import sastLogo from "../../assets/image/sastlogo.png";
import LoginCard from "../../components/LoginCard";
import { useLogin } from "../../hooks/login";
import { useUserInfo } from "../../hooks/userInfo";

const Home: React.FC = () => {
  const [logined, uniID] = useLogin();
  const [nickname, location] = useUserInfo();
  const quitLogin = () => {
    localStorage.clear();
    window.location.href = "https://goodnight2022.sast.fun/";
  };
  return (
    <>
      {/* {logined ? <></> : <LoginCard></LoginCard>}
        <div className="function-box">
          <span className="welcome-info">欢迎登机，{nickname}</span>
          <span className="quit" onClick={quitLogin}>
            退出登录 {">"}
          </span>
        </div> */}
      <div className="logo-body">
        <img src={homeLogo} alt="logo" className="home-logo"></img>
      </div>
      <div className="entrance-body">
        <Link to="/launch">
          <img
            src={sendWish}
            alt="send wish"
            className="send-wish-button"
          ></img>
        </Link>
        <Link to="/others">
          <img
            src={lookWish}
            alt="look wish"
            className="look-wish-button"
          ></img>
        </Link>
        <Link to="/about">
          <img src={about} alt="about" className="about-button"></img>
        </Link>
      </div>
      <div className="info">
        <img src={sastLogo} alt="sast logo" className="sast-logo"></img>
        <div className="icp">
          <a
            href="https://www.beian.miit.gov.cn/"
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
          >
            苏ICP备2021038236号
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
