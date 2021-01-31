<template>
  <div class="pdfPage">
    <van-sticky>
      <van-nav-bar
        :title="pageNum + '/' +  pageTotalNum"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
    <van-row>
      <!-- progress: pdf页面加载进度 -->
      <!-- num-pages: 监听pdf加载，获取pdf的页数 -->
      <!-- page-loaded: pdf某个页面加载成功时的回调 -->
      <!-- loaded: pdf加载时的回调 -->
      <!-- <pdf 
                :page="page" 
                @progress="loadedRatio = $event" 
                src="http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf" 
                class="pdf"
                @num-pages="pageCount = $event"
                @page-loaded="currentPage = $event" 
                @loaded="loadPdfHandler" 
                ref="wrapper" 
            >
      </pdf>-->
    </van-row>
    <van-row>
      <div class="pdf-tab">
        <!-- <div @click.stop="prePage">上一页</div> -->
        <!-- <div class="btn-def btn-next" @click.stop="nextPage">下一页</div> -->
        <!-- <div class="btn-def" @click.stop="clock">顺时针</div>
        <div class="btn-def" @click.stop="counterClock">逆时针</div>
        <div class="btn-def" @click.stop="pdfPrintAll">全部打印</div>
        <div class="btn-def" @click.stop="pdfPrint">部分打印</div>-->
        <van-button round color="orange" @click="scaleD">放大</van-button>
        <van-button round color="orange" @click="scaleX">缩小</van-button>
      </div>
      <!-- <div>{{pageNum}}/{{pageTotalNum}}</div>
      <div>进度：{{loadedRatio}}</div>
      <div>页面加载成功: {{curPageNum}}</div>-->
      <div @click="pdfDetail" class="pdfBox">
        <div class="icon" @click.stop="nextPage">
          <van-icon name="arrow" color="#ccc" />
        </div>
        <div class="icon_left" @click.stop="prePage">
          <van-icon name="arrow-left" color="#ccc" />
        </div>
        <pdf
          ref="pdf"
          :src="pdfUrl"
          :page="pageNum"
          :rotate="pageRotate"
          @password="password"
          @progress="loadedRatio = $event"
          @page-loaded="pageLoaded($event)"
          @num-pages="pageTotalNum=$event"
          @error="pdfError($event)"
          @link-clicked="page = $event"
        ></pdf>
      </div>
    </van-row>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  data() {
    return {
      // pdfUrl: '../../assets/pdf/test.pdf',
      // pdf初始展示页数
      // page: 1,
      // loadedRatio: 0,
      // pageCount: 0,
      pdfUrl: "http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf",
      // 当前页
      pageNum: 1,
      // 总页数
      pageTotalNum: 1,
      // 旋转角度
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
      // 放大系数
      scale: 100,
      curPageNum: 0
    };
  },
  components: {
    pdf
  },
  methods: {
    //缩小
    scaleX() {
      if (this.scale == 100) {
        return;
      }
      this.scale += -5;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    //放大
    scaleD() {
      this.scale += 5;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    pdfDetail() {
      console.log(123);
    },
    pdfClick(e) {
      console.log(123);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    // pdf加载时
    loadPdfHandler(e) {
      this.currentPage = 1; // 加载的时候先加载第一页
    },
    prePage() {
      var p = this.pageNum;
      p = p > 1 ? p - 1 : this.pageTotalNum;
      this.pageNum = p;
    },
    nextPage() {
      var p = this.pageNum;
      p = p < this.pageTotalNum ? p + 1 : 1;
      this.pageNum = p;
    },
    // 旋转(正向)
    clock() {
      this.pageRotate += 90;
    },
    // 旋转(反向)
    counterClock() {
      this.pageRotate -= 90;
    },
    password(updatePassword, reason) {
      updatePassword(prompt('password is "123456"'));
      console.log("...reason...");
      console.log(reason);
      console.log("...reason...");
    },
    pageLoaded(e) {
      this.curPageNum = e;
    },
    pdfError(error) {
      console.error(error);
    },
    pdfPrintAll() {
      this.$refs.pdf.print();
    },
    pdfPrint() {
      this.$refs.pdf.print(100, [1, 2]);
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar {
  background: orange;
}
/deep/ .van-icon {
  color: #fff;
}
/deep/ .van-nav-bar__text {
  color: #fff;
}
.content {
  padding: 3vw;
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  background-color: #f2f2f2;
}
.pdf {
  width: 100%;
  height: 100%;
  margin-top: 10vw;
}
.icon {
  width: 5vw;
  height: 5vw;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 40%;
  z-index: 1;
}
.pdf-tab {
  position: relative;
}
.pdfBox {
  position: relative;
  height: 100vh;
  overflow: auto;
}
.icon_left {
  width: 5vw;
  height: 5vw;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 40%;
  z-index: 1;
}
.pdfPage {
  overflow: hidden;
}
</style>