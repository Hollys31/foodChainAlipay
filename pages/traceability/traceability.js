Page({
  data: {
     src: '',
    traceData: [{ 'time': '2018-09-19 15:56:00', 'address': '江西省赣州市章贡区金谭北大道' }, { 'time': '2018-09-19 15:56:00', 'address': '江西省赣州市章贡区金谭北大道' }, { 'time': '2018-09-19 15:56:00', 'address': '江西省赣州市章贡区金谭北大道' }],
    traceMapData: {
      latitude: 25.859150,
      longitude: 114.89753,
      'markers': [{/*  标记点 */
        iconPath: '/assets/images/loca.png',
        id: 0,
        latitude: 25.859150,
        longitude: 114.89753,
        width: 30,
        height: 30,
        callout:{
          content:"国际企业中心"
        }
      }],
    }
  },
  onLoad() {
    
  },
});
