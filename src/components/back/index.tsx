import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/image/back.png";

type BackIconProps = {
  to?: string;
  className?: string;
};

const BackIcon: React.FC<BackIconProps> = (props) => {
  return (
    <>
      <Link className={props.className} to={props.to ?? "./"}>
        <img src={back} alt="back" />
      </Link>
    </>
  );
};

export default BackIcon;
