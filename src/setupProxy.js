const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
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
      target: "http://whois.pconline.com.cn/ip.jsp",
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
    })
  );
};
