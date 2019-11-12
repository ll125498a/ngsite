<template>
  <div id="app">

    <searchbar></searchbar>
        <homepage></homepage>
        <add></add>
  </div>
</template>
<script>
export default {
    components:{
    searchbar,
    homepage,
    add
  }
}
import homepage from './components/Homepage';
import searchbar from './components/SearchBar';
import add from './components/Add';
</script>

<style>
@import '.\common\style.css';
</style>