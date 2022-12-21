import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './index.scss'
import homeLogo from '../../assets/image/home-logo.png'
import sendWish from '../../assets/image/send-wish.png'
import lookWish from '../../assets/image/look-wish.png'
import about from '../../assets/image/about.png'
import sastLogo from '../../assets/image/sastlogo.png'
import astronaut from '../../assets/image/spaceman.gif'
import qrCode from '../../assets/image/qrcode.png'
import { useLogin } from "../../hooks/login";
import LoginCard from "../../components/LoginCard";
import { useUserInfo } from "../../hooks/userInfo";

const Home: React.FC = () => {
  const swiperGoTo = useRef();
  const footerRotio = useRef(0);
  const [notMobile, setNotMobile] = useState(false)
  const [logined, uniID] = useLogin()
  const [nickname, location] = useUserInfo()
  // console.info('logined:',logined)
  // console.info('uniID:',uniID)
  // console.log('location: ',location)
  function resizeView() {
    //@ts-ignore
    document.body.style.zoom = "normal"; //避免zoom尺寸叠加
    let Y = document.body.clientHeight;
    let X = document.body.clientWidth;
    let scaleY = document.body.clientHeight / 844;
    let scaleX = document.body.clientWidth / 390;
    let scale: number;
    footerRotio.current = (408 * 100) / Y + 400;
    if (X / Y <= 1.5) {
      scale = scaleX;
    } else {
      scale = scaleY;
    }
    const containers = document.querySelectorAll(".container");
    [].forEach.call(containers, function (item) {
      //@ts-ignore
      item.style.zoom = scale;
    });
  }
  const quitLogin = () => {
    localStorage.clear();
    window.location.href='https://goodnight2022.sast.fun/';
  }
  useEffect(() => {
    // resizeView()
    if (window.innerWidth > 500) {
      setNotMobile(true)
      // console.log(notMobile)
    }
    // setTimeout(()=>{
    //   const sonPage = document.getElementById('son')
    //   console.log(sonPage)
    //   if (sonPage !== null ) {
    //     setNotMobile(false)
    //   }
    // },100)
  }, [window.screen.width, window.screen.height])
  return (
    !notMobile ?
      <div className="page-body">
        <div className="container">
          {logined ? <></> : <LoginCard></LoginCard>}
          <div className="function-box">
            <span className="welcome-info">欢迎登机，{nickname}</span>
            <span className="quit" onClick={quitLogin}>退出登录 {'>'}</span>
          </div>
          <div className="logo-body">
            <img src={homeLogo} alt="logo" className="home-logo"></img>
          </div>
          <div className="entrance-body">
            <Link to='/launch'>
              <img src={sendWish} alt="send wish" className="send-wish-button"></img>
            </Link>
            <Link to='/others'>
              <img src={lookWish} alt="look wish" className="look-wish-button"></img>
            </Link>
            <Link to='/about'>
              <img src={about} alt="about" className="about-button"></img>
            </Link>
          </div>
          <div className="info">
            <img src={sastLogo} alt="sast logo" className="sast-logo" ></img>
            <div className="icp"><a href="https://www.beian.miit.gov.cn/" target="_blank" style={{ color: 'white' }}>苏ICP备2021038236号</a></div>
          </div>
        </div>
      </div>
      :
      <div className="container" style={{ height: '100%', backgroundColor: '#1c1f18' }}>
        <div style={{ height: '100%', display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
          {/* <img src={astronaut} alt="image" width='300px'></img>
          <h1 style={{ color: 'white' }}>哎呀，页面不见了</h1>
          <h1 style={{ color: 'white' }}>请使用手机竖屏访问</h1> */}
          <iframe src="/" frameBorder="0" style={{ height: '844px', width: '380px' }} id='son'></iframe>
          <div className="infoBox" style={{ height: '100%', display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ color: 'white', fontSize: '2rem' }}>推荐使用手机访问</div>
            <img src={qrCode} alt="qrcode" />
          </div>
        </div>
      </div>
  );
};

export default Home;
