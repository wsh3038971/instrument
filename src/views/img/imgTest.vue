<template>
  <div class="imgView">
     <van-sticky>
      <van-nav-bar
        title="img-vuer"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
    <van-row>
      <van-button round color="orange" size="small" @click="blowUp">放大</van-button>
      <van-button round color="orange" size="small" @click="shrink">缩小</van-button>
    </van-row>
    <div class="content">
        <img v-gallery:group ref="img" :src="item.src" v-for="(item, index) in src" :key="index">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scale: 100,
      content: '',
      src: [
        {
          src: require('../../assets/logo.png')
        },
        {
          src: require('../../assets/logo.png')
        },
        {
          src: require('../../assets/logo.png')
        },
        {
          src: require('../../assets/logo.png')
        },
        {
          src: require('../../assets/logo.png')
        }
      ]
    }
  },
  methods: {
     onClickLeft() {
      this.$router.go(-1);
    },
    // 放大
    blowUp () {
      this.scale += 5;
      this.$refs.img.style.width = parseInt(this.scale) + "%";
    },
    // 缩小
    shrink () {
      if (this.scale == 100) {
        return;
      }
      this.scale -= 5;
      this.$refs.img.style.width = parseInt(this.scale) + "%";
    }
  }
}
</script>

<style lang="less" scoped>
.imgView {
  overflow: hidden;
}
.content {
  overflow: auto;
}
img {
  width: 100%;
}
</style>