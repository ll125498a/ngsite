<template>
<div id="searchBox">
<form id="searchCheck">
    <el-input id="search" v-model="Search" placeholder="请输入搜索内容"></el-input>
</form>
</div>
</template>
<script>
export default {
    data(){
        return{
            Search:''
        }
    }
    
}
</script>
<style>

</style>