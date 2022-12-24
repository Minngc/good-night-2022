import React, { useEffect, useState } from "react";
import style from './index.module.scss'
import cardConponents from "../../../higherOrderComponent/card";
import LaunchStateCard, { launchStateCardProps } from "./launchStateCard";
import BackIcon from "../../../components/back";
import { getQueryVariable } from "../../../utils";

const LaunchSuccess: React.FC = () => {
  const [launchState, setlaunchState] = useState('success')
  const LaunchCurrentCard = cardConponents<launchStateCardProps>({
    children: LaunchStateCard,
    title: "发射愿望",
    arguments: {
      state: launchState,
    },
  });
  useEffect(() => {
    if(getQueryVariable('state')==='error'){
      setlaunchState('error')
    }
  }, [])
  console.log(launchState)
  return (
  <>
    <LaunchCurrentCard />
    {launchState === 'success' ?
      <div className={style.back}>
        <BackIcon to={"/home"} />
      </div>
      :
      <div className={style.back}>
        <BackIcon to={"/launch"} />
      </div>
    }
  </>);
};

export default LaunchSuccess;
