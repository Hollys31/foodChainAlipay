const app = getApp();
Page({
  data: {
    tabbar: {},
    disconnect: false,
    userInfo: { 'name': 'FA125Gk119', 'tel': '159****3855' }
  },
  onLoad() {
    app.editTabBar();
  },
  sharePage: function () {
    this.onShareAppMessage()
  },
  onShareAppMessage: function () {//分享到好友
    return {
      title: "转发给好友",
      imageUrl: "/resources/images/ewm.png",
      path: "/pages/index/index"
    }
  },
  makePhoneCall: function () {//拨打电话
    my.makePhoneCall({ number: '15949593855' });
  },
  logout: function () {//退出登录
    my.alert({
      title: '提示',
      content: '请确认是否退出登录！',
      confirmColor: "#31c2fc",
      success: function (result) {
        my.showToast({
          type: 'success',
          content: '已退出登录',
          duration: 3000,
        });
      }
    })

  },

});
