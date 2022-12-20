import React from 'react';
import './index.scss'
import penguin from '../../assets/image/penguin.gif'
function LoginCard(props: any) {
  const login = ()=>{
    window.location.href = 'https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=102035754&redirect_uri=https%3A%2F%2Fgoodnight2022.sast.fun%2Fhome'
  }
  return (
    <div className='loginBox'>
      <div className="container">
        <div className="box">
          <img src={penguin} alt="info" className="penguin" />
          <br />
          <h1>准备登机</h1>
          <div style={{ fontSize: '1.5rem' }}>在出发前，我们还需要知道你的身份</div>
          <br/>
          <button onClick={login}> 使用 QQ 登录 </button>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
