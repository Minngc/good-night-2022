import React, { useEffect, useState } from 'react';
import style from './index.module.scss'
import CardTrim from '../../../../components/logos/cardTrim';
import Input from '../../../../components/input';
import { useUserInfo } from '../../../../hooks/userInfo';

export type launchCardEditProps = {
    wish: string;
    name: string;
    phoneNumber: string;
    setWish: React.Dispatch<React.SetStateAction<string>>
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
    setName: React.Dispatch<React.SetStateAction<string>>
};
const LaunchEditCard: React.FC<launchCardEditProps> = (props) => {
    const [textLength, setTextLength] = useState(0)
    const [phoneNumber, setPhoneNumber] = useState('')
    const handleWishOnChange = (e: any) => {
        // console.log(e.target.value.substring(0, 3))
        if (e.target.value.substring(0, 3) !== '你好，') {
            e.target.value = '你好，' + e.target.value.substring(4)
        }
        setTextLength(e.target.value.length - 3)
    }
    const handleNameChange = (e: any) => {
    }
    const handlePhoneNumberChange = (e: any) => {
    }
    return (
        <div className={style.inputBody}>
            <div className={style.inputBox}><span>你的昵称：</span><Input defaultValue={props.name} id='name' onChange={handleNameChange} /></div>
            <div className={style.inputBox}><span>手机号码：</span><Input id='phoneNumber' type='tel' maxLength={11} onChange={handlePhoneNumberChange} /></div>
            <div className={style.inputBox}><textarea className={style.wish} id='wish' spellCheck defaultValue="你好，" onChange={handleWishOnChange} maxLength={88} /></div>
            <div className={style.inputBox} style={{ marginBottom: '20px' }}>晚安。<div><span style={{ fontSize: '2rem' }}>{textLength}</span>/85</div></div>
            <CardTrim />
        </div>
    );
}

export default LaunchEditCard;
