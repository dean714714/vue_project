<template>
  <div>
    <span v-for='(item,index) in items' :class="[commonClass,item.active ? activeClass : '']" v-on:click='navClickEvent(items,index)'>{{item.text}}</span>
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
            active: true
          },
          {
            text: 'OBJECCT',
            active: false
          },
          {
            text: 'ABOUT',
            active: false
          }
        ]
      }
    },
    methods: {
      navClickEvent: function (items, index) {
        items.forEach(function (element) {
          element.active = false
        })
        items[index].active = true
        this.$emit('navClickEvent', items, index)
      }
    }
  }
</script>
<style>
  .nav_common{
    display:inline-block;
    line-height:20px;
    padding:10px 20px;
    cursor: pointer;
  }
  .nav_active{
    color:#ffaa00;
    border-bottom: 2px solid #ffaa00;
  }
</style>
