<template>
  <div>
    <div>this is app page</div>
    <router-view />
    <router-view name="side"></router-view>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>
