import RouteRegister from "./router";
import React from "react";
import "./App.scss";

const App: React.FC = () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let dom = document.getElementById("root");
  if (dom !== null) {
    dom.style.position = "fixed";
    dom.style.top = "-" + scrollTop + "px";
    dom.style.width = "calc(100%)";
  }
  // //加载完成后执行
  // $(window).on('load',function(){
  //   alert('finish')
  // })
  function loaded() {
    // alert('complete')
    //载入动画
    document.getElementById('loading-box')?.classList.add('loaded')
    // console.log(document.getElementsByClassName('loading-bg')[0])
    document.getElementsByClassName('loading-bg')[0]?.classList.add('loaded')
    setTimeout(() => {
      document.getElementsByClassName('loading-bg')[0]?.classList.add('hide')
    }, 700)
  }
  window.addEventListener(
    'load',
    loaded
    ,
    false
  )
  setTimeout(() => {
    loaded()
  }, 5000)
  return (
    <>
      <div id="loading-box">
        <div className="loading-bg"></div>
        <div className="spinner-box">

          <div className="loader">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100">
                <ellipse transform="rotate(-21.283 49.994 75.642)" cx="50" cy="75.651" rx="19.347" ry="16.432" fill="currentColor"></ellipse>
                <path fill="currentColor" d="M58.474 7.5h10.258v63.568H58.474z"></path>
              </svg>
            </span>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100">
                <ellipse transform="rotate(-21.283 49.994 75.642)" cx="50" cy="75.651" rx="19.347" ry="16.432" fill="currentColor"></ellipse>
                <path fill="currentColor" d="M58.474 7.5h10.258v63.568H58.474z"></path>
              </svg>
            </span>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100">
                <ellipse transform="rotate(-21.283 49.994 75.642)" cx="50" cy="75.651" rx="19.347" ry="16.432" fill="currentColor"></ellipse>
                <path fill="currentColor" d="M58.474 7.5h10.258v63.568H58.474z"></path>
              </svg>
            </span>
          </div>

          <div className="loading-word">
            <p className="loading-title" id="loading-title">晚安2022</p>
            <span id="loading-text">火箭燃料准备中...</span>
          </div>
        </div>
      </div>
      <RouteRegister />
    </>);
};

export default App;
