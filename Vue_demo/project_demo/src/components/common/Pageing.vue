<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :url="url"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getTableData } from "@/utils/table";
export default {
  name: "PageingView",
  props:{
    "total":Number,
    "url":String
  },
  data() {
    return {
      page: 1,
      size: 10,
    };
  },
  methods: {
    //   分页
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      console.log(`每页 ${val} 条`);
      getTableData(this.$parent, "/works", { page: this.page, size: val }, [
        "completed",
        "id",
      ]);
    },
    handleCurrentChange(val) {
      this.page = val;
      console.log(`当前页: ${val}`);
      getTableData(this.$parent, "/works", { page: val, size: this.size }, [
        "completed",
        "id",
      ]);
    },
    created() {
      getTableData(this.$parent, "/works", { page: this.page, size: this.size }, [
        "completed",
        "id",
      ]);
    },
  },
};
</script>

<style lang="scss" scoped></style>
