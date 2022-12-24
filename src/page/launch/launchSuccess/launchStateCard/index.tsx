/* eslint-disable react/style-prop-object */
import React from 'react';
import style from './index.module.scss'
import launchSuccess from '../../../../assets/image/lotties/launchSuccess.json'
import launchFail from '../../../../assets/image/lotties/launchFailed.json'
import Lottie from 'react-lottie'
export type launchStateCardProps = {
    state: string
}
function LaunchStateCard(props:launchStateCardProps) {
    const successOptions = {
        loop: false,
        autoplay: true,
        animationData: launchSuccess,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
        delay: 500,
      };
    const failOptions = {
        loop: false,
        autoplay: true,
        animationData: launchFail,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
        delay: 1000,
    }
    return (
        <div className={style.stateBody}>
            {props.state==='success'?<Lottie options={successOptions} width={300} height={300} />:<Lottie options={failOptions} width={300} height={300} />}
            
            <div className={style.info}>{props.state==='success'?'发射成功':'发射失败 请重试'}</div>
        </div>
    );
}

export default LaunchStateCard;
