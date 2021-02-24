<template>
  <div id="box">
	<!-- 控制数据的值切换显示隐藏 -->
	<button @click="test">点我展示效果</button>

	<div style="position: relative;height: 60px;">
		<transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutUp">
			<p style="position: absolute;text-align: center;width:100%;" v-if="show" key="1">hello</p>
			<p style="position: absolute;text-align: center;width:100%;" v-if="!show" key="2">daliycode.com</p>
		</transition>
	</div>
	<div style="position: relative;height: 60px;text-align: center;">
		<transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
			<p style="position: absolute;text-align: center;width:100%;" v-if="step==1" key="1">www</p>
			<p style="position: absolute;text-align: center;width:100%;" v-if="step==2" key="2">daliycode</p>
			<p style="position: absolute;text-align: center;width:100%;" v-if="step==3" key="3">com</p>
		</transition>
	</div>
	<div style="text-align: center;">
		<transition enter-active-class="animated bounceIn" leave-active-class="animated zoomOutRight">
			<p v-show="show" class="animated tada">www.daliycode.com</p>
		</transition>
	</div>
	
	<div style="text-align: center;">
		<p v-show="show" class="animated lightSpeedIn">www.daliycode.com</p>
	</div>
  </div>
</template>

<script>
export default {
    data() {
	return {
		show: true,
		step: 1,
	};
},
methods: {
 test() {
	this.show = !this.show
	switch (this.step){
      case 1:
    	      this.step = 2
		break;
            case 2:
		this.step = 3
		break;
	  default:
		this.step = 1
		break;
	}
 }
}
}
</script>

<style>

</style>