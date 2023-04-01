<template>
  <div>
    <el-tree
      :data="menus"
      show-checkbox
      node-key="name"
      :props="defaultProps"
      ref="tree"
    >
    </el-tree>
    <el-button @click="getCheckedNodes">通过nonde获取</el-button>
  </div>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      menus: [],
      defaultProps: {
        label: "name",
        children: "children",
      },
    };
  },
  methods: {
    getCheckedNodes() {
      let arr = this.$refs.tree.getCheckedNodes();
      console.log(arr);
    },
  },
  created() {
    this.menus = [...this.$router.options.routes];
  },
};
</script>

<style lang="scss" scoped></style>
