self.__BUILD_MANIFEST = function (
    s, c, e, t, a, i, u, r, n, f, d, o
  ) {
    return {
      __rewrites: {
        afterFiles: [
          { has: r, source: "/api/upload", destination: r },
          { has: r, source: "/api/:path*", destination: r },
          { has: r, source: "/static/:path*", destination: r }
        ],
        beforeFiles: [],
        fallback: []
      },
      "/": [s, c, e, t, "static/css/2699940700237c24.css", "static/chunks/pages/index-b59446fe49c18d62.js"],
      "/404": [s, u, "static/chunks/pages/404-a5f677878fd852e3.js"],
      "/_error": ["static/chunks/pages/_error-35026f8ede40bbe7.js"],
      "/account": [s, c, e, t, a, i, "static/chunks/pages/account-f2b3307741165e93.js"],
      "/account/settings": [s, c, e, t, a, i, "static/chunks/pages/account/settings-9020af4b63d73e6f.js"],
      "/buy": [s, c, e, t, "static/css/bfbf709f22ff7014.css", "static/chunks/pages/buy-2a4068b0cc880710.js"],
      "/customize": [s, c, e, t, a, i, "static/chunks/pages/customize-bf86c0bd82dcba61.js"],
      "/imagehost": [s, c, e, t, a, i, "static/chunks/pages/imagehost-e256c68792ee2a8c.js"],
      "/imagehost/gallery": [s, c, e, t, a, i, "static/chunks/pages/imagehost/gallery-60f26aa7c502dc90.js"],
      "/invite": ["static/chunks/pages/invite-19a2fa87937f2b73.js"],
      "/links": [s, c, e, t, a, i, "static/chunks/pages/links-09637dd6b1e9085b.js"],
      "/login": [s, "static/css/a2b6c1b242adcf1b.css", "static/chunks/pages/login-30a2178724d4207c.js"],
      "/logout": ["static/chunks/pages/logout-9719b8c6d13d1440.js"],
      "/password/success": [s, u, "static/chunks/pages/password/success-f1a2421bed705a4b.js"],
      "/premium": [s, c, e, t, a, i, "static/chunks/pages/premium-7cc43cda74471fad.js"],
      "/premium/layout": [s, c, e, t, a, i, "static/chunks/pages/premium/layout-74643f8360f4d871.js"],
      "/privacy": [u, "static/chunks/pages/privacy-131e063859c4951c.js"],
      "/register": [s, c, e, f, "static/chunks/3472-addba4e0a62131b1.js", d, o, "static/css/d634c655b6e554d4.css", "static/chunks/pages/register-e68d0977ceda3dcd.js"],
      "/report/success": [s, u, "static/chunks/pages/report/success-cdfba75b65b31453.js"],
      "/report/[report]": [s, c, e, t, f, n, d, "static/chunks/5089-5ae351f1174ad3fb.js", "static/css/e156eaf934f1932d.css", "static/chunks/pages/report/[report]-987f23b243aec7a7.js"],
      "/reset": [o, "static/css/09203f225cc79e9a.css", "static/chunks/pages/reset-8df5b399b476394d.js"],
      "/reset/[reset]": [s, n, "static/css/9deec21a3fef49d5.css", "static/chunks/pages/reset/[reset]-170a2f6e53167061.js"],
      "/sent": [s, u, "static/chunks/pages/sent-ed7a83eccf93d803.js"],
      "/tos": [u, "static/chunks/pages/tos-a62e4026047099ff.js"],
      "/verify/[verify]": [s, n, u, "static/chunks/pages/verify/[verify]-fa0419eeba600aed.js"],
      "/[username]": [s, c, "static/chunks/9338-8b122a9472271a69.js", "static/chunks/9409-edd252f33e75977f.js", "static/chunks/4921-8a6484ae2e8a4b75.js", "static/css/a7f615c5cc4872ab.css", "static/chunks/pages/[username]-a1b21ef05df7433f.js"],
      sortedPages: [
        "/",
        "/404",
        "/_app",
        "/_error",
        "/account",
        "/account/settings",
        "/buy",
        "/customize",
        "/imagehost",
        "/imagehost/gallery",
        "/invite",
        "/links",
        "/login",
        "/logout",
        "/password/success",
        "/premium",
        "/premium/layout",
        "/privacy",
        "/register",
        "/report/success",
        "/report/[report]",
        "/reset",
        "/reset/[reset]",
        "/sent",
        "/tos",
        "/verify/[verify]",
        "/[username]"
      ]
    };
  }("static/chunks/1664-8fd132e3856cf862.js", "static/chunks/8104-69c6cb628c1b3eec.js", "static/chunks/1508-ea9815997cb0d382.js", "static/chunks/8759-ed030ebb3bd2f7d6.js", "static/chunks/6926-26e96234daf5fe1f.js", "static/css/d018927ad6f0a39d.css", "static/css/394f3e59c81a6b30.css", void 0, "static/chunks/6154-850b8ed64fbea8ab.js", "static/chunks/1602-aa40dd1696235db2.js", "static/chunks/1983-ddd0faee3676c2ce.js", "static/chunks/2048-d087e800c3af5acd.js");
  
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
  