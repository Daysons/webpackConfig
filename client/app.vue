<template>
    <div>{{text}}</div>
</template>

<script>
    export default {
      name: 'app',
      data () {
        return {
          text: 'webpack'
        }
      }
    }
</script>

<style lang="less" type="text/css" scoped>
    body{
        div{
            margin: 10px 0;
            color: black;
        }
    }
</style>