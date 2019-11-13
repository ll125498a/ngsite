<template>
    <div id="fixedBtnBox">
        <el-button icon="el-icon-circle-plus" @click="dialogVisible=true" style="font-size:20px;">
        </el-button>
        <el-button icon="el-icon-circle-close" @click="disp" style="font-size:20px;">
        </el-button>
        <el-dialog title="" :visible.sync="dialogVisible" width="30%" :before-close="handleClost" center>
            <span>
                <el-input placeholder="粘贴或输入URL" v-model="Address">
                    <template slot="prepend">网址：</template>
                <el-button slot="append" round @click="GainLOGO()">获取LOGO</el-button>
                </el-input>
                <el-input style="margin-top:15px" placeholder="输入名称" v-model="name">
                    <template slot="prepend">名称：</template>
                </el-input>
                </span>
                <span>
                <el-input style="margin-top:15px;width:80%;" placeholder="" v-model="LOGO" >
                    <template slot="prepend">图标：</template>
                </el-input>
                <el-avatar :size="50" :src="this.LOGO" ></el-avatar>
            </span>
            <span slot="footer" class="nssConfirmBox dialog-footer">
                <el-button plain  @click="dialogVisible=false">取 消</el-button>
                <el-button plain type="primary" @click="dialogVisible=false;Addpicture()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dialogVisible:false,
            Address:'',
            name:'',
            LOGO:''
        }
    },
    methods:{
        handleClost(done)
        {
            this.$confirm('确认关闭?')
            .then(_=>{
                done();
            })
            .catch(_=>{})
        },
        Addpicture()
        {
            var i={siteAddress:this.Address,pictureAddress:this.LOGO,name:this.name,show:true,dispd:false}
            this.$store.commit('Addpicture',i)
        },
        disp(){
            this.$store.commit('disp')
        },
        GainLOGO(){
            var reg = /(http|ftp|https):/
            var reh=/(http|https):\/\/(www.)?(\w+(\.)?)+/
            if(this.Address!='')
            {
            if(reg.test(this.Address))
            {
                let address=this.Address.match(reh)
                this.LOGO=address[0]+'/favicon.ico'
            }
            else
            {
                this.Address='http://'+this.Address;
                let address=this.Address.match(reh)
                this.LOGO=address[0]+'/favicon.ico'
            }
            }
            else
            {
                alert('获取图标失败！未输入网址或格式不正确')
            }
            }
            
        }
}

    

</script>
<style>
.el-input--small .el-input__inner{
    height: 50px;
    line-height: 50px;
}
.el-avatar{
  background: #FFF;
  opacity: 0.8;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 15px;
  border: 1px solid #DCDFE6;
  float: right;
}
.el-avatar>img{
  width: 20px;
  height: 20px;
  display: inherit;
  margin-top: inherit;
  margin-left: 14px;
}
</style>