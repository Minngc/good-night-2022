import React, { useEffect } from "react";
// import useHistory from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";

const Launch: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // 如果存储发送状态的话此处可用三目选择具体跳转至何处
    navigate("./edit",);
  }, [navigate]);
  return (
    <>123
      <Outlet />
    </>
  );
};

export default Launch;
