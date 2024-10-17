<template>
  <div id="app">
       <router-link to="/about">About</router-link>
       <router-link to="/auth">Author Page</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass" scoped>

</style>