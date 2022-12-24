import axios from "axios";

export function getPreviousBless() {
  let uid = localStorage.getItem("gn2022-uniID");
  return axios({
    method: "post",
    url: "/apis/getBlessing",
    data: { uid: uid },
  });
}

export function sentBless(
  username: string,
  phone: string,
  mail: string,
  blessing: string,
  location: string
) {
  let uid = localStorage.getItem("gn2022-uniID");
  return axios({
    method: "post",
    url: "/apis/sendBlessing",
    data: {
      uid: uid,
      username: username,
      phone: phone,
      mail: mail,
      blessing: blessing,
      location: location,
    },
  });
}
