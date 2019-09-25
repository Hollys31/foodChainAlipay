const app = getApp();
Page({
  data: {
    tabbar: {},
    isHidden: true,
    noDataNow: false,
    noMore: true,
    disconnect: false,
    tabbar: {},
    varietyHidden: true,
    varity: [],
    greens: [{ 'id': '000', 'variety': [{ 'id': '', 'name': '201901190001' }, { 'id': '', 'name': '201901190001' }], 'imgUrl': '/assets/images/eg.jpg', 'name': '胡萝卜炒青椒', 'state': '0', 'material': "胡萝卜、青椒", "update": "2019-01-01  12：30" }, { 'id': '010', 'variety': [{ 'id': '', 'name': '201901190001' }], 'imgUrl': '/assets/images/eg.jpg', 'name': '肉末茄子', 'state': '2', 'material': "肉末、茄子", "update": "2019-01-01  12：30" }, { 'id': '010', 'variety': [{ 'id': '', 'name': '201901190001' }], 'imgUrl': '/assets/images/eg.jpg', 'name': '肉末茄子2', 'state': '2', 'material': "肉末、茄子", "update": "2019-01-01  12：30" }],
    msgList: ['多吃蔬菜，多运动。多吃蔬菜，多运动。', '重要通知-恍恍惚惚红花会'],
    sourceLis: [{ 'id': '1', 'name': '优农配送中心', 'address': '赣州市国际企业中心', 'imgUrl': '/assets/images/eg.jpg' }, { 'id': '1', 'name': '优农配送中心', 'address': '赣州市国际企业中心,赣州市国际企业中心,赣州市国际企业中心', 'imgUrl': '/assets/images/eg.jpg' }]

  },
  onLoad(query) {
    app.editTabBar();
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
    this.setData({
      varietyHidden: true,
    })
  },
  onChangeVisual(data) {
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
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
