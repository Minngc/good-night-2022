import { createProxyMiddleware } from "http-proxy-middleware"
// const { createProxyMiddleware } = ("http-proxy-middleware");

module.exports = function (app:any) {
  console.log("work");
  app.use(
    createProxyMiddleware("/qqopenid", {
      target: "https://graph.qq.com/oauth2.0/me",
      changeOrigin: true,
      pathRewrite: {
        "^/qqopenid": "",
      },
    }),
    createProxyMiddleware("/qqgetuserinfo", {
      target: "https://graph.qq.com/user/get_user_info",
      changeOrigin: true,
      pathRewrite: {
        "^/qqgetuserinfo": "",
      },
    }),
    createProxyMiddleware("/getlocation", {
      target: "https://apis.map.qq.com/ws/location/v1/ip",
      changeOrigin: true,
      pathRewrite: {
        "^/getlocation": "",
      },
    }),
    createProxyMiddleware("/feishu", {
      target: "https://passport.feishu.cn/suite/passport/oauth",
      changeOrigin: true,
      pathRewrite: {
        "^/feishu": "",
      },
    }),
    createProxyMiddleware("/apis", {
      target: "https://sast.furcode.cn/goodnight2022/api",
      changeOrigin: true,
      pathRewrite: {
        "^/apis": "",
      },
    })
  );
};
