<template>
  <!-- s 消息 -->
  <section class="success">
    <div class="success-panel">
      <div class="panel-img">
        <img src="../../assets/image/success.png" alt="提交成功">
      </div>
      <p class="panel-text">恭喜您！订单提交成功！</p>
      <p class="panel-tip">请注意查收通知短信，如有疑问可联系售后咨询</p>
    </div>
    <div class="success-order">
      <div class="order-title">
        <span>我的订单</span>
      </div>
      <div class="order-info">
        <div class="info-img">
          <img src="../../assets/image/detail05.png" alt="商品">
        </div>
        <div class="info-detail">
          <p class="detail-name">
            <span>【限时活动】</span>
            <span>气场细闪石榴珠红色·润采诱光唇膏口红</span>
          </p>
          <p class="detail-price">￥155</p>
        </div>
      </div>
    </div>
  </section>
  <!-- e 消息 -->
</template>

<script>
import Storage from "../../class/Storage.class.js";
import Http from "../../class/Http.class.js";
export default {
  name: "MessageComponent",
  data() {
    return {};
  },
  components: {},
  created() {
    this.getData();
  },
  methods: {
    getData() {},
    gotoPage(page, item) {
      Storage.messageDetail = item;
      this.$router.push({
        name: page
      });
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.index !== 'index') {
      window.app.$router.replace({
        name: 'index'
      })
    }
    next()
  }
};
</script>

<style lang="sass" scoped>
@import "./order.scss";
</style>
