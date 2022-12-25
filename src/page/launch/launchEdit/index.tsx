import React, { useEffect, useState } from "react";
import LaunchEditCard, { launchCardEditProps } from "./launchEditCard";
import cardConponents from "../../../higherOrderComponent/card";
import BackIcon from "../../../components/back";
import style from './index.module.scss'
import { useUserInfo } from "../../../hooks/userInfo";
import Submit from "../../../components/submit";
import { getPreviousBless, sentBless } from "../../../api/launch";
import { useNavigate } from "react-router-dom";
import { throttle } from "../../../utils";


const LaunchEdit: React.FC = () => {
  const navigate = useNavigate()
  // const [name, setName] = useState<string>("");
  // const [phoneNumber, setPhoneNumber] = useState<string>("");
  // const [wish, setWish] = useState<string>("");
  // const [email,setEmail] = useState('')
  const [username, location] = useUserInfo()
  const LaunchCard = cardConponents<launchCardEditProps>({
    children: LaunchEditCard,
    title: "发射愿望",
    arguments: {
      name: username,
    },
  });
  const handleOnClick = () => {
    // console.log('submit')
    const regEmail = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/
    const regNumber = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
    const nameInput = document.getElementById('name') as HTMLInputElement
    const phoneNumberInput = document.getElementById('phoneNumber') as HTMLInputElement
    const wishInput = document.getElementById('wish') as HTMLTextAreaElement
    const emailInput = document.getElementById('email') as HTMLInputElement
    const currentName = nameInput.value
    const currentPhoneNumber = phoneNumberInput.value
    const currentEmail = emailInput.value
    const currentWish = wishInput.value.substring(3)
    console.log(currentName, currentPhoneNumber, currentWish)
    if (currentName !== "" && regNumber.test(currentPhoneNumber) && regEmail.test(currentEmail) && currentWish !== "") {
      sentBless(currentName, currentPhoneNumber, currentEmail, currentWish, location).then(res => {
        console.log(res)
        if(res.data.data==='OK'){
          navigate('/launch/success?state=success')
        }else{
          navigate('/launch/success?state=error')
        }
      }).catch(e => {
        console.log(e)
        navigate('/launch/success?state=error')
      })
    } else {
      if (currentWish === "") {
        alert('还没写愿望内容哦～')
      } else if (currentName === "") {
        alert('填写的名字有问题哦')
      } else if (!regEmail.test(currentEmail)) {
        alert('填写的邮箱有问题哦')
      } else if (!regNumber.test(currentPhoneNumber)) {
        alert('填写的手机号码有问题哦')
      }
    }
  }
  return (
    <>
      <LaunchCard />
      <div className={style.back}>
        <BackIcon to={"/home"} />
      </div>
      <div className={style.submit}>
        <Submit onClick={throttle(handleOnClick)} />
      </div>
    </>
  );
};

export default LaunchEdit;
