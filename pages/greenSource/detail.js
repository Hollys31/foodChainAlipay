Page({
  data: {
     imgLists: [{ 'id': '', 'name': '优农食材链配送中心', 'imgUrl': '/assets/images/indBanner.png' }, { 'id': '', 'name': '优农食材链配送中心', 'imgUrl': '/assets/images/indBanner.png' }],
    info: { 'name': '欧阳晓晓', 'phone': '159****3855', 'address': '江西省赣州市章贡区国际企业中心3栋301', 'descript': '优农食材链配送中心采用系统管理、精准服务的管理体系，进行源头控制，保障产品低成本高品质的特殊优势。优农食材链配送中心自建生态基地，产品丰富多样，保障当季菜品的优质输送及不间断供应。' }
  },
  onLoad() {},
   getAddress: function () {
    my.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        my.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  },
});
