Page({
  data: {},
  onLoad() { },
  handelScan: function () {
    var _this = this;
    my.scan({
      type: 'qr',
      success: (res) => {
        my.alert({ title: res.code });
      },
      fail:()=>{
         my.alert({ title: "failed" });
      }
    });
  },
});
