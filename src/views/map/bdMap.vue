<template>
  <div>
    <div>详细地址(百度地图):{{ location}}</div>
    <div>详细地址(腾讯地图):{{ qqMap}}</div>
    <div>详细地址(高德地图):{{ district}}</div>
    <div id="map-container" style="width:1%;height:1%;opacity: 0"></div>
  </div>
</template>

<script>
import loadBMap from "../../components/bdMap.js";
import { location } from "../../components/gdMap.js";
export default {
  name: "imap",
  data() {
    return {
      district: '',
      qqMap: '',
      location: '',
      LocationCity: "正在定位...",
      success: false,
      form: {
        address: "", //详细地址
        addrPoint: {
          //详细地址经纬度
          lng: 0,
          lat: 0
        }
      },
      map: "", //地图实例
      mk: "", //Marker实例
      // geolocation: new qq.maps.Geolocation("OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77", "myapp"),
      // options: {timeout: 8000}
    };
  },
  components: {},
  mounted() {
    // await loadBMap("Bap8halDs32KcDGWZbskSr84x0diaF9l");
    // await this.initMap();
    //  let that = this;
    // setTimeout(() => {
    //   loadBMap("Bap8halDs32KcDGWZbskSr84x0diaF9l");
    //   that.initMap();
    // }, 2000);
    // geolocation.getLocation(this.showPosition,this.showErr,this.options)
    // this.getLocation()
    this.gd()
  },
  methods: {
    gd () {
       var map, geolocation;
		    //加载地图，调用浏览器定位服务
		    map = new AMap.Map('container', {
		        resizeEnable: true
		    });
		    map.plugin('AMap.Geolocation', function() {
		        geolocation = new AMap.Geolocation({
		            enableHighAccuracy: true,//是否使用高精度定位，默认:true
		            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
		            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
		            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
		            buttonPosition:'RB'
		        });
		        map.addControl(geolocation);
		        geolocation.getCurrentPosition();
		        geolocation.getCityInfo(function(status,result){
                                 //此处result为返回的位置信息json对象，解析使用即可
              console.log('状态', status)
		        	console.log(result);
		        })
		    });
    },
    // 高德地图定位
    // getLocation() {
    //   let _that = this;
    //   let geolocation = location.initMap("map-container"); //定位
    //   AMap.event.addListener(geolocation, "complete", result => {
    //     console.log(111, result)
    //     _that.lat = result.position.lat;
    //     _that.lng = result.position.lng;
    //     _that.province = result.addressComponent.province;
    //     _that.city = result.addressComponent.city;
    //     _that.district = result.addressComponent.district;
    //   });
    // },
    // 腾讯地图定位
    // showPosition(position) {
    //   console.log('qq', position)
    //   this.qqMap = position.city+position.addr
    // },
    // showErr() {
    //   this.qqMap = "定位失败";
    // },
    // 百度地图定位
    // getAddrByPoint(point) {
    //   var that = this;
    //   var geco = new BMap.Geocoder();
    //   geco.getLocation(point, function(res) {
    //     console.log(111, res); //内容见下图
    //     // that.mk.setPosition(point) //重新设置标注的地理坐标
    //     // that.map.panTo(point)  //将地图的中心点更改为给定的点
    //     // that.form.address = res.address;  //记录该点的详细地址信息
    //     that.location = res.address;
    //     // that.form.addrPoint = point;  //记录当前坐标点
    //   });
    // },
    // initMap() {
    //   var that = this;
    //   this.map = new BMap.Map("map-container", { enableMapClick: false }); //新建地图实例，enableMapClick:false ：禁用地图默认点击弹框
    //   var point = new BMap.Point(113.30765, 25.12005);
    //   this.map.centerAndZoom(point, 19);
    //   this.geolocation();
    // },
    // geolocation() {
    //   var that = this;
    //   var geolocation = new BMap.Geolocation();
    //   geolocation.getCurrentPosition(
    //     function(res) {
    //       if (this.getStatus() == BMAP_STATUS_SUCCESS) {
    //         console.log("成功");
    //         that.getAddrByPoint(res.point); //当成功时，调用逆地址解析函数
    //       } else {
    //         console.log(res)
    //         alert("定位失败" + "failed" + this.getStatus()); //失败时，弹出失败状态码
    //         this.locationPlaceholder = "定位失败,请手动输入位置";
    //       }
    //     },
    //     { enableHighAccuracy: true }
    //   ); //enableHighAccuracy：是否要求浏览器获取最佳效果，默认为false
    // }
  }
};
</script>

<style>
</style>