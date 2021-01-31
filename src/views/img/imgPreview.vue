<template>
  <div class="imgPreview">
      <van-sticky>
      <van-nav-bar
        title="vue-preview"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }, 
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>