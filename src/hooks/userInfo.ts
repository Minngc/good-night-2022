import axios from "axios";
import { useEffect, useState } from "react";

export function useUserInfo() {
  // console.log('useUserinfo init')
  const [nickname, setNickName] = useState("未知访客");
  //   const [figureUrl, setFigureUrl] = useState(
  //     "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"
  //   );
  const [location, setLocation] = useState("火星");
  useEffect(() => {
    // console.log("here1");
    if (
      localStorage.getItem("gn2022-location") === null ||
      localStorage.getItem("gn2022-location") === "undefined"
    ) {
      // axios({
      //   method: "get",
      //   url: "/getlocation",
      //   params:{key: '4KMBZ-75PEX-ETL4Y-T2LMK-N6IK3-SDBBA'}
      // }).then((res) => {
      //   console.log(res)
      //   const returnLocation = res.data;
      //   //   console.log(returnLocation.province.length);
      //   // if(returnLocation.province.length!==0){
      //   //   setLocation(returnLocation.province);
      //   //   localStorage.setItem(
      //   //     "gn2022-location",
      //   //     returnLocation.province
      //   //   );
      //   // }
      //   if(data.message==='Success'&&data.result.ip!=='106.52.215.130'){
      //     setLocation(data.result.ad_info.province);
      //     localStorage.setItem(
      //       "gn2022-location",
      //       data.result.ad_info.province
      //     );
      //   }
      // });
      // jsonp回调函数
      var ipHandle = function (data:any) {
        console.log(data)
      };
      // 提供jsonp服务的url地址
      var url =
        "https://apis.map.qq.com/ws/location/v1/ip?key=4KMBZ-75PEX-ETL4Y-T2LMK-N6IK3-SDBBA&output=jsonp&callback=ipHandle";
      // 创建script标签，设置其属性
      var script = document.createElement("script");
      script.setAttribute("src", url);
      // 把script标签加入head，此时调用开始
      document.getElementsByTagName("head")[0].appendChild(script);
    }
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
          console.log(res);
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
      localStorage.getItem("gn2022-qqtoken") !== null &&
      localStorage.getItem("gn2022-nickname") === null
    ) {
      // console.log("here2");
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
          if (
            res.data.msg ===
            "client request's parameters are invalid, invalid openid"
          ) {
            localStorage.clear();
            if (window.location.href !== window.location.origin)
              window.location.href = window.location.origin;
          }
        })
        .catch((e) => {
          console.log(e);
          localStorage.clear();
          window.location.href = window.location.origin;
        });
    }
    if (
      localStorage.getItem("gn2022-nickname") !== null &&
      localStorage.getItem("gn2022-nickname") !== undefined
    )
      // console.log('setnickname')
      setNickName(localStorage.getItem("gn2022-nickname") || "未知访客");
    if (
      localStorage.getItem("gn2022-location") !== null &&
      localStorage.getItem("gn2022-location") !== undefined
    )
      setLocation(localStorage.getItem("gn2022-location") || "火星");
  }, []);

  return [nickname, location];
}
