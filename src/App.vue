<template>
  <div id="app">
       <router-link to="/about">AboutPage</router-link>
       <router-link to="/auth">Author Page</router-link>
       <router-link to="/table-requests">Table Requests</router-link>
       <router-link to="/home">HomePage</router-link>
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