import React, { useState, useEffect } from "react";
import cardConponents from "../../higherOrderComponent/card";
import style from "./index.module.scss";
import OthersWish, { OthersWishProps } from "./othersWish";
import BackIcon from "../../components/back";
import Like, { LikeProps } from "../../components/like";
import NextWish from "../../components/logos/nextWish";
import { getRandomBless, likeBless } from "../../api/others";
import { formatDateTimeForHMSS } from "../../utils";

const Others: React.FC = () => {
  const [wishes, setWishes] = useState<string>(
    "加载中"
  );
  const [name, setName] = useState<string>("加载中");
  const [time, setTime] = useState<string>("加载中");
  const [like, setLike] = useState<LikeProps>({
    liked: false,
    number: 0,
  });
  const [bid,setBid] = useState<number>()
  const OthersCard = cardConponents<OthersWishProps>({
    children: OthersWish,
    title: "看看愿望",
    arguments: {
      wishes: wishes,
      name: name,
      time: time,
    },
  });

  function handleLike() {
    if (like.liked) {
      likeBless(bid).then((res)=>{
        console.log(res)
      })
      setLike({ liked: false, number: like.number });
    } else {
      // 做请求 然后设置 like
      likeBless(bid).then((res)=>{
        console.log(res)
      })
      setLike({ liked: true, number: like.number+1 });
    }
  }

  useEffect(()=>{
    nextWish()
  },[])

  useEffect(() => {
    // 如果接口有差异就在这里切换like
  }, [name, wishes, time]);

  function nextWish() {
    getRandomBless().then((res)=>{
      console.log(res)
      if(res.data.success===true){
        setName(res.data.data.username)
        setWishes('你好，'+res.data.data.blessing+'晚安。')
        setTime(formatDateTimeForHMSS(res.data.data.date))
        setLike({liked:res.data.data.isLiked,number:res.data.data.like})
        setBid(res.data.data.id)
      }
    })
    // // 发送请求
    // setName("来自广东省地 Maxtune");
    // setWishes("圣诞快乐，鑫扬先生");
    // setTime("2022年12月25日 00:00:00");
    // // like根据返回设置
    // setLike({ liked: false, number: undefined });
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
