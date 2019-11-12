<template>
    <div>
        <el-button icon="el-icon-circle-plus" @click="dialogVisible=true"></el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClost">
            <span>
                <el-input placeholder="输入网址" size="small" v-model="Address">
                    <template slot="prepend">网址：</template>
                </el-input>
                <br>
                <el-input placeholder="输入名称" v-model="name">
                    <template slot="prepend">名称：</template>
                </el-input>
                <el-input placeholder="" v-model="LOGO">
                    <template slot="prepend">网址图片：</template>
                </el-input><el-button round size="small" @click="GainLOGO()">获取LOGO</el-button>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible=false">取消</el-button>
                <el-button type="primary" @click="dialogVisible=false;Addpicture()">确定</el-button>
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
            var i={siteAddress:this.Address,pictureAddress:this.LOGO,name:this.name}
            this.lsit.push(i)
        },
        GainLOGO(){
            this.LOGO=this.Address+'/favicon.ico'
        }
    }

    
}
</script>
<style>

</style>