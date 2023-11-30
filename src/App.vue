<template>
  <v-app>
      <auth-page v-if="!loggedIn"></auth-page>
      <layout-page v-else></layout-page>
  </v-app>
</template>

<script>
import AuthPage from './components/AuthPage.vue';
import LayoutPage from './views/LayoutPage.vue';
export default {
  components:{
    AuthPage,
    LayoutPage
  },
  computed:{
    loggedIn(){
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>
<style>
body{
  background-color: black;
}
</style>
