import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './index.scss'
import homeLogo from '../../assets/image/home-logo.png'
import sendWish from '../../assets/image/send-wish.png'
import lookWish from '../../assets/image/look-wish.png'
import about from '../../assets/image/about.png'
import sastLogo from '../../assets/image/sastlogo.png'
import astronaut from '../../assets/image/spaceman.gif'

const Home: React.FC = () => {
  const swiperGoTo = useRef();
  const footerRotio = useRef(0);
  const [notMobile, setNotMobile] = useState(false)
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
  useEffect(() => {
    // resizeView()
    if (window.screen.width > 500) {
      setNotMobile(true)
      console.log(notMobile)
    }
  }, [window.screen.width, window.screen.height])

  return (
    !notMobile ?
      <div className="page-body">
        <div className="container">
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
            <img src={sastLogo} alt="sast logo" className="sast-logo" ></img>
          </div>
        </div>
      </div>
      :
      <div className="container" style={{ height: '100%', backgroundColor: '#1c1f18' }}>
        <div style={{ height: '100%', display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <img src={astronaut} alt="image" width='300px'></img>
          <h1 style={{ color: 'white' }}>哎呀，页面不见了</h1>
          <h1 style={{ color: 'white' }}>请使用手机竖屏访问</h1>
        </div>
      </div>
  );
};

export default Home;
