<template>
  <div class="home">
    <Headers />
    <el-container class="content">
      <Menus />
      <el-container>
        <el-main>
          <Bread />
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer> <Footers /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Headers from "./common/Header.vue";
import Footers from "./common/Footer.vue";
import Menus from "./common/Menu.vue";
import Bread from "./common/Breadcrumb.vue";

export default {
  name: "HomeView",
  components: {
    Headers,
    Footers,
    Menus,
    Bread,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont {
      margin: 20px;
    }
  }
}
</style>
