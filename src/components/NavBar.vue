<template>
    <v-app> 
      <v-app-bar :elevation="10">
        <v-app-bar-nav-icon @click="draw=!draw"></v-app-bar-nav-icon>
        <v-app-bar-title> Awesome Shop </v-app-bar-title>
      <v-row align="center" justify="center" class="md-hidden">
        <v-col cols="auto">
          <v-btn size="lx-small " class="px-5 py-2">  <v-icon>mdi-home-outline</v-icon>Home</v-btn>
        </v-col>
        <v-col cols="auto">
           <v-btn size="lx-small " class="px-5 py-2"> <v-icon>mdi-store-outline</v-icon>Store</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn size="lx-small " class="px-5 py-2"><v-icon size="large" icon="mdi-email">
          </v-icon>cart</v-btn>
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
      <div class="d-flex container-fluid  bg-grey-lighten relative">
          <v-img class="bg-white align-center" width="860"  src="bg-image.jpg"></v-img>  
             <div class="absolute row container align-items-center">
                <div class="bg-transparent col-6">
                  <h2 class="text-5xl text-white mt-10 w-[350px]  pl-10">All banks are worried About fintech int</h2>
                </div>
                <div class="bg-green col-6 pl-5">
                </div>
              </div>
          </div>
    </v-main>
  </v-app>
</template>

<script>
import { firebase } from '@/firebase';

export default {
  name: 'nav-bar',

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