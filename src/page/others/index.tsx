import React, { useState, useEffect } from "react";
import cardConponents from "../../higherOrderComponent/card";
import style from "./index.module.scss";
import OthersWish, { OthersWishProps } from "./othersWish";
import BackIcon from "../../components/back";
import Like, { LikeProps } from "../../components/like";
import NextWish from "../../components/logos/nextWish";

const Others: React.FC = () => {
  const [wishes, setWishes] = useState<string>(
    "你好，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈。 晚安。"
  );
  const [name, setName] = useState<string>("来自广东省的 Maxtune");
  const [time, setTime] = useState<string>("2022年12月18日 22:37:59");
  const [like, setLike] = useState<LikeProps>({
    liked: false,
    number: undefined,
  });
  const OthersCard = cardConponents<OthersWishProps>({
    children: OthersWish,
    title: "看看愿望",
    aguments: {
      wishes: wishes,
      name: name,
      time: time,
    },
  });

  function handleLike() {
    if (like.number) {
      setLike({ liked: false, number: undefined });
    } else {
      // 做请求 然后设置 like
      setLike({ liked: true, number: 999 });
    }
  }

  useEffect(() => {
    // 如果接口有差异就在这里切换like
  }, [name, wishes, time]);

  function nextWish() {
    // 发送请求
    setName("来自广东省地 Maxtune");
    setWishes("圣诞快乐，鑫扬先生");
    setTime("2022年12月25日 00:00:00");
    // like根据返回设置
    setLike({ liked: false, number: undefined });
  }
  return (
    <>
      <OthersCard />
      <div className={style.back}>
        <BackIcon to={"/home"} />
      </div>
      <div onClick={handleLike} className={style.like}>
        <Like {...like} />
      </div>
      <div onClick={nextWish} className={style["next-wish"]}>
        <NextWish />
      </div>
    </>
  );
};

export default Others;
