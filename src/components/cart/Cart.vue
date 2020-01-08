<template>
  <div>
    <Title-common v-bind:titleName="titleName"></Title-common>
    <router-view></router-view>
    <footer-common></footer-common>
  </div>
</template>
<script>
import HeaderCommon from "../common/Header";
import FooterCommon from "../common/Footer";
import TitleCommon from "../common/Title";
export default {
  data() {
    return {
      titleName: this.$t("m.TITLE_NAME_FOR_CART")
    };
  },
  components: {
    HeaderCommon,
    FooterCommon,
    TitleCommon
  }
};
</script>
<style scoped>
</style>
