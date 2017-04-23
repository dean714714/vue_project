<template>
  <div>
    <span v-for='(item,index) in items' class='nav'>{{item.text}}</span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        commonClass: 'nav_common',
        activeClass: 'nav_active',
        items: [
          {
            text: 'HOME',
            active: 'true'
          },
          {
            text: 'OBJECCT',
            active: 'false'
          },
          {
            text: 'ABOUT',
            active: 'false'
          }
        ]
      }
    }
  }
</script>
<style>
  .nav{
    display:inline-block;
    line-height:20px;
    padding:10px 20px;
  }
</style>
