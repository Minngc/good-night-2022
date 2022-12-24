import React from "react";
import "./index.scss";
import penguin from "../../assets/image/penguin.gif";
import qqloginbutton from "../../assets/image/qqlogin.png";
function LoginCard(props: any) {
  const qqLogin = () => {
    window.parent.location.href =
      "https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=102035754&redirect_uri=https%3A%2F%2Fgoodnight2022.sast.fun%2Fqqre";
    window.location.href =
      "https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=102035754&redirect_uri=https%3A%2F%2Fgoodnight2022.sast.fun%2Fqqre";
  };
  const feishuLogin = () => {
    //TODO 线上版本要更换链接
    window.location.href =
      "https://passport.feishu.cn/suite/passport/oauth/authorize?client_id=cli_a328c11558fc100c&redirect_uri=https%3A%2F%2Fgoodnight2022.sast.fun%2Ffsre&response_type=code&state=feishuLogin";
    // window.location.href = 'https://passport.feishu.cn/suite/passport/oauth/authorize?client_id=cli_a328c11558fc100c&redirect_uri=http%3A%2F%2F192.168.31.103%3A3000%2Ffsre&response_type=code&state=feishuLogin'
    // window.location.href = 'https://passport.feishu.cn/suite/passport/oauth/authorize?client_id=cli_a328c11558fc100c&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffsre&response_type=code&state=feishuLogin'
  };
  return (
    <div className="loginBox">
      <div className="container">
        <div className="box">
          <img src={penguin} alt="info" className="penguin" />
          <br />
          <h1>准备登机</h1>
          <div style={{ fontSize: "1.5rem" }}>
            在出发前，我们还需要知道你的身份
          </div>
          <br />
          <button onClick={feishuLogin}> 用 SAST飞书 登录 </button>
          <div
            style={{
              height: "20px",
              margin: "10px",
              marginTop: "30px",
              fontSize: "18px",
            }}
          >
            合作平台登录
          </div>
          <button onClick={qqLogin} style={{ background: "#1fbafb" }}>
            {" "}
            使用 QQ 登录{" "}
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
