<template>
  <div class="home">
    <van-row>
      <van-button size="small" color="orange" round @click="goPdf">pdf插件测试</van-button>
      <van-button size="small" color="orange" round @click="goImg">移动端图片浏览插件(img-vuer)</van-button>
      <van-button size="small" color="orange" round @click="goPreview">移动端图片浏览插件(vue-preview)</van-button>
      <van-button size="small" color="pink" round @click="goMap">百度地图(vue-preview)</van-button>
      <van-button size="small" color="red" round @click="goPdfJs">pdf插件测试(pdfjs)</van-button>
      <van-button size="small" color="red" round @click="goDrag">元素拖拽</van-button>
      <van-button size="small" color="red" round @click="goDrag1">元素拖拽换位</van-button>
      <van-button size="small" color="green" round @click="goTransition">过渡动画</van-button>
      <van-button size="small" color="green" round @click="goFrom">自提单</van-button>
      <van-button size="small" color="blue" round @click="goScreenshot">canvas截图</van-button>
      <van-button size="small" color="blue" round @click="goVideo">屏幕录制</van-button>
      <van-button size="small" color="yellow" round @click="textRoll">文本滚动</van-button>
      <van-button size="small" color="#008B8B" round @click="goSwipe">轮播图</van-button>
      <van-button size="small" color="#008B8B" round @click="goMusicPlayer">音乐播放器</van-button>
      <button @click="countPlus">加1</button>
      <p>{{count}}</p>
    </van-row>
    <van-row>
      <img class="blur" src="../assets/logo.png" alt />
    </van-row>

    <div>
      <vue-qr
        :text="downloadData.url"
        :margin="10"
        colorDark="#000"
        colorLight="#fff"
        :dotScale="1"
        :size="200"
      ></vue-qr>
    </div>
  </div>
</template>

<script>
// import throttle from 'lodash/throttle'
// import _ from 'lodash'
import vueQr from "vue-qr";
export default {
  components: {
    vueQr,
  },
  name: "Home",
  data() {
    return {
      count: 0,
      flag: 0,
      downloadData: {
        url: "https://segmentfault.com/hottest", //需要转化成二维码的网址
      },
    };
  },
  methods: {
    // 函数防抖
    fnThrottle(method, delay, duration) {
      var that = this;
      var timer = this.timer;
      var begin = new Date().getTime();
      return function () {
        var context = that;
        var args = arguments;
        var current = new Date().getTime();
        clearTimeout(timer);
        if (current - begin >= duration) {
          method.apply(context, args);
          begin = current;
        } else {
          console.log(delay);
          that.timer = setTimeout(function () {
            method.apply(context, args);
          }, delay);
        }
      };
    },
    // 防抖
    countPlus() {
      // let that = this
      this.fnThrottle(this.countPlus1, 500, 500)();
    },
    goMusicPlayer() {
      this.$router.push('/musicPlayer')
    },
    goSwipe() {
      this.$router.push('/swipe')
    },
    countPlus1() {
      this.count++;
    },
    goTransition() {
      this.$router.push("/transition");
    },
    goDrag1() {
      this.$router.push("/drag1");
    },
    goDrag() {
      this.$router.push("/drag");
    },
    goPdf() {
      this.$router.push("/pdfTest");
    },
    goImg() {
      this.$router.push("/imgTest");
    },
    goPreview() {
      this.$router.push("/imgPreview");
    },
    goMap() {
      this.$router.push("/bdMap");
    },
    goPdfJs() {
      this.$router.push("/goPdfJs");
    },
    goFrom() {
      this.$router.push("/goFrom");
    },
    goScreenshot() {
      this.$router.push('/screenshot')
    },
    goVideo() {
      this.$router.push('/video')
    },
    textRoll() {
      this.$router.push('/textRoll')
    }
  },
};
</script>

<style lang="less" scoped>
.blur {
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
}
td {
  padding: 10px;
}
th {
  padding: 10px;
}
</style>
