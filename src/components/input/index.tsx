import React from "react";

type InputProps = {
  className?: string;
  setter?: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
};

const Input: React.FC<InputProps> = (props) => {
  const handleChange = (value: string) => {
    if (props.setter) {
      props.setter(value);
    }
  };
  return (
    <>
      <input
        className={props.className}
        value={props.value}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

export default Input;
