import React from "react";
import qrCode from "../../assets/image/qrcode.png";

const Iframe: React.FC<{ url: string }> = (props) => {
  return (
    <>
      <div
        className="container"
        style={{ height: "100%", backgroundColor: "#1c1f18" }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <img src={astronaut} alt="image" width='300px'></img>
          <h1 style={{ color: 'white' }}>哎呀，页面不见了</h1>
          <h1 style={{ color: 'white' }}>请使用手机竖屏访问</h1> */}
          <iframe
            src={props.url}
            frameBorder="0"
            title="Good night 2022"
            style={{ height: "844px", width: "380px" }}
            id="son"
          ></iframe>
          <div
            className="infoBox"
            style={{
              height: "100%",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ color: "white", fontSize: "2rem" }}>
              推荐使用手机访问
            </div>
            <img src={qrCode} alt="qrcode" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Iframe;
