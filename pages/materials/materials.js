
Page({
  data: {
    transSlideDown: true,
    materialInfo: { 'name': '胡萝卜', 'state': '0', 'mainContain': '胡萝卜、青椒', 'start': '2018-08-04 17:53:22', 'end': '2018-08-07 17:53:22' },
    latitude: '',
    markers: [{
      iconPath: "/assets/images/dot.png",
      id: 0,
      latitude: 25.8594745726,
      longitude: 114.8969936371,
      width: 13,
      height: 13
    }, {
      iconPath: "/assets/images/run.png",
      id: 0,
      latitude: 25.8594745784,
      longitude: 115.8969936371,
      width: 36,
      height: 43
    }, {
      iconPath: "/assets/images/dot.png",
      id: 1,
      latitude: 25.8594745726,
      longitude: 116.9188,
      width: 13,
      height: 13
    }],
    controls:[{
      iconPath:'/assets/images/compound.png',
      position:{
        left:'140',
        top:'20',
        width:'111',
        height:'35'
      }
    }]
  },
  onLoad() {
   this.getRoute()
  },
  getRoute() {
    this.mapCtx = my.createMapContext('map');
    this.mapCtx.showRoute({
      searchType: "drive",
      startLat: 25.8594745726,
      startLng: 114.8969936371,
      endLat: 25.8594745726,
      endLng: 116.9188,
      throughPoints: [{ lat: 25.8594745726, lng: 114.8969936371 }, { lat: 25.8594745726, lng: 116.9188 }],
      routeColor: '#ff6b00',
      routeWidth: 4,
      zIndex: 4,
      mode: 0,
    });

  },
  handelTransInfo: function (e) {
    this.setData({
      transSlideDown: !this.data.transSlideDown
    })
  }
});
