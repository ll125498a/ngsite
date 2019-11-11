<template>
  <div id="app">
    <homepage></homepage>
    <searchbar></searchbar>
  </div>
</template>
<script>
export default {
    components:{
    searchbar,
    homepage
  }
}
import homepage from './components/Homepage';
import searchbar from './components/SearchBar';
</script>

<style>
@import '.\common\style.css';
</style>