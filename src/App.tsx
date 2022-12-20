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
    console.log(document.getElementsByClassName('loading-bg')[0])
    document.getElementsByClassName('loading-bg')[0]?.classList.add('loaded')
    setTimeout(()=>{
      const bg = document.getElementsByClassName('loading-bg')[0] as HTMLElement
      bg.style.display='none'
    },700)
  }
  window.addEventListener(
    'load',
    loaded
    ,
    false
  )
  setTimeout(()=>{
    loaded()
  },5000)
  return (
    <>
      <div id="loading-box">
        <div className="loading-bg"></div>
        <div className="spinner-box">
          <div className="spinner">
            <div className="loader l1"></div>
            <div className="loader l2"></div>
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
