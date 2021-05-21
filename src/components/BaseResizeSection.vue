<template>
  <el-col :span="7">
    <section style="background-color: lightpink; height: 100%">
      <slot name="table1" />
    </section>
  </el-col>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
