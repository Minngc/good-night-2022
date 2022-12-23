import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import style from './index.module.scss'

type InputProps = {
  className?: string;
  setter?: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute
};

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  // const handleChange = (value: string) => {
  //   if (props.setter) {
  //     props.setter(value);
  //   }
  // };
  return (
    <>
      <input
        // className={props.className}
        // value={props.value}
        // defaultValue={props.defaultValue}
        // placeholder={props.placeholder}
        // onChange={(e) => handleChange(e.target.value)}
        // type={props.type}
        {...props}
        style={style}
      />
    </>
  );
};

export default Input;
