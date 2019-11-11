<template>
<div id="searchBox">

    <el-form id="searchCheck">
    <!-- <el-input id="search" v-model="Search" placeholder="请输入搜索内容" >     
    </el-input> -->
    <el-autocomplete id="search" v-model="Contents" placeholder="请输入搜索内容" :fetch-suggestions="querySearch" @select="handleSelect" :trigger-on-focus="false">
        <el-button slot="append" icon="el-icon-search"></el-button>
    </el-autocomplete>
            </el-form>
    

</div>
</template>
<script>  
export default {
    data(){
        return{
            Contents:''
        }
    },
    methods:{
        querySearch(querystring,callback)
        {
            var Contents=this.Contents
            var results="https://www.baidu.com/s?wd="+querystring
            axios.get(results).then((response)=>{
                for(let i of response.data)
                {  
                    i.value=i.data
                }
            })
        },
        handleSelect(){
            
        }
    }

    
}
</script>
<style>

</style>