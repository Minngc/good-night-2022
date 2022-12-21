import React from "react";
import like from "../../assets/image/like.png";
// import liked from "../../assets/image/liked.png"
import back from "../../assets/image/like.png";

export type LikeProps = LikedProps | NoLikedProps
/*{
     liked: boolean;
     number: number;
 }*/

type LikedProps = {
  liked: true;
  number: number;
};

type NoLikedProps = {
  liked: false;
  number:undefined;
};

const Like: React.FC<LikeProps> = (props) => {
  return (
    <>
      {props.liked ? (
        <img src={""} alt={`${props.number} liked`} />
      ) : (
        <img src={like} alt={"nolike"} />
      )}
    </>
  );
};

export default Like;