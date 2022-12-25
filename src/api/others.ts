import axios from "axios";

export function getRandomBless() {
  const formData = new FormData();
  let uid = localStorage.getItem("gn2022-uniID") || "";
  formData.append("uid", uid);
  return axios({
    method: "post",
    url: "/apis/getRandomBlessing",
    data: formData,
  });
}

export function likeBless(id: number | undefined) {
  const formData = new FormData();
  let uid = localStorage.getItem("gn2022-uniID") || "";
  formData.append("uid", uid);
  return axios({
    method: "post",
    url: "/apis/likeBlessing",
    data: formData,
    params: { bid: id },
  });
}
