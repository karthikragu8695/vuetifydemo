<template>
  <v-app>
    <v-main>
      <auth-page v-if="!loggedIn"></auth-page>
      <layout-page v-else></layout-page>
    </v-main>
  </v-app>
</template>

<script>
import AuthPage from './components/HelloWorld.vue';
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
