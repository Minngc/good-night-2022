import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/image/back.png";
import style from './index.module.scss'

type BackIconProps = {
  to?: string;
  className?: string;
};

const BackIcon: React.FC<BackIconProps> = (props) => {
  return (
    <>
      <Link className={props.className} to={props.to ?? "./"}>
        <div className={style.roundButton}>
          <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.6475 0.315002L2.22749 13.7625L0.98999 15L15.675 29.685L18.15 27.21L5.96749 15L18.15 2.8175L15.6475 0.315002Z" fill="white" />
          </svg>
          返回
        </div>
      </Link>
    </>
  );
};

export default BackIcon;
