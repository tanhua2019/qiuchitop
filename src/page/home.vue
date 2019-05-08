<template>
  <div class="homeIndex">
    <div class="home-topBar center">
      <div class="w">
        <div class="topBar-logo">
          <img src="../assets/images/logo.png" alt>
        </div>
        <div class="topBar-nav">
          <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-menu-item index="3">处理中心</el-menu-item>
          </el-menu>
        </div>
        <div class="topBar-search center">
          <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input21"></el-input>
        </div>
        <div class="person center" v-if="userToken">
          <button @click="chuang()">创建文章</button>
          <p>欢迎您， {{userName}}</p>
          <p @click="closelogin">退出登录</p>
          <p @click="geren()">个人中心</p>
        </div>
        <div class="topBar-btn center" v-else>
          <el-button type="primary" @click="login()">立即登录</el-button>
          <el-button type="primary" @click="register">免费注册</el-button>
        </div>
      </div>
    </div>

    <!-- 点击隐藏部分 -->
    <!-- <div class="yin w" v-show="isShow">
      <div class="guan" @click="guan()">x</div>
      <div class="yintext">
        <span>在 SegmentFault，学习技能、解决问题</span>
        <p>每个月，我们帮助 1000 万的开发者解决各种各样的技术问题。并助</p>
        <p>力他们在技术能力、职业生涯、影响力上获得提升</p>
      </div>
      <div class="yin_login">
        <el-button plain>注册</el-button>
        <el-button type="primary" plain class="deng">登录</el-button>
      </div>
    </div> -->

    <div class="home-main w">
      <div class="content-left">
        <ul>
          <li class="left-item">
            <router-link to="/home">
              <!-- <a href="#"> -->
              <img src="../assets/images/list-icon.png" alt>
              <router-link to="/home">
              <span>回到主页</span>
            </router-link>
              <!-- </a> -->
            </router-link>
          </li>
          <li>
            <router-link to="/home/fornt?category=Android">
              <img src="../assets/images/list-icon.png" alt>
              <span>为你推荐</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home/fornt?category=Android">
              <img src="../assets/images/list-icon.png" alt>
              <span>为你推荐</span>
            </router-link>

            <!-- </a> -->
          </li>
          <span>技术频道</span>
          <li>
            <!-- <router-link to="/home/fornt?category=前端">
              <img src="../assets/images/list-icon.png" alt>
              <span>前端</span>
            </router-link> -->
            <a @click="routerTo()">
              <img src="../assets/images/list-icon.png" alt>
              <span>前端</span>
            </a>
          </li>
          <li>
            <router-link to="/home/right?category=后端">
              <img src="../assets/images/list-icon.png" alt>
              <span>后端</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home/ios?category=iOS">
              <img src="../assets/images/list-icon.png" alt>
              <span>IOS</span>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/home/android?category=IOS">
              <img src="../assets/images/list-icon.png" alt>
              <span>人工智能</span>
            </router-link>
          </li> -->
          <li>
            <router-link to="/home/fornt?category=Android">
              <img src="../assets/images/list-icon.png" alt>
              <span>Android</span>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="content-main">
        <div class="main-swiper">
          <div class="block">
            <el-carousel height="150px">
              <el-carousel-item v-for="(item,index) in swipers" :key="index">
                <img :src="item.image" alt>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <router-view></router-view>
      </div>

      <div class="content-right">
        <!-- <router-link to="/home">

        </router-link>-->

        <div class="contentright">
          <div>
            <el-alert title="酷工作招聘板块开放" type="warning"></el-alert>
          </div>
          <div class="guang">
            <img src="../assets/images/广告.png" alt>
          </div>

          <div class="main-swiper">
            <div class="block">
              <el-carousel height="150px">
                <el-carousel-item v-for="(item,index) in swipers" :key="index">
                  <img :src="item.image" alt>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>

          <div class="rlist">
            <ul>
              <li>
                <div class="lefttx">
                  <img src="../assets/images/time.jpg" alt>
                </div>
                <div class="rightimg">
                  <p class="tt">
                    <a href="#">看到 JDK 12又发布了从 Java 1.8的函数式编程思维和范式</a>
                  </p>
                  <p class="zan">
                    <span>深圳</span>
                    <span>周五</span>
                    <span>报名中</span>
                  </p>
                </div>
              </li>

              <li>
                <div class="lefttx">
                  <img src="../assets/images/time.jpg" alt>
                </div>
                <div class="rightimg">
                  <p class="tt">
                    <a href="#">看到 JDK 12又发布了从 Java 1.8的函数式编程思维和范式</a>
                  </p>
                  <p class="zan">
                    <span>深圳</span>
                    <span>周五</span>
                    <span>报名中</span>
                  </p>
                </div>
              </li>

              <li>
                <div class="lefttx">
                  <img src="../assets/images/time.jpg" alt>
                </div>
                <div class="rightimg">
                  <p class="tt">
                    <a href="#">看到 JDK 12又发布了从 Java 1.8的函数式编程思维和范式</a>
                  </p>
                  <p class="zan">
                    <span>深圳</span>
                    <span>周五</span>
                    <span>报名中</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {
      input21: "",
      isShow: true,
      swipers: [
        {
          image:
            "https://live-static.segmentfault.com/390/819/3908194827-5cb03f8041b45_render"
        },
        {
          image:
            "https://live-static.segmentfault.com/374/225/374225961-5cb0501214dcf_render"
        },
        {
          image:
            "https://live-static.segmentfault.com/337/772/3377727865-5ca1d37aa726c_render"
        }
      ]
    };
  },
  computed: {
    ...mapState(["userToken", "userName"])
  },
  mounted() {},
  methods: {
    ...mapMutations(["closeLogin"]),

    routerTo() {
      this.$router.push({
        name: 'Fornt',
        query: {
          category:'前端'
        }
      })
    },

    login() {
      this.$router.push("/login");
    },
    closelogin() {
      this.closeLogin();
      this.$router.go(0);
    },
    register() {
      this.$router.push("/register");
    },
    handleSelect() {},
    guan() {
      this.isShow = false;
    },
    chuang() {
      this.$router.push("/editor");
    },
    geren() {
      this.$router.push("/owncenter");
    }
  }
};
</script>
<style lang='less' scoped>
.homeIndex {
  height: 100%;
  .home-topBar {
    width: 100%;
    height: 67px;
    background-color: #fafafa;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    .w {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .person {
      width: 35%;
      height: 50px;
      button {
        height: 30px;
        width: 28%;
        color: #fff;
        border-radius: 10px;
        background-color: #009a61;
      }
      p {
        margin: 0 10px;
        &:last-child {
          cursor: pointer;
        }
      }
    }
  }

  .yin {
    height: 200px;
    width: 100%;
    background-color: #009a61;
    text-align: center;
    overflow: hidden;
    position: relative;
    display: flex;
    color: #fff;
    .yin_login {
      flex: 5;
      .el-button {
        margin-top: 8%;
        width: 10%;
      }
    }
    .yintext {
      flex: 5;
      margin-top: 40px;
      span {
        font-size: 30px;
      }
      p {
        margin: 12px 0px;
      }
    }
    .guan {
      height: 20px;
      width: 20px;
      background-color: #3eb389;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
      color: #009a61;
      font-size: 14px;
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }

  .home-main {
    // height: 100%;
    display: flex;
    margin-top: 20px;
    .content-left {
      flex: 1.5;
      padding: 0 20px 0;
      li {
        width: 100%;
        padding: 10px;
        a {
          display: flex;
          align-items: center;
          span {
            margin-left: 15px;
          }
        }
      }
    }
    .content-main {
      flex: 7;
      // border-radius: 10px;
      .el-carousel__item {
        border-radius: 10px;
      }

      img {
        width: 100%;
        height: 150px;
      }
    }
    .content-right {
      flex: 2;
      // background: red;
      z-index: 10000;
      margin-left: 20px;

      .contentright {
        height: 100%;
        width: 250px;
        margin: 10px auto;
        .el-alert {
          margin-left: 6px;
        }
        .guang {
          width: 20%;
          height: 190px;
          margin-top: 30px;
          margin-left: 6px;
        }
        .main-swiper {
           margin-bottom: 20px;
          .block {
            .el-carousel {
              border-radius: 10px;
              img {
                // display: inline;
                height: 100%;
                width: 100%;
              }
            }
          }
        }

        .rlist {
          ul li {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;
            .rightimg {
              margin-left: 30px;
              .tt {
                font-size: 14px;
                margin-bottom: 10px;
                color: #9e9e9e;
              }
              .zan {
                display: flex;
                span {
                  margin-left: 10px;
                  color: #f6a623;
                }
                .spanicon {
                  display: block;
                  height: 30px;
                  width: 30px;
                  text-align: center;
                  line-height: 30px;
                  font-size: 16px;
                  border-radius: 50%;
                }
                .spanicon:hover {
                  background-color: #64e2b4;
                }
              }
            }

            .lefttx {
              height: 50px;
              width: 50px;
              img {
                display: block;
                border-radius: 10px;
                height: 50px;
                width: 50px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.homeIndex {
  .el-menu {
    background-color: #fafafa;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    flex: 1;
    color: #000;
  }
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    color: #009a61;
    background-color: #fafafa;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .el-carousel__button {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
  }
  .el-carousel__button:hover {
    background-color: #fff;
  }
}
</style>
