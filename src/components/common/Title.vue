<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple">{{titleName}}</div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "title",
  props: ["titleName"]
};
</script>
<style scoped>
.grid-content {
  min-height: 3rem;
  background-color: #0fa774;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  line-height: 3rem;
}
</style>