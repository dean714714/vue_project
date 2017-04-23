<template>
    <button class="cp-btn" v-on:click="btnClickEvent">
        <slot name='icon'></slot><!--放置一个插槽-->
        <span>{{msg}}</span>
    </button>
</template>
<script>
    export default {
      props: {
        msg: {
          default: '下载'
        }
      },
      methods: {
        btnClickEvent: function () {
          alert('I am a btn')
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
