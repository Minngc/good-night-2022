import React, { useEffect, useState } from "react";
import LaunchEditCard, { launchCardEditProps } from "./launchEditCard";
import cardConponents from "../../../higherOrderComponent/card";
import BackIcon from "../../../components/back";
import style from './index.module.scss'
import { useUserInfo } from "../../../hooks/userInfo";
import Submit from "../../../components/submit";
import { sentBless } from "../../../api/launch";
import { useNavigate } from "react-router-dom";


const LaunchEdit: React.FC = () => {
  const navigate = useNavigate()
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
  const handleOnClick = () => {
    // console.log('submit')
    const nameInput = document.getElementById('name') as HTMLInputElement
    const phoneNumberInput = document.getElementById('phoneNumber') as HTMLInputElement
    const wishInput = document.getElementById('wish') as HTMLTextAreaElement
    const emailInput = document.getElementById('email') as HTMLInputElement
    const currentName = nameInput.value
    const currentPhoneNumber = phoneNumberInput.value
    const currentEmail = emailInput.value
    const currentWish = wishInput.value.substring(3)
    console.log(currentName, currentPhoneNumber, currentWish)
    if (nameInput.checkValidity() && phoneNumberInput.checkValidity() && emailInput.checkValidity()) {
      sentBless(currentName, currentPhoneNumber, currentEmail, currentWish, location).then(res => {
        navigate('/launch/success?state=success')
      }).catch(e => {
        navigate('/launch/success?state=error')
      })
    } else {
      if (currentWish === '') {
        alert('还没写愿望内容哦～')
      } else if (!nameInput.checkValidity()) {
        alert('填写的名字有问题哦')
      } else if (!emailInput.checkValidity()) {
        alert('填写的邮箱有问题哦')
      } else if (!phoneNumberInput.checkValidity()) {
        alert('填写的手机号码有问题哦')
      }
    }
  }
  useEffect(() => {
    setName(username)
  }, [username])
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
