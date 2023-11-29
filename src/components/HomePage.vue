<template>
    <v-app>
    <v-app-bar :elevation="10">
      <v-app-bar-nav-icon @click="draw=!draw"></v-app-bar-nav-icon>
      <v-app-bar-title> Awesome Shop </v-app-bar-title>
      <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn size="lx-small " class="px-5 py-2">  <v-icon>mdi-home-outline</v-icon>Home</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn size="lx-small " class="px-5 py-2"> <v-icon>mdi-store-outline</v-icon>Store</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn size="lx-small " class="px-5 py-2"><v-icon size="large" icon="mdi-email"
    ></v-icon>cart</v-btn>
      </v-col>
      </v-row>
      <v-btn variant="outlined" color="green">Save</v-btn>
      <v-btn variant="outlined" color="green" @click="logout">Logout</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="draw" >
      <v-divider></v-divider>
      <v-list-item link title="Home"></v-list-item>
      <v-list-item link title="About"></v-list-item>
      <v-list-item link title="Contact"></v-list-item>
      <v-list-item link title="product"></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <h2>Products</h2>
    </v-main>
  </v-app>
</template>

<script>
import { firebase } from '@/firebase';

export default {
  name: 'App',

  data: () => ({
    //
    draw:false
  }),
  methods:{
    logout(){
      firebase.auth().signOut()
    }
  }
}
</script>