<template>
  <div>
    <div class="top">
      <div class="houtaiguanli">
        <h3>ElementUI管理后台</h3>
        <span><i class="el-icon-menu"></i></span>
      </div>
      <div class="right">
        <span><i class="el-icon-rank"></i></span>
        <el-dropdown class="icon">
          <el-button type="primary">
            <i class="el-icon-setting"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <span>导航类型</span>
            <el-dropdown-item>面包屑</el-dropdown-item>
            <el-dropdown-item>窗口标签</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <p><i class="el-icon-bell"></i></p>
        <div class="user">
          <el-dropdown class="login_s">
            <a class="el-dropdown-link"> Adimn </a>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item><router-link to="MyLogin">退出系统</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <MyNav></MyNav>
    <MyShouyeS></MyShouyeS>
  </div>
</template>

<script>
export default {
  name: "MyShouye",
  components: {
    
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.top {
  width: 100%;
  height: 50px;
  background-color: #0079d9;
  color: #fff;
  line-height: 50px;
}

.top .houtaiguanli {
  padding-left: 30px;
  position: relative;
}

.top .houtaiguanli h3 {
  font-size: 16px;
}

span {
  display: inline-block;
  font-size: 20px;
}

.top .houtaiguanli span {
  position: absolute;
  top: 0px;
  left: 194px;
}

.top .right span {
  position: absolute;
  top: 0px;
  right: 294px;
}

.top .right span {
  font-size: 20px;
}

.top .right .icon {
  position: absolute;
  top: 0px;
  right: 214px;
  background: #0079d9;
}

.top .right p {
  font-size: 20px;
  position: absolute;
  top: 0px;
  right: 170px;
}

.top .right .login_s {
  position: absolute;
  top: 0px;
  right: 80px;
  color: #fff;
  font-size: 20px;
}
</style>
