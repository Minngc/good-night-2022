import React, { useEffect, useState } from 'react';
import style from './index.module.scss'
import CardTrim from '../../../../components/logos/cardTrim';
import Input from '../../../../components/input';
import { useUserInfo } from '../../../../hooks/userInfo';
import { getPreviousBless } from '../../../../api/launch';

export type launchCardEditProps = {
    wish?: string;
    name: string;
    phoneNumber?: string;
    email?: string;
    setWish?: React.Dispatch<React.SetStateAction<string>>
    setPhoneNumber?: React.Dispatch<React.SetStateAction<string>>
    setName?: React.Dispatch<React.SetStateAction<string>>
};
const LaunchEditCard: React.FC<launchCardEditProps> = (props) => {
    const [name,setName] = useState(props.name)
    const [wish,setWish] = useState("")
    const [email,setEmail] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [textLength, setTextLength] = useState(0)
    const handleWishOnChange = (e: any) => {
        // console.log(e.target.value.substring(0, 3))
        if (e.target.value.substring(0, 3) !== '你好，') {
            e.target.value = '你好，' + e.target.value.substring(4)
        }
        setWish(pre=>{
            if(e.target.value.substring(0, 3) !== '你好，')
            return  e.target.value = '你好，' + e.target.value.substring(4)
            else return e.target.value
        })
        setTextLength(e.target.value.length - 3)
    }
    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }
    const handlePhoneNumberChange = (e: any) => {
        setPhoneNumber(e.target.value)
    }
    useEffect(()=>{
        setTextLength(wish.length - 3)
    },[wish])
    useEffect(()=>{
        getPreviousBless().then(res=>{
            console.log(res)
            if(res.data.data.isSent===true){
              setName(res.data.data.content.username)
              setPhoneNumber(res.data.data.content.phone)
              setWish(res.data.data.content.blessing)
              setEmail(res.data.data.content.mail)
            }
          })
    }, [])
    return (
        <>
            <div className={style.inputBody}>
                <form id='wishform'></form>
                <div className={style.inputBox}><span>你的昵称：</span><Input  form='wishform' required defaultValue={name} id='name' onChange={handleNameChange} /></div>
                <div className={style.inputBox}><span>手机号码：</span><Input form='wishform' required defaultValue={phoneNumber} id='phoneNumber' placeholder='请确保电话正确哦' maxLength={11} onChange={handlePhoneNumberChange} /></div>
                <div className={style.inputBox}><span>邮箱地址：</span><Input  form='wishform' required defaultValue={email} id='email' placeholder='用于提醒点赞数目' /></div>
                <div className={style.inputBox}><textarea className={style.wish} form='wishform' required defaultValue={'你好，'+ wish} id='wish' spellCheck onChange={handleWishOnChange} maxLength={88} /></div>
                <div className={style.info} style={{ marginBottom: '20px' }}>晚安。<div><span style={{ fontSize: '2rem' }}>{textLength}</span>/85</div></div>
            </div>
            <CardTrim />
        </>
    );
}

export default LaunchEditCard;
