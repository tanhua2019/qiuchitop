<template>
  <div class="box">
    <dir v-for="(item,index) in articalTable" :key="index">
      <div class="content">
        <div class="category_name">
          <span>来自标签{{item.category_name}}</span>
        </div>
        <div class="title" @click="goDetail(item.id)">{{item.title}}</div>
        <div class="content_text">
          <p>{{item.content}}</p>
        </div>
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
import {artical} from '../api'
export default {
  name:'',
  data(){
   return {
     a: '',
     articalTable: [],
   }
  },
  created() {
    this.a = this.$route.query.category
    this.artical();
  },
  methods: {
    artical() {
      artical(this.a).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.articalTable = res.data.data;
          console.log(this.articalTable);
        }
      })
    },
    goDetail(id) {
      const { href } = this.$router.resolve({
        name: "Detail",
        query: {
          id: id
        }
      });
      window.open(href, "_self");
    },
  },
}
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
        color: #000;
        font-size: 22px;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }

      .content_text {
        display: flex;
        align-items: center;
        height:60px;
        p {
          display: block;
          width: 600px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow:ellipsis;
        }
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
