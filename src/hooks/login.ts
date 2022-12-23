import axios from "axios";
import { data } from "jquery";
import { useEffect, useState } from "react";

export function useLogin() {
  const [logined, setLogined] = useState<boolean>(true);
  const [uniID, setUniID] = useState<string | null>("");
  //提取url中附带的参数
  function getQueryVariable(variable: string) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return false;
  }
  useEffect(() => {
    if (localStorage.getItem("gn2022-uniID") === null) {
      console.log(getQueryVariable("state"));
      if (getQueryVariable("state")) {
        const currentCode = getQueryVariable("code");
        axios({
          method: "post",
          url: "/feishu/token",
          headers: { "Content-Type": "	application/x-www-form-urlencoded" },
          data: {
            grant_type: "authorization_code",
            client_id: "cli_a328c11558fc100c",
            client_secret: "VqwyrrKA40Kwm45j1lFNDdnza4tm3JOM",
            code: currentCode,
            redirect_uri: "https://goodnight2022.sast.fun/fsre",
          },
        })
          .then((res) => {
            console.log(res);
            localStorage.setItem("gn2022-feishutoken", res.data.access_token);
            axios({
              method: "get",
              url: "/feishu/userinfo",
              headers: {
                Authorization: `Bearer ${res.data.access_token}`,
              },
            })
              .then((res) => {
                console.log(res);
                localStorage.setItem("gn2022-uniID", res.data.union_id);
                setLogined(true);
                setUniID(res.data.union_id);
              })
              .catch((e) => {
                console.log(e);
                localStorage.clear();
                window.location.reload();
              });
          })
          .catch((e) => {
            console.log(e);
            localStorage.clear();
            window.location.reload();
          });
      }
      const urlHash = window.location.hash;
      // console.log(urlHash.split('&')[0].split('=')[1])
      const qqCurrentToken = urlHash.split("&")[0].split("=")[1];
      if (qqCurrentToken !== undefined && qqCurrentToken !== null) {
        axios({
          method: "get",
          url: `/qqopenid?access_token=${qqCurrentToken}&unionid=1&fmt=json`,
        }).then((res) => {
          console.log(res.data);
          setLogined(true);
          setUniID(res.data.unionid);
          localStorage.setItem("gn2022-uniID", res.data.unionid);
          localStorage.setItem("gn2022-qqopenid", res.data.openid);
          localStorage.setItem("gn2022-qqtoken", qqCurrentToken);
        });
      }
    } else {
      const currentID = localStorage.getItem("gn2022-uniID");
      setLogined(true);
      setUniID(currentID);
    }
  }, []);
  return [logined, uniID];
}
