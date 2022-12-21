import axios from "axios";
import { useEffect, useState } from "react";

export function useUserInfo() {
  const [nickname, setNickName] = useState("未知访客");
  //   const [figureUrl, setFigureUrl] = useState(
  //     "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"
  //   );
  const [location, setLocation] = useState("火星");
  useEffect(() => {
    axios({
      method: "get",
      url: "/getlocation",
    }).then((res) => {
      const returnLocation = res.data;
      //   console.log(returnLocation.toString().substring(2,4));
      setLocation(returnLocation.toString().substring(2, 4));
      localStorage.setItem(
        "gn2022-location",
        returnLocation.toString().substring(2, 4)
      );
    });
    if (
      localStorage.getItem("gn2022-feishutoken") !== null &&
      localStorage.getItem("gn2022-nickname") === null
    ) {
      axios({
        method: "get",
        url: "/feishu/userinfo",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("gn2022-feishutoken")}`,
        },
      })
        .then((res) => {
          localStorage.removeItem("gn2022-qqopenid");
          localStorage.removeItem("gn2022-qqtoken");
          // console.log(res.data.name);
          setNickName(res.data.name);
          localStorage.setItem("gn2022-nickname", res.data.name);
          if (window.location.href !== "https://goodnight2022.sast.fun/home")
            window.location.href = "https://goodnight2022.sast.fun/home";
        })
        .catch((e) => {
          console.log(e);
          localStorage.clear();
          window.location.href = "https://goodnight2022.sast.fun/";
        });
    }
    if (
      localStorage.getItem("gn2022-qqopenid") !== null &&
      localStorage.getItem("gn2022-qqtoken") !== null &&
      localStorage.getItem("gn2022-nickname") === null
    ) {
      //   console.log(
      //     localStorage.getItem("gn2022-qqopenid"),
      //     localStorage.getItem("gn2022-qqtoken")
      //   );
      axios({
        method: "get",
        url: `/qqgetuserinfo?access_token=${localStorage.getItem(
          "gn2022-qqtoken"
        )}&oauth_consumer_key=102035754&openid=${localStorage.getItem(
          "gn2022-qqopenid"
        )}`,
      })
        .then((res) => {
          console.log(res);
          localStorage.removeItem("gn2022-feishutoken");
          const username = res.data.nickname;
          const userlocation = res.data.province;

          if (username !== "" && username !== undefined) {
            setNickName(username);
            localStorage.setItem("gn2022-nickname", username);
          }
          if (userlocation !== "" && userlocation !== undefined) {
            setLocation(userlocation);
            localStorage.setItem("gn2022-location", userlocation);
          }
        })
        .catch((e) => {
          console.log(e);
          localStorage.clear();
          window.location.href = "https://goodnight2022.sast.fun/";
        });
    }
    if (localStorage.getItem("gn2022-nickname") !== null&&localStorage.getItem("gn2022-nickname") !== undefined)
      setNickName(localStorage.getItem("gn2022-nickname") || "未知访客");
    if (localStorage.getItem("gn2022-location") !== null&&localStorage.getItem("gn2022-location") !== undefined)
      setLocation(localStorage.getItem("gn2022-location") || "火星");
  }, []);

  return [nickname, location];
}
