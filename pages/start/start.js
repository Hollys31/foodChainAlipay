Page({
  data: {
    isLoginHide: false,
    phone: '',
    disabled: true,
    isFocus: false,
    err: false
  },
  onLoad() { },
  onGetAuthorize() {
    this.setData({
      phone:'15949593855',
      isLoginHide: true
    })
    my.getPhoneNumber({
      success: (res) => {
        let encryptedData = res.response
        console.log(encryptedData);
        if (encryptedData.code == 10000) {
          this.setData({
            phone: encryptedData.mobile,
            isLoginHide: true
          })
        }
      },
      fail: (res) => {
        console.log(res)
        console.log('getPhoneNumber_fail');
      },
    });

  },
  changePhone: function () {//使用其他手机号
    this.setData({
      phone: "",
      disabled: false,
      isFocus: true
    })
  },
  getChangedPhone: function (e) {//获取修改后号码
    this.setData({
      err: false,
      phone: e.detail.value
    })
  },
  handelAllow: function () {//允许使用手机号
    console.log(this.data.phone);
    if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
      this.setData({
        isFocus: true,
        err: true
      })

    } else {
      my.redirectTo({
        url: '/pages/index/index'
      })
    }
  },
  handelRefuse: function () {//拒绝使用手机号
    this.setData({
      isLoginHide: false,
    })
  },
});
