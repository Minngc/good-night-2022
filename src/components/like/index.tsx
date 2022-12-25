import React from "react";
import like from "../../assets/image/like.png";
// import liked from "../../assets/image/liked.png"
import back from "../../assets/image/like.png";
import style from './index.module.scss'

export type LikeProps = LikedProps | NoLikedProps;
/*{
     liked: boolean;
     number: number;
 }*/

type LikedProps = {
  liked: boolean;
  number: number;
  onClick?: () => any
};

type NoLikedProps = {
  liked: boolean;
  number: number;
  onClick?: () => any
};

const Like: React.FC<LikeProps> = (props) => {
  return (
    <>
      {props.liked ? (
        <div className={style.roundButtonLike} onClick={props.onClick}>
          <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.64 31.3H7.58004C3.90895 31.3 0.920044 28.314 0.920044 24.64V17.6852C0.920044 16.2485 1.33918 14.9362 2.16879 13.7771L10.4591 2.37354C10.9765 1.50924 11.8495 0.960022 12.76 0.960022C13.9886 0.960022 15.72 2.0151 15.72 4.36518C15.72 5.0358 15.5379 5.48674 15.3587 5.92323C15.3154 6.02729 15.272 6.13424 15.2286 6.24987C14.9511 7.02744 13.4856 10.3401 12.7167 12.06C14.9945 12.0629 20.0415 12.0774 21.958 12.1352C24.0682 12.1352 25.34 13.5631 25.34 14.9449C25.34 15.4189 25.262 16.0664 25.1955 16.5231C25.8459 16.9105 26.82 17.743 26.82 19.2374C26.82 20.2781 26.32 21.047 25.8401 21.5499C26.3286 22.0009 26.82 22.7091 26.82 23.7526C26.82 25.2384 25.7968 26.1374 25.0654 26.5941C25.21 26.9814 25.34 27.5017 25.34 28.1174C25.34 29.4471 23.9323 31.3 21.64 31.3Z" fill="white" />
          </svg>
          {props.number}
        </div>
      ) : (
        <div className={style.roundButton} onClick={props.onClick}>
          <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3175 9.56667C26.0111 9.04987 26.4667 8.23161 26.4667 7.30001C26.4667 5.73487 25.1985 4.46667 23.6334 4.46667H17.0442C17.0442 4.46667 15.2852 2.54454 13.9785 1.30127C12.8667 0.243872 10.7236 1.13921 10.7236 1.13921L5.97604 3.30954C4.16271 4.21961 3.23334 3.9 2.22357 5.31433C1.21381 6.72865 0.966684 9 0.966675 11.8333C0.966666 14.6667 0.966654 16.3667 1.53336 18.6333C2.10006 20.9 3.23334 21.4667 3.23334 21.4667C4.68514 22.9185 7.21931 22.6 9.27177 22.6H20.8C22.0524 22.6 23.0667 21.5857 23.0667 20.3333V19.1433C24.3598 18.8804 25.3334 17.738 25.3334 16.3667C25.3334 15.6413 25.0523 14.9863 24.6035 14.4853C25.6881 14.0875 26.4667 13.0551 26.4667 11.8333C26.4667 10.9017 26.0111 10.0835 25.3175 9.56667Z" fill="white" />
          </svg>
          点赞
        </div>
      )}
    </>
  );
};

export default Like;
