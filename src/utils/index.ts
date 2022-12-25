//提取url中附带的参数
export function getQueryVariable(variable: string) {
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

  //节流
  export const throttle = (cb:()=>any, wait = 3000) =>{
    let previous = 0;
    return (...args:any) => {
      const now = +new Date();
      if( now - previous > wait ){
        previous = now;
        cb.apply(this, args);
      }
    }
  }

  export function formatDateTimeForHMSS(obj:any) {
    let date = new Date(obj);
    let y = date.getFullYear();
    let m = "0" + (date.getMonth() + 1);
    let d = "0" + date.getDate();
    let h = "0" + date.getHours();
    let mm = "0" + date.getMinutes();
    let s:string|number = date.getSeconds();
    if (s.toString().length < 2) {
        s = "0" + s;
    }
    return y + "年" + m.substring(m.length - 2, m.length) + "月" + d.substring(d.length - 2, d.length) + "日 " + h.substring(h.length - 2, h.length) + ":" + mm.substring(mm.length - 2, mm.length) + ":" + s;
}