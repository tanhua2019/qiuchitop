<template>
  <div class="owncenter">
    <div class="bg">
      <div class="drag w">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的文章</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="fanhui">返回首页</el-button>
          </div>
          <!-- <div v-for="(item,index) in getarticleTable" :key="index" class="text item">
            <dir>{{item.content}}</dir>
          </div>-->
          <dir v-for="(item,index) in getarticleTable" :key="index">
            <div class="content">
              <div class="category_name">
                <span>来自标签{{item.category_name}}</span>
              </div>
              <div class="title">{{item.title}}</div>
              <span  class="content_text">{{item.content}}</span>
            </div>
            <div class="info">
              <div class="iconfont_box">
                <span class="iconfont spanicon" id="icon">&#xe6a6;</span>
              </div>
              <span class="public_time">赞x2</span>
              <span class="public_time">{{item.public_time}}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="edit">编辑</el-button>
              <el-button style="float: right; padding: 3px 0" type="text" @click="delarticle(item.id)">删除</el-button>
            </div>
          </dir>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getarticle } from "../api";
import { delarticle } from "../api";
export default {
  name: "owncenter",
  data() {
    return {
    //   id: "",
      getarticleTable: "",
      a: ""
    };
  },
  created() {
    this.a = this.$route.query.c;
    this.getarticle();
  },
  methods: {
    getarticle() {
      getarticle(this.a).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.getarticleTable = res.data.data;
          console.log(this.getarticleTable,'90000');
          console.log("getarticle");
        }
      });
    },
    delarticle(id) {
      console.log(id);
      delarticle(String(id)).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        });
          this.getarticle();
        }
      })
    },
    edit () {
         this.$router.push("/editor");
    },
    fanhui () {
         this.$router.push("/home");
    }
  }
};
</script>

<style lang='less'>
.owncenter {
  height: 100%;
  width: 100%;
  /*背景模糊*/
  .bg {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("../assets/images/bei2.jpg") no-repeat fixed;
    padding: 1px;
    box-sizing: border-box;
    // padding: 0px 10px;
    z-index: 1;
    .drag {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 96%;
      margin: 10px 0px;
      z-index: 11;
      .box-card {
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 0.8;
        // overflow: hidden;
        overflow-y: scroll;
        z-index: 1000;
        .text {
          font-size: 14px;
        }
        .item {
          margin-bottom: 18px;
        }

        .clearfix:before,
        .clearfix:after {
          display: table;
          content: "";
        }
        .clearfix:after {
          clear: both;
        }
        dir {
          margin-bottom: 40px;
          .content {
            .category_name {
              margin-bottom: 12px;
              span {
                font-size: 14px;
                color: #9e9e9e;
              }
            }

            .title {
              margin-bottom: 16px;
              color: #000;
              font-size: 22px;
            }

            .content_text {
              display: block;
              margin-bottom: 14px;
              color: #9e9e9e;
            }
          }

          .info {
            height: 30px;
            width: 100%;
            color: #9e9e9e;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            span {
              margin-right: 10px;
            }
            .iconfont_box:hover {
              height: 20px;
              width: 20px;
              text-align: center;
              line-height: 20px;
              border-radius: 50%;
              background-color: #009a61;
              box-sizing: border-box;
               #icon {
               color: #fff !important;
              }
            }
            .iconfont_box {
              margin-right: 12px;
              height: 100%;
              line-height: 100%;
              align-content: center;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              #icon {
                color: #009a61 !important;
                margin-right: 0px;
              }
            }
          }
        }
      }
    }
  }
  .bg:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(2px);
    z-index: 2;
  }
}
</style>
