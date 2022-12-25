import axios from "axios";

export function getPreviousBless() {
    const formData = new FormData()
  let uid = localStorage.getItem("gn2022-uniID")||'';
  formData.append('uid',uid)
  return axios({
    method: "post",
    url: "/apis/getBlessing",
    data: formData
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
