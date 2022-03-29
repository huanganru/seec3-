<template>
  <div class="home">
    <el-container>
      <el-aside class="aside" style="background: rgb(50, 64, 87)">
        <el-menu
          background-color="rgb(50,64,87)"
          text-color="#fff"
          :router="true"
        >
          <el-menu-item class="item">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">文章列表</el-menu-item>
              <el-menu-item index="2-2">多层次路由</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item
                v-for="(item, index) in this.$route.meta"
                :key="index"
                >{{ item }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  components: {},
  mounted: {},
};
</script>
<style scoped>
.aside {
  height: 142vh;
}
.item {
  background: rgb(50, 64, 87);
}
.item span {
  color: #fff;
}
.item:hover {
  background: #f5f5f5;
}
.img1 {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eff2f7;
}
</style>
