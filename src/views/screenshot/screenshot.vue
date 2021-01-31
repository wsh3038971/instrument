<template>
  <div class="screenshot" ref="imageToFile">
    <van-nav-bar
      title="截图"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <p>安装html2canvas插件</p>
    <p>npm install --save html2canvas</p>
    <van-button @click="screenShot">全屏截图</van-button>
    <img v-gallery:group ref="img" :src="img" v-if="img" class="imgSty"/>
    <img v-gallery:group ref="img" :src="img1" v-if="img1" class="imgSty"/>
    <div class="box" ref="imageToFiles">局部截图</div>
    <van-button @click="screenShots">局部截图</van-button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  components: {
    html2canvas
  },
  data() {
    return {
      img: "",
      img1: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 全屏
    screenShot() {
      this.img = ''
      html2canvas(this.$refs.imageToFile, {
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight,
      }).then((canvas) => {
        // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
        this.img = canvas.toDataURL("image/png");
        console.log(this.img)
      });
    },
    // 局部
    screenShots() {
      this.img1 = ''
      html2canvas(this.$refs.imageToFiles, {
        height: this.$refs.imageToFiles.offsetHeight,
        width: this.$refs.imageToFiles.offsetWidth,
      }).then((canvas) => {
        // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
        this.img1 = canvas.toDataURL("image/png");
        console.log(this.img)
      });
    }
  },
};
</script>

<style>
.imgSty {
    width: 50vw;
    height: 70vw;
}
.box {
    width: 50px;
    height: 70px;
    background-color: yellowgreen;
}
</style>