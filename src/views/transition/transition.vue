<template>
  <div>
    <van-nav-bar
      title="过渡效果"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="transition">
      <div class="box">
        <transition name="fade">
          <div class="c1" v-if="flag"></div>
        </transition>
        <van-button @click="btn">transition1</van-button>
      </div>
      <div class="box">
        <transition name="slide-fade">
          <div class="c2" v-show="flag1"></div>
        </transition>
        <van-button @click="btn1">transition2</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      flag1: true,
    };
  },
  methods: {
    btn1() {
      this.flag1 = !this.flag1;
    },
    btn() {
      this.flag = !this.flag;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.c1 {
  width: 100px;
  height: 200px;
  background-color: red;
}

.c2 {
  width: 100px;
  height: 200px;
  background-color: blue;
}
.box {
  height: 200px;
  border: 1px solid #ccc;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.transition {
  display: flex;
  justify-content: center;
}
.van-button {
  width: 100%;
}
</style>