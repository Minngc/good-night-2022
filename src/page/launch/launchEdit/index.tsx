import React, { useState, useEffect } from "react";
import Input from "../../../components/input";

const LaunchEdit: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [wish, setWish] = useState<string>("");
  useEffect(() => {
    console.log("rerander");
  });
  return (
    <>
      这里是发布愿望
      <Input defaultValue={name} setter={setName} />
      <Input defaultValue={phoneNumber} setter={setPhoneNumber} />
      <Input defaultValue={wish} setter={setWish} />
    </>
  );
};

export default LaunchEdit;
