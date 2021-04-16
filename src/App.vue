<template>
  <AppNavigation />
  <router-view />
</template>

<script>
import AppNavigation from "./components/AppNavigation/AppNavigation.vue";

export default {
  name: "App",
  components: {
    AppNavigation,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
