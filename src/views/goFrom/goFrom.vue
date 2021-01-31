<template>
  <div>
    <van-nav-bar
      title="表格"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <h2>三朵云国际交收仓库自提出库单</h2>
      <p>出库单编号:131231</p>
      <table border="1" cellspacing="0" cellpadding="0">
        <tr align="center">
          <th style="padding: 10px">入库单编码</th>
          <th>仓库名称</th>
          <th>数量</th>
          <th>重量</th>
          <th>入库日期</th>
          <th>出库日期</th>
        </tr>
        <tr align="center">
          <td style="padding: 10px">January</td>
          <td>品种：红枸杞；产地：内蒙古品种：红枸杞；产地：内蒙古品种</td>
          <td>品种：红枸杞；产地：内蒙古品种：红枸杞；产地：内蒙古品种</td>
          <td>$100</td>
          <td>$100</td>
          <td>$100</td>
        </tr>
        <tr align="center">
          <td style="padding: 10px">January</td>
          <td>$100</td>
          <td>$100</td>
          <td colspan="3">$100</td>
        </tr>
        <tr align="center">
          <td style="padding: 10px" colspan="1">商品名称</td>
          <td colspan="2">棉花</td>
          <td colspan="1">商品属性</td>
          <td colspan="2">
            品种：红枸杞；产地：内蒙古品种：红枸杞；产地：内蒙古品种：红枸杞；产地：内蒙古品种：红枸杞；产地：内蒙古品种：红枸杞；产地：内蒙古
          </td>
        </tr>
        <tr align="center">
          <td style="padding: 10px" colspan="1">提货人名称</td>
          <td colspan="2">$100</td>
          <td colspan="1">身份证号码</td>
          <td colspan="2">$100</td>
        </tr>
        <tr align="center">
          <td style="padding: 10px" colspan="1">自提车号</td>
          <td colspan="2">$100</td>
          <td colspan="1">提货人电话</td>
          <td colspan="2">$100</td>
        </tr>
        <tr align="center">
          <td>仓库地址</td>
          <td colspan="5">$100</td>
        </tr>
        <tr align="center">
          <td>仓库联系人</td>
          <td colspan="5">$100</td>
        </tr>
        <tr align="center">
          <td>仓库电话</td>
          <td colspan="5"></td>
        </tr>
      </table>
      <div style="display: flex">
        <div style="width: 33.33%">
          提货人（签名）：
          <span
            style="
              display: inline-block;
              border-bottom: 1px solid #000;
              width: 150px;
            "
          ></span>
        </div>
        <div style="width: 33.33%">
          仓库经办人（签名）：
          <span
            style="
              display: inline-block;
              border-bottom: 1px solid #000;
              width: 150px;
            "
          ></span>
        </div>
        <div style="width: 33.33%">
          仓库签章：
          <span
            style="
              display: inline-block;
              border-bottom: 1px solid #000;
              width: 150px;
            "
          ></span>
        </div>
        .
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
};
</script>

<style>
</style>