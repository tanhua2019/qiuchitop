<template>
  <div class="box">
    <dir v-for="(item,index) in articalTable" :key="index">
      <div class="content">
        <div class="category_name">
          <span>来自标签{{item.category_name}}</span>
        </div>
        <div class="title">{{item.title}}</div>
        <span v-bind:id="itemId" class="content_text">{{item.content}}</span>
      </div>
      <div class="info">
        <div class="iconfont_box">
          <span class="iconfont spanicon" id="icon">&#xe6a6;</span>
        </div>
        <span class="public_time">赞x2</span>
        <span class="public_time">{{item.public_time}}</span>
        <span class="readtimes">{{item.readtimes}}</span>
        <span class="username">{{item.username}}</span>
      </div>
    </dir>
  </div>
</template>

<script>
import { getAll } from "../api";
export default {
  name: "",
  data() {
    return {
      itemId: "",
      articalTable: []
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      getAll().then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.articalTable = res.data.data;
          this.itemId = res.data.data.id;
          console.log(this.articalTable);
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.box {
  margin-top: 14px;
  width: 100%;
  height: 100%;
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
        background-color: rgb(216, 203, 203);
        box-sizing: border-box;
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
</style>
