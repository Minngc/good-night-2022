import { useState } from "react";
import { getPreviousBless } from "../api/launch";

export interface GetBlessModel {
  data: null | Data;
  /**
   * 是否发送过
   */
  isSent: boolean;
}

export interface Data {
  /**
   * 祝福内容
   */
  blessing: string;
  /**
   * 邮箱
   */
  mail: string;
  /**
   * 手机号
   */
  phone: string;
  /**
   * 用户昵称
   */
  username: string;
}

export function useGetBless() {
  const [isSent,setIsSent] = useState(false)
  const [data,setData] = useState<GetBlessModel["data"]>(null)
  getPreviousBless().then((res:{data:GetBlessModel}) => {
    if(res.data.isSent&&res.data!==null){
        setIsSent(res.data.isSent)
        setData(res.data.data)
    }
  });
}
