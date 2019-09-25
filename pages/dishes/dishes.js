Page({
  data: {
    varietyHidden: true,
    varity: [],
    greens: [{ 'id': '000', 'variety': [{ 'id': '', 'name': '201901190001' }, { 'id': '', 'name': '201901190001' }], 'imgUrl': '/assets/images/eg.jpg', 'name': '胡萝卜炒青椒', 'state': '0', 'material': "胡萝卜、青椒", "update": "2019-01-01  12：30" }, { 'id': '010', 'variety': [{ 'id': '', 'name': '201901190001' }], 'imgUrl': '/assets/images/eg.jpg', 'name': '肉末茄子', 'state': '2', 'material': "胡萝卜、青椒", "update": "2019-01-01  12：30" }]
  },
  onLoad() {},
    onChangeVisual(data){
    this.setData({
        varietyHidden: true,
      })
  },
   onHide() {
    // 页面隐藏
    this.setData({
      varietyHidden: true,
    })
  },
   toMaterialsPage: function (e) {
    const id = e.currentTarget.dataset.id;
    const varity = e.currentTarget.dataset.variety;
    if (varity.length > 1) {
      this.setData({
        varietyHidden: false,
        varity: varity
      })
    } else {
      my.navigateTo({
        url: '/pages/materials/materials?id=' + id,
      })
    }
  },
  toMaterialsPage: function (e) {
    const id = e.currentTarget.dataset.id;
    const varity = e.currentTarget.dataset.variety;
    if (varity.length > 1) {
      this.setData({
        varietyHidden: false,
        varity: varity
      })
    } else {
      my.navigateTo({
        url: '/pages/materials/materials?id=' + id,
      })
    }
  },
});
