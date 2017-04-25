<template>
  <div class="cp_list">
    <cp-button msg='this is a button' commonClass='cp-btn'></cp-button>
    <span class="cp_list_tips">{{tipsText}}</span>
  </div>
</template>
<script>
  import cpBtn from '../components/cp-button.vue'
  export default {
    props: {
      tipsText: {
        default: 'show default text'
      }
    },
    components: {
      'cp-button': cpBtn
    }
  }
</script>
<style scoped>/*不加scoped会使别的地方的cp-btn变成此页cp-btn的样式,作用在于限定作用域*/
  .cp_list{
    padding:10px 15px;
    background:#ffffff;
    border:1px solid #d7d7d7;
  }
  .cp_list_tips{
    display:block;
    text-align:left;
  }
  .cp-btn{
    float:right;
    border: 1px solid #ff2200;
    outline:none;
    padding:5px 10px;
    background:#ff8800;
    color:#ffffff;
  }
</style>
