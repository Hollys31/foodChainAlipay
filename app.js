App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  editTabBar: function () {
  var e = this.globalData.tabbar, a = getCurrentPages(), t = a[a.length - 1], s = t.route;
  console.log(t)
  console.log(s)
  0 != s.indexOf("/") && (s = "/" + s);
  for (var n in e.items) e.items[n].selected = !1, e.items[n].pagePath == s && (e.items[n].selected = !0);
  t.setData({
   tabbar: e
  });
 },
  globalData: {
  userInfo: null,
  //配置tabbar
  tabbar: {
   textColor: "#979795",
   selectedColor: "#33cffa",
   backgroundColor: "#ffffff",
   items: [{
    pagePath: "/pages/index/index",
    name: "首页",
    icon: "/assets/images/index.png",
    activeIcon: "/assets/images/index1.png",
    selected: !0
    },{
    pagePath: "/pages/scanQRCode/scanQRCode",
    name: "",
    icon: "",
    activeIcon: "",
    selected: !1
   },{
    pagePath: "/pages/useCenter/useCenter",
    name: "个人",
    icon: "/assets/images/user.png",
    activeIcon: "/assets/images/user1.png",
    selected: !1
   }],
   position: "bottom"
  }
 }
});
