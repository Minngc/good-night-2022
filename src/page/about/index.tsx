import React from "react";
import homeLogo from "../../assets/image/home-logo.png";
import "./index.scss";
import BackIcon from "../../components/back";

const About: React.FC = () => {
  return (
    <>
      <div className="logo-body">
        <img src={homeLogo} alt="logo" className="home-logo"></img>
      </div>
      <div className="about-container">
        <span style={{ fontSize: "6.6vw" }}>&nbsp;&nbsp;&nbsp;&nbsp;Hi,</span>{" "}
        各位
        SASTer，也许你是刚刚加入我们的新同学，或者是老成员，2022年对于大家来说都是不平凡的一年。
        在过去的一个学期里，我们都经历了许多风雨，在线上完成招新工作，讲师们坚持在线上授课，举办了
        各项科技节赛事……我们面对疫情影响给活动带来的阻碍，迎难而上，最后都获得了成功。在今年年初我
        们使用了101活动室的白板记录下了大家今年的新年愿望，但是今年大家都在异地，所以特地举办“晚安
        2022”活动，你可以在这里写下你对2023年的愿望又或者是对2022年的自己的小总结，以及想对其它科
        协人说的话，你写下的话将在12月31日的夜晚随机发送到另外一位参与本活动的科协人手机上。
        2022年的列车即将到达终点，让我们把所有的焦虑都留在昨天，拥抱充满希望的2023年，写下一段新年
        祝愿，在把温暖传递给其它科协人～
      </div>
      <div className="about-back-logo">
        <BackIcon to="/home" />
      </div>
    </>
  );
};

export default About;
