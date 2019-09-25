Page({
  data: {
    certificates: []
  },
  onLoad() { },
  //上传图片
  uploadImg() {
    var _this = this;
    const imgUrls = _this.data.certificates;
    if (imgUrls.length < 3) {
      my.chooseImage({
        success(res) {
          const apFilePaths = res.apFilePaths;
          imgUrls.push(apFilePaths[0]);
          _this.setData({
            certificates: imgUrls
          })
          /*   my.uploadFile({
              url: '',
              filePath: apFilePaths[0],
              name: 'image',
              formData: {
                user: 'test'
              },
              success(result) {
                console.log(result);
                const data = res.data
                // do something
              },
              fail(err){
                console.log(err);
              }
            }) */
        }
      })
    } else {
      my.showToast({
        type: 'fail',
        content: '不能超过三张图片',
        duration: 3000,
      });
    }

  },
  //删除图片
  deleteImg(e) {
    const ind = e.target.dataset.index;
    const imgUrls = this.data.certificates;
    imgUrls.splice(ind, 1);
    this.setData({
      certificates: imgUrls
    })
  },
  //预览图片
  previewImg(e) {
    var certificates = this.data.certificates
    const index = e.target.dataset.index
    my.previewImage({
      current: certificates[index],
      urls: certificates,
      success: function (res) {
        console.log(12)
      },
    })
  }
});
