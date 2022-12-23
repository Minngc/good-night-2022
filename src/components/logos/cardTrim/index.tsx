import React from "react";
import cardlogo from "../../../assets/image/cardlogo.png";
import style from './index.module.scss'

const CardTrim: React.FC = () => {
  return (
    <>
      <img src={cardlogo} alt="trim" className={style.cardLogo} />
    </>
  );
};

export default CardTrim;
