<template>
    <div id="index">
        <div class="box">BUTTON</div>
        <div class="box">FORM</div>
        <div class="box">LIST</div>
    </div>
</template>
<script>
export default {
  name: 'index'
}
</script>
<style scoped>
    .box{
        width: 100px;
        background: #00aa00;
        line-height: 60px;
        text-align: center;
        font-family: sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        -webkit-font-smoothing:antialiased;
        margin: 10px;
        cursor: pointer;
    }
</style>
