<template>
  <div class="loginBox">
    <div class="mianBox">
      <span class="center">欢迎登陆</span>
      <el-form
        :model="userInfo"
        status-icon
        :rules="rules"
        ref="userInfo"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="userInfo.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userInfo.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="logins">登陆</el-button>
          <el-button @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "../api/index.js";
import { mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
          // { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    ...mapMutations(["setuserToken", "setuserName"]),
    logins() {
      login(this.userInfo).then(res => {
        if (res.data.code == 200) {
          console.log(res.data.data);
          this.setuserName(this.userInfo.username);
          this.setuserToken(res.data.data);
          this.$message({
            message: `${res.data.msg}`,
            type: "success"
          });
          this.$router.push("/");
        } else {
          this.$message({
            message: `${res.data.msg}`,
            type: "error"
          });
        }
      });
    },
    register() {
      this.$router.push('/register');
    }
  }
};
</script>
<style lang='less' scoped>
.loginBox {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(../assets/images/login.jpg) no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .mianBox {
    width: 25%;
    height: 300px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    span {
      margin: 20px 0;
      font-size: 18px;
      height: 50px;
    }
    .el-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
    }
  }
}
</style>

<style lang="less">
.loginBox {
  .el-input {
    width: 220px;
  }
}
</style>

