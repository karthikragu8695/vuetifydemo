<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col justify="center" align="center" cols="12">
                <v-card max-width="700px" title="sign in">
                    <v-card-text>
                        <v-text-field v-model="email" label="Email"></v-text-field>
                        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="signIn" :loading="loading" block variant="outlined" color="green">sign up</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {firebase} from '../firebase'
export default{
   name:'hello-world',
   data(){
    return {
      login:false,
      email:'',
      password:'',
      confirmpassword:'',
      loading:false,
      error:false,
      errortext:''
    }
   },
   methods:{
    registerUser(){
      this.loading=true
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
      .then((data)=>{
        this.loading=false
        console.log(data)
      })
      .catch((error)=>{
        console.log(error)
        this.loading=false
        this.errortext=error.message
        this.error=true
      })
    },
    async signIn(){
      this.loading=true
      firebase.auth().signInWithEmailAndPassword(this.email,this.password)
      .then((data)=>
      {
        this.loading=false
        console.log(data)
      })
      .catch((error)=>{
        console.log(error)
        this.loading=false
        this.errortext=error.message
        this.error=true
      })
    }
    
   }
}
</script>