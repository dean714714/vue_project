<template>
    <cp-button msg="名字被我自定义了" v-on:btnClickEvent='resetEvent'>
      <span slot='icon' class='fa fa-camera-retro'></span>
    </cp-button>
</template>
<script>
    import cpBtn from '../components/cp-button.vue'// 导入组件
    export default {
      components: {
        'cp-button': cpBtn// 注册组建
      },
      methods: {
        resetEvent: function () {
          alert('我修改了按钮事件')
        }
      }
    }
</script>
<style>
  @import '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
