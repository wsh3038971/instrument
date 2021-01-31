<template>
  <div class="textRoll">
    <van-sticky>
      <van-nav-bar
        title="溢出滚动"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
    <div>
      <div class="topStyle">
        <div ref="outDiv" class="outDiv">
          <div class="scrollP">
            <span class="topTiele" ref="spanWid"
              ><span
                style="display: inline-block; width: 40px"
                v-show="isShowIntval"
              ></span
              >{{ roomTitle }}</span
            >
            <span class="topTiele" ref="spanWid1" v-show="isShowIntval"
              ><span style="display: inline-block; width: 40px"></span
              >{{ roomTitle }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomTitle: "nihnihanihanihanihaa",
      isShowIntval: false,
    };
  },
  mounted() {
    let _this = this; //赋值vue的this
    _this.marqueeFun(); // 直接调用
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    marqueeFun() {
      clearInterval(this.setIntval);
      this.setIntval = null;
      // this.$refs.spanWid.offsetWidth 只是获取当前元素宽度， this.$refs是vue里面dom元素写法，可修改
      if (this.$refs.spanWid.offsetWidth >= this.$refs.outDiv.offsetWidth) {
        this.isShowIntval = true;
        this.setIntval = setInterval(() => {
          this.marquee();
        }, 60);
      } else {
        this.isShowIntval = false;
        if (this.setIntval) {
          clearInterval(this.setIntval);
          this.setIntval = null;
        }
      }
    },
    marquee() {
      if (this.$refs.outDiv) {
        if (
          this.$refs.outDiv.scrollLeft - this.$refs.spanWid1.offsetWidth >=
          0
        ) {
          this.$refs.outDiv.scrollLeft -= this.$refs.spanWid.offsetWidth;
        } else {
          this.$refs.outDiv.scrollLeft++;
        }
      }
    },
  },
};
</script>

<style scoped>
.topStyle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.outDiv {
  background-color: red;
  width: 19%;
  text-align: center;
  overflow: hidden;
  margin: 0 auto;
}

.scrollP {
  white-space: nowrap;
  text-align: center;
}

.topTiele {
  font-weight: 700;
}
</style>