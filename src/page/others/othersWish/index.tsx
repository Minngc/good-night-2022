import React from "react";
import style from "./index.module.scss";
import CardTrim from "../../../components/logos/cardTrim";

export type OthersWishProps = {
  wishes: string;
  name: string;
  time: string;
};

const OthersWish: React.FC<OthersWishProps> = (props) => {
  return (
    <>
      <div>
        <div className={style.wishes}>{props.wishes}</div>
        <div className={style.name}>{props.name}</div>
        <div className={style.time}>{props.time}</div>
        <CardTrim />
      </div>
    </>
  );
};

export default OthersWish;
