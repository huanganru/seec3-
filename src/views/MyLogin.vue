<template>
  <div class="login">
    <div class="myform">
      <div class="title">
        <h3>Login Form</h3>
      </div>
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input placeholder="密码" v-model="formdata.pw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="" class="btn" @click="submitfn"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import instance from "../api/index";
export default {
  name: "MyLogin",
  data() {
    let userfn = function (rule, value, callback) {
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("用户格式不对"));
    };
    let pwfn = function (rule, value, callback) {
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return;
      return callback(new Error("密码格式不对"));
    };
    return {
      formdata: {
        user: "admin",
        pw: 123456,
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }],
      },
      newdebouncefn:null 
    };
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn,500)
  },
  methods: {
    submitfn() {
        // this.loginfn()
        this.newdebouncefn()
    },
    async loginfn() {
      let user = this.formdata.user
      let pw = this.formdata.pw
      let {data} = await instance.post("/login", { user, pw })
      if(data.message === "fail")return this.$message.error("登录失败")
      if(data.message==="success"){
          localStorage.setItem("token",data.data.token)
          this.$message({
              type:"success",
              message:"登录成功",
              duration:1000,
              onClose:()=>{
                  this.$router.push({name:"home"})
              }
          })
      }
    },
  },
};
</script>
<style scoped>

.login {
  background-color: #324057;
  width: 100vw;
  height: 100vh;
}
.login .title {
  width: 370px;
  position: absolute;
  left: 50%;
  margin-left: -185px;
  text-align: center;
  /* border: 1px solid red; */
  top: -80px;
}
.login .title h3 {
  color: #ffffff;
}
.login .myform {
  box-sizing: border-box;
  width: 370px;
  height: 260px;
  /* border: 2px solid red; */
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -185px;
  margin-top: -130px;
  background-color: #ffffff;
  padding: 20px 20px 60px;
}
.login .btn {
  width: 100%;
}
.login .tip {
  font-size: 12px;
  color: red;
  text-align: center;
}
</style>