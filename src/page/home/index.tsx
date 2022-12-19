import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Link to="/launch">发送你的愿望</Link>
      <Link to="/others">看看其他人</Link>
      <Link to="/about">关于</Link>
    </>
  );
};

export default Home;
