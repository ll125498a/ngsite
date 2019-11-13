<template>
<!-- <div class="siteBox">
  <a class="siteBtn" :href="item.siteAddress" target="_blank" v-for="item in Customize" :key="item.index">
   <el-avatar :size="68" :src="item.pictureAddress"></el-avatar>
   <img class="uSiteDelete" src="../assets/siteSetDelete.png">
   <span class="siteSpan">{{item.name}}</span>
  </a>
</div> -->
<div class="siteBox">
    
<div class="siteBtn" v-for="item in $store.state.list" :key="item.index" v-show="item.show">
  
  <!-- <img class="uSiteDelete" src="../assets/siteSetDelete.png"> -->
  <el-button icon="el-icon-close" class="uSiteDelete" @click="item.dispd=!item.dispd" circle v-show="$store.state.cound"></el-button>
   <el-dialog title="提示" :visible.sync="item.dispd" width="30%" :modal-append-to-body='false' :before-close="handleClost">
    <span>是否确认删除？</span>
    <span>
      <el-button @click="item.dispd=false;item.show=!item.show" >是</el-button>
      <el-button type="primary" @click="item.dispd=false">否</el-button>
    </span>
  </el-dialog>
<a :href="item.siteAddress" target="_blank" class="el-button el-button--default el-button--small is-plain is-circle">
      <img :src="item.pictureAddress">
    </a>
    <span class="siteSpan">{{item.name}}</span>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
       dialogVisible:false
    }
  },
  methods:{
    list(){
      this.$store.commit("list")
    },
    handleClost(done)
        {
            this.$confirm('确认关闭?')
            .then(_=>{
                done();
            })
            .catch(_=>{})
        },
  }

}

</script>
<style>

.el-button>img{
  width: 20px;
  height: 20px;
  display: inherit;
}
a.el-button.is-circle
{
  width: 68px;
  height: 68px;
  margin-right: 20px;
  margin-left: 19px;
  padding-top: 23px;
}
.el-icon-close{
  position: absolute;
    right: 1px;
    bottom: 1px;
}
</style>
