<template>
<!-- <div class="siteBox">
  <a class="siteBtn" :href="item.siteAddress" target="_blank" v-for="item in Customize" :key="item.index">
   <el-avatar :size="68" :src="item.pictureAddress"></el-avatar>
   <img class="uSiteDelete" src="../assets/siteSetDelete.png">
   <span class="siteSpan">{{item.name}}</span>
  </a>
</div> -->
<div class="siteBtn">
  <el-row>
    <el-button :circle="true" :plain="true">
      <img src="http://www.jianfast.com/images/siteimg/01.png">
    </el-button>
    <span class="siteSpan">京东</span>
  </el-row>
</div>
</template>
<script>
export default {
  data () {
    return {
      Customize:[
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"},
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"},
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"},
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"},
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"},
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"},
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"},
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"},
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"},
        {siteAddress:"www.baidu.com",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东"}
      ]
    }
  },

}

</script>
<style>
.el-avatar{
  background: #FFF;
  opacity: 0.8;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0px;
}
.el-avatar>img{
  width: 20px;
  height: 20px;
  display: inherit;
}
.el-button>img{
  width: 20px;
  height: 20px;
  display: inherit;
}
.el-button.is-circle
{
  width: 68px;
  height: 68px;
  margin-right: 20px;
}
</style>
