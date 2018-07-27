<template>
    <div>
      <div>{{text}}</div>
      <img src="../static/images/133.gif" alt="表情">
      <router-link to="/app">app</router-link>
      <router-link :to="{name: 'login'}">login</router-link>
      <router-link to="/app/help">app/help</router-link>
      <router-link to="/app/info">app/info</router-link>
      <router-view />
    </div>
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
