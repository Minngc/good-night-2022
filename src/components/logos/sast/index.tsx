import React from "react";
import sastlogo from "../../assets/image/sastlogo.png";

type SASTLogoProps = {
    className?:string;
}

const SASTLogo: React.FC<SASTLogoProps> = (props) => {
  return (
    <>
      <img className={props.className} src={sastlogo} alt="sast logo" />
    </>
  );
};

export default SASTLogo;