  <template>
  <div class="drag">
      123
    <div class="drag_box" v-drag></div>
    <div class="box1" v-drag></div>
  </div>
</template>

    <script>
export default {
  name: "drag",
  data() {
    return {};
  },
  //注册局部组件指令
  directives: {
    drag: function (el) {
      console.log("当前元素", el);
      let dragBox = el; //获取当前元素
      dragBox.onmousedown = (e) => {
          //算出鼠标相对元素的位置
        let disX = e.clientX - dragBox.offsetLeft;
        console.log('x当前元素位置',disX);
        let disY = e.clientY - dragBox.offsetTop;
        console.log('y当前元素位置',disY);
        document.onmousemove = (e) => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          //移动当前元素
          dragBox.style.left = left + "px";
          dragBox.style.top = top + "px";
        };
        document.onmouseup = (e) => {
            console.log('鼠标弹起',e)
          //鼠标弹起来的时候不再移动
          document.onmousemove = null;
          //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
          document.onmouseup = null;
        };
      };
    },
  },
};
</script>
    <style scoped>
.drag {
  width: 100%;
  height: 500px;
  background-color: #fff;
}
.drag_box {
  width: 150px;
  height: 90px;
  border: 1px solid #666;
  background-color: #ccc;
  /* 使用定位，脱离文档流 */
  position: absolute;
  top: 100px;
  left: 100px;
  /* 鼠标移入变成拖拽手势 */
  cursor: move;
  z-index: 3000;
}
.box1 {
    width: 100px;
    height: 100px;
    background-color: red;
     position: absolute;
     cursor: move;
}
</style>