<template>
  <div id="app">
    <shouye></shouye>
    <router-view />
  </div>
</template>
<script>
import shouye from "./views/MyShouye.vue"
export default {
  name: "App",
  components: {
    shouye
  },
};
</script>
<style scoped>
</style>
