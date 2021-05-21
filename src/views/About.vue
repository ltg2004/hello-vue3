<template>
  <div>
    <el-row style="height: 100vh">
      <base-resize-section>
        <template v-slot:table1>
          <BaseTable :table-data="tableList" />
        </template>
      </base-resize-section>
      <!-- 
    <el-col :span="7">
      <section style="background-color: lightpink; height: 100%">
        7
        
      </section>
    </el-col>
    <el-col :span="12">
      <section style="background-color: lightgrey; height: 100%">12</section>
    </el-col>
    <el-col :span="5">
      <section style="background-color: lightgreen; height: 100%">5</section>
    </el-col>
     -->
    </el-row>
  </div>
</template>

<script>
// import getTableLists from "@/composables/getTableLists";
import BaseTable from "@/components/BaseTable";
import BaseResizeSection from "@/components/BaseResizeSection";
export default {
  components: {
    BaseTable,
    BaseResizeSection,
  },
  setup() {
    // const { tableList } = getTableLists();
    // return {
    //   tableList,
    // };
  },
};
</script>
