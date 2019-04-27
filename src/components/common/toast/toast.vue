<template>
  <section class="toast">
    <p>{{ content }}</p>
  </section>
</template>

<script>
// 主要就改了 data
export default {
  name: "Toast",
  data() {
    return {
      content: "",
      duration: 1000
    };
  },
  mounted() {
    setTimeout(() => {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }, this.duration);
  }
};
</script>
<style lang="sass" scoped>
  @import "./toast.scss";
</style>
