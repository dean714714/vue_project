<template>
    <button :class='[commonClass]' v-on:click="btnClickEvent">
        <slot name='icon'></slot><!--放置一个插槽-->
        <span>{{msg}}</span>
    </button>
</template>
<script>
    export default {
      props: {
        commonClass: {
          default: 'cp-btn'
        },
        msg: {
          default: '下载'
        }
      },
      methods: {
        btnClickEvent: function () {
          alert('我是个按钮，这个事件注册在按钮组件里')
          this.$emit('btnClickEvent')
        }
      }
    }
</script>
<style>
    .cp-btn{
        border: 1px solid #ddd;
        background: #fafafa;
        color: #333;
    }
</style>
