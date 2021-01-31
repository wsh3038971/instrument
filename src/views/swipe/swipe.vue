<template>
  <div>
    <van-sticky>
      <van-nav-bar
        title="轮播图(带缩略图)"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
    <van-swipe
      ref="swipe"
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      @change="imgChange"
    >
      <van-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.path" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="thumbs">
      <img
        :src="item.path"
        :style="
          imgIndex == index
            ? 'border: 2px solid #39AED1'
            : 'border: 2px solid #ccc'
        "
        v-for="(item, index) in imgList"
        :key="index"
        @click="imgClick(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          path: require("../../assets/images/1.jpg"),
        },
        {
          path: require("../../assets/images/2.jpg"),
        },
        {
          path: require("../../assets/images/3.jpg"),
        },
        {
          path: require("../../assets/images/4.jpg"),
        },
        {
          path: require("../../assets/images/5.jpg"),
        },
      ],
      imgIndex: 0,
    };
  },
  methods: {
    imgClick(index) {
      this.$refs.swipe.swipeTo(index);
    },
    imgChange(index) {
      this.imgIndex = index;
    },
    onClickLeft() {
        this.$router.go(-1)
    }
  },
};
</script>

<style lang="less">
.my-swipe {
  width: 100%;
  height: 55vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.thumbs {
  display: flex;
  overflow-x: auto;
  padding: 4px;
  img {
    margin-right: 2px;
    border: 2px solid #ccc;
    width: 10vw;
    height: 12vw;
  }
}
</style>