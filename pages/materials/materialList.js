

import F2 from '../../lib/my-f2';
let chart = null;
Page({
  data: {
    isLive: true,
    humidityData: [{ 'name': '湿度', "value": 90, "date": '10-18' },
    { 'name': '湿度', "value": 95, "date": '10-20' },
    { 'name': '湿度', "value": 98, "date": '10-22' },
    { 'name': '湿度', "value": 100, "date": '10-24' },
    { 'name': '湿度', "value": 110, "date": '10-25' },
    { 'name': '湿度', "value": 120, "date": '10-26' },
    { 'name': '湿度', "value": 119, "date": '10-27' },
    { 'name': '湿度', "value": 103, "date": '10-28' },
    { 'name': '湿度', "value": 110, "date": '10-29' },
    { 'name': '湿度', "value": 120, "date": '10-30' },
    { 'name': '湿度', "value": 119, "date": '10-31' },
    { 'name': '湿度', "value": 103, "date": '11-01' },
    { 'name': '湿度', "value": 100, "date": '11-02' },
    ],
    temperatureData: [{ 'name': '温度', "value": 90, "date": '10-18' },
    { 'name': '温度', "value": 95, "date": '10-20' },
    { 'name': '温度', "value": 98, "date": '10-22' },
    { 'name': '温度', "value": 100, "date": '10-24' },
    { 'name': '温度', "value": 110, "date": '10-25' },
    { 'name': '温度', "value": 120, "date": '10-26' },
    { 'name': '温度', "value": 119, "date": '10-27' },
    { 'name': '温度', "value": 103, "date": '10-28' },
    { 'name': '温度', "value": 100, "date": '10-29' },
    { 'name': '温度', "value": 100, "date": '10-30' },
    { 'name': '温度', "value": 119, "date": '10-31' },
    { 'name': '温度', "value": 103, "date": '11-01' },
    { 'name': '温度', "value": 100, "date": '11-02' },
    ],
    firstSortData: [{
      'id': '11',
      'name': '胡萝卜'
    }, {
      'id': '12',
      'name': '青椒'
    }, {
      'id': '13',
      'name': '大蒜'
    }, {
      'id': '14',
      'name': '生姜'
    }, {
      'id': '15',
      'name': '大葱'
    }, {
      'id': '11',
      'name': '胡萝卜'
    }, {
      'id': '12',
      'name': '青椒'
    }, {
      'id': '13',
      'name': '大蒜'
    }, {
      'id': '14',
      'name': '生姜'
    }, {
      'id': '15',
      'name': '大葱'
    }],
    secondSortData: [{
      'id': '1',
      'value': '1',
      'name': '农事'
    }, {
      'id': '2',
      'value': '2',
      'name': '加工'
    }, {
      'id': '3',
      'value': '3',
      'name': '运输'
    }, {
      'id': '4',
      'value': '4',
      'name': '环境'
    }, {
      'id': '5',
      'value': '5',
      'name': '视频'
    }],
    farmingData: [{
      'id': '',
      'imgUrl': '/assets/images/headImage.jpg',
      'name': '除草',
      'time': '2018-09-17 10:24:00',
      'principal': '欧阳晓晓'
    }, {
      'id': '',
      'imgUrl': '/assets/images/headImage.jpg',
      'name': '除草',
      'time': '2018-09-17 10:24:00',
      'principal': '欧阳晓晓'
    }, {
      'id': '',
      'imgUrl': '/assets/images/headImage.jpg',
      'name': '除草',
      'time': '2018-09-17 10:24:00',
      'principal': '欧阳晓晓'
    }],
    machiningData: [{
      'id': '',
      'imgUrl': '/assets/images/headImage.jpg',
      'name': '除草',
      'time': '2018-09-17 10:24:00',
      'principal': '欧阳晓晓'
    }, {
      'id': '',
      'imgUrl': '/assets/images/headImage.jpg',
      'name': '除草',
      'time': '2018-09-17 10:24:00',
      'principal': '欧阳晓晓'
    }, {
      'id': '',
      'imgUrl': '/assets/images/headImage.jpg',
      'name': '除草',
      'time': '2018-09-17 10:24:00',
      'principal': '欧阳晓晓'
    }],
    transportData: [{
      'id': '1',
      'imgUrl': '/assets/images/headImage.jpg',
      'startAddress': '一号配送点',
      'endAddress': '赣州市第一小学',
      'hour': '24分钟',
      'worker': '欧阳晓晓'
    }, {
      'id': '2',
      'imgUrl': '/assets/images/headImage.jpg',
      'startAddress': '一号配送点',
      'endAddress': '赣州市第一小学',
      'hour': '24分钟',
      'worker': '欧阳晓晓'
    }],
    environmentData: {
      'current': 0,
      'humidity': '50',
      'temperature': '22'
    },
    videoObj: {
      isHidden: true,
      liveData: [{
        'id': '1',
        'name': '胡萝卜监控01',
        'subhead': '生产过程',
        'url': '',
        'address': '江西省赣州市'
      }, {
        'id': '2',
        'subhead': '生产过程',
        'name': '胡萝卜监控01',
        'url': '',
        'address': '江西省赣州市'
      }],
      videoData: [{
        'id': '1',
        'name': '胡萝卜监控01',
        'subhead': '生产过程',
        'url': '',
        'address': '江西省赣州市'
      }, {
        'id': '2',
        'subhead': '生产过程',
        'name': '胡萝卜监控01',
        'url': '',
        'address': '江西省赣州市'
      }],
    },
    curFirstInx: 0,
    currSecondInx: 0,
    isHidden: true,
    traceMapData: {
      isMapHidden: true,
      longitude: '113.324520',
      latitude: '23.099994',
      'markers': [{ /*  标记点 */
        iconPath: '/assets/images/loca.png',
        id: 0,
        latitude: 25.8594745726,
        longitude: 114.8969936371,
        width: 20,
        height: 20,
      }],
    },
  },
  onLoad() {
    this.videoContext = my.createVideoContext('myVideo');
  },
  chooseFirstSort: function (e) { //所有一级分类
    const ind = e.target.dataset.index;
    this.setData({
      curFirstInx: ind,
      isHidden: !this.data.isHidden,
      currSecondInx: 0,
    })
  },
  handelMoreSort: function (e) { /* 所有一级分类显示切换 */
    this.setData({
      isHidden: !this.data.isHidden
    })
  },
  selectItem: function (e) { //一级分类选中
    const ind = e.currentTarget.dataset.index;
    const id = e.currentTarget.dataset.id;
    this.setData({
      curFirstInx: ind,
      currSecondInx: 0
    })
  },
  
  /*    
    环境 
    */
  prevImg: function (e) {
    var current = 'environmentData.current';
    const envCurrent = this.data.environmentData.current > 0 ? 0 : 1;
    this.setData({
      [current]: envCurrent,
    })
    if (this.data.environmentData.current == 0) {
      this.humiditySelectorQuery('humidity');
    } else {
      this.humiditySelectorQuery('temperature');
    }
  },
  nextImg: function (e) {
    var current = 'environmentData.current';
    const envCurrent = this.data.environmentData.current < 1 ? 1 : 0;
    this.setData({
      [current]: envCurrent,
    })
    if (this.data.environmentData.current == 0) {
      this.humiditySelectorQuery('humidity');
    } else {
      this.humiditySelectorQuery('temperature');
    }
  },
  onSlideChangeEnd: function (e) {
    const curr = 'environmentData.current';
    this.setData({
      [curr]: e.detail.current
    })
    if (this.data.environmentData.current == 0) {
      this.humiditySelectorQuery('humidity');
    } else {
      this.humiditySelectorQuery('temperature');
    }
  },
  humiditySelectorQuery: function (id) {
    const _this = this;
    let currData = [];
    my.createSelectorQuery()
      .select('#' + id)
      .boundingClientRect()
      .exec((res) => {
        // 获取分辨率
        const pixelRatio = my.getSystemInfoSync().pixelRatio;
        // 获取画布实际宽高
        const canvasWidth = res[0].width;
        const canvasHeight = res[0].height;
        this.setData({
          width: canvasWidth * pixelRatio,
          height: canvasHeight * pixelRatio
        });
        const myCtx = my.createCanvasContext(id);
        myCtx.scale(1, 1); // 必要！按照设置的分辨率进行放大
        const canvas = new F2.Renderer(myCtx);
        this.canvas = canvas;
        if (id == 'humidity') {
          currData = this.data.humidityData;
        } else {
          currData = this.data.temperatureData
        }
        _this.drawChart(canvas, res[0].width, res[0].height, currData);
      });
  },
  touchStart(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchstart', [e]);
    }
  },
  touchMove(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchmove', [e]);
    }
  },
  touchEnd(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchend', [e]);
    }
  },
  drawChart: function (canvas, width, height, dataArray) {
    const data = dataArray;
    const chart = new F2.Chart({
      el: canvas,
      width,
      height
    });
    chart.source(data);
    chart.scale('date', {
      tickCount: 5
    });
    chart.axis('date', {
      label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        }
        if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    });
    chart.axis('value', {
      label(text) {
        return {
          text: text
        };
      }
    });
    // tooltip 与图例结合
    chart.tooltip({
      showCrosshairs: true,
      custom: true, // 自定义 tooltip 内容框
      onChange(obj) {
        console.info(obj);
        const legend = chart.get('legendController').legends.top[0];
        const tooltipItems = obj.items;
        const legendItems = legend.items;
        const map = {};
        legendItems.map(item => {
          map[item.name] = Object.assign({}, item);
        });
        tooltipItems.map(item => {
          const { name, value } = item;
          if (map[name]) {
            map[name].value = value;
          }
        });
        legend.setItems(Object.values(map));
      },
      onHide(e) {
        const legend = chart.get('legendController').legends.top[0];
        legend.setItems(chart.getLegendItems().country);
      }
    });
    chart.area().position('date*value').color('name', '#47b6ff').shape('smooth');
    chart.line().position('date*value').color('#47b6ff').shape('smooth');
    chart.render();
    return chart;
  },
  /* 
  视频
   */
  changeVideoType: function () { //直播、视频切换
    this.setData({
      isLive: false
    })

  },
  changeLiveType: function () {
    this.setData({
      isLive: true
    })
  },
  
  getCurrentMap: function () { //点击获取地图
    var mapHidden = 'traceMapData.isMapHidden';
    this.setData({
      [mapHidden]: !this.data.traceMapData.isMapHidden
    })
  },
  getCurrentvideo: function () { //点击获取视频 播放
    var _this = this;
    var isHidden = 'videoObj.isHidden';
    this.setData({
      [isHidden]: !this.data.videoObj.isHidden
    })
    my.getNetworkType({ //wifi下自动播放视频
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
        if (networkType == 'wifi') {
          _this.videoContext.play();
        }
      }
    })

  },
  closeVideoModel: function () { //关闭视频
    this.videoContext.pause();
    var isHidden = 'videoObj.isHidden';
    this.setData({
      [isHidden]: !this.data.videoObj.isHidden
    })
  },
  getListType: function (e) { //原材料类型
    const ind = e.currentTarget.dataset.index;
    const id = e.currentTarget.dataset.id;
    if (ind == 3) {
      this.humiditySelectorQuery('humidity');
    }
    this.setData({
      currSecondInx: ind,
      type: e.target.dataset.index + 1
    });
  },
});
