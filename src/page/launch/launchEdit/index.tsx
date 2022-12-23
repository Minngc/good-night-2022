import React, { useEffect, useState } from "react";
import Input from "../../../components/input";
import LaunchEditCard, { launchCardEditProps } from "./launchEditCard";
import cardConponents from "../../../higherOrderComponent/card";
import { OthersWishProps } from "../../others/othersWish";
import BackIcon from "../../../components/back";
import style from './index.module.scss'
import { useUserInfo } from "../../../hooks/userInfo";
import Submit from "../../../components/submit";


const LaunchEdit: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [wish, setWish] = useState<string>("");
  const [username, location] = useUserInfo()
  const LaunchCard = cardConponents<launchCardEditProps>({
    children: LaunchEditCard,
    title: "发射愿望",
    arguments: {
      wish: wish,
      name: name,
      phoneNumber: phoneNumber,
      setName: setName,
      setPhoneNumber: setPhoneNumber,
      setWish: setWish,
    },
  });
  const handleOnClick = ()=>{
    // console.log('submit')
    const nameInput = document.getElementById('name') as HTMLInputElement
    const phoneNumberInput = document.getElementById('phoneNumber') as HTMLInputElement
    const wishInput = document.getElementById('wish') as HTMLTextAreaElement
    const currentName = nameInput.value
    const currentPhoneNumber = phoneNumberInput.value
    const currentWish = wishInput.value.substring(3)
    if(window.confirm('你确定要发送吗？记得检查下手机号是否正确哦，否则无法正常发送🤔️')){
      console.log(currentName,currentPhoneNumber,currentWish)
    }
  }
  useEffect(()=>{
    setName(username)
  },[username])
  return (
    <>
      <LaunchCard />
      <div className={style.back}>
        <BackIcon to={"/home"} />
      </div>
      <div className={style.submit}>
        <Submit onClick={handleOnClick} />
      </div>
    </>
  );
};

export default LaunchEdit;
