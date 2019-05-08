<template>
  <div>
    <!--editor的div为富文本的承载容器-->
    <el-input v-model="title" placeholder="请输入标题"></el-input>
    <el-input v-model="category_name" placeholder="请输入分类"></el-input>
    <div id="editor"></div>
    <button class="uebtn" @click="addarticle">发表文章</button>
  </div>
</template>

<script>
import { addarticle } from "../api";
export default {
  name: "",
  data() {
    return {
      editor: null,
      title: '',
      category_name: '',
    };
  },
  mounted() {
    // 实例化editor编辑器
    this.editor = UE.getEditor("editor");
  },
  methods: {
    addarticle() {
       // 获取editor中的文本
      this.content = this.editor.getContent();
      //.replace(/<[^>]+>/g, "");
      console.log(this.content);
      addarticle({
        "title": this.title,
        "content": this.content,
        "category_name": this.category_name
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$router.push("/home");
        }
      });
    }
  },
  destroyed() {
    // 将editor进行销毁
    this.editor.destroy();
  }
};
</script>

<style lang='less'>
.edui-default .edui-editor-iframeholder {
  height: 400px !important;
}
.uebtn {
  display: block;
  margin: 0 auto;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  border-radius: 10px;
  width: 120px;
  background-color: #009a61;
  margin-top: 20px;
}
</style>
