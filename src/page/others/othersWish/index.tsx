import React from "react";
import style from "./index.module.scss";
import CardTrim from "../../../components/logos/cardTrim";
import loadingAnimation from '../../../assets/image/lotties/loading.json'
import Lottie from "react-lottie";

export type OthersWishProps = {
  wishes: string;
  name: string;
  time: string;
  location: string;
  loading: boolean
};

const OthersWish: React.FC<OthersWishProps> = (props) => {
  const successOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
    delay: 500,
  };
  return (
    <>{props.loading ?
      <Lottie options={successOptions} width={300} height={400} />
      :
      <div>
        <div className={style.wishes}>{props.wishes}</div>
        <div className={style.name}>来自{props.location}的{props.name}</div>
        <div className={style.time}>{props.time}</div>
        <CardTrim />
      </div>
    }
    </>
  );
};

export default OthersWish;
