<template>
<div id="searchBox">
    <el-form id="searchCheck">
    <el-autocomplete id="search"  :select-when-unmatched="true" v-model="Contents" placeholder="请输入搜索内容" :fetch-suggestions="querySearch" @select="handleSelect" :trigger-on-focus="false">
        <el-button slot="append" icon="el-icon-search" @click="SearchBtn"></el-button>
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
            var list=[];
            var results="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+querystring
            this.$http.jsonp(results,{jsonp:'cb'})
            .then((response)=>{
                for(var i in response.data.s)
                {
                    list.push({value:response.data.s[i]})
                }
                callback(list)
            })
            .catch(function(error){
                console.log(error);
            })
            
        },
        handleSelect(item){
            window.open("https://www.baidu.com/s?wd="+item.value,"_blank")
        },
        SearchBtn(){
            window.open("https://www.baidu.com/s?wd="+this.Contents,"_blank")
        }    
        }

    
}
</script>
<style>

</style>