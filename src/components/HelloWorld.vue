<template>
    <section class="container ">
      <div class="bg-gray-600 mx-auto w-[350px] h-[450px] rounded-[10px] ">
        <h2 v-if="!login" class="text-center mt-10 pt-5 text-2xl text-orange-600 font-bold">sign up</h2>
        <h2 v-else class="text-center mt-10 pt-5 text-2xl text-orange-600 font-bold">sign in</h2>
        <div class="text-center mt-10 ">
          <input type="text" v-model="email" placeholder="Enter the email" class="text-center w-[200px] mx-auto border border-black w-[300px]  px-2 py-1 focus:outline-none " >
          <input type="text" v-model="password" placeholder="password" class="text-center w-[200px] mx-auto border border-black w-[300px]  mt-5 px-2 py-1 focus:outline-none  " >
          <input type="text" v-model="confirmpassword" v-if="!login" placeholder="confirm password" class="text-center w-[200px] mx-auto border border-black w-[300px] mt-5  px-2 py-1 focus:outline-none  " ><br>
          <button v-if="!login" class="bg-orange-500 mt-10 w-[300px] px-2 py-1 rounded-[10px] text-white" @click="registerUser">sign up</button>
          <button v-else  @click="signIn" class="bg-orange-500 mt-10 w-[300px] px-2 py-1 rounded-[10px] text-white">sign in</button>
          <p v-if="!login" class="mt-5">Already have an account? <button class="text-orange-400"  @click="login=true">Login here</button></p>
          <p v-else class="mt-5">Create a new account? <button class="text-orange-400"  @click="login=false">SignUp here</button></p>
          
          
      </div>
      <dialog  :open="loading" class="bg-transparent ml-[500px] text-center  w-[300px] mt-10  " >
                    <p>please wait</p>
                </dialog>
                <dialog :open="error" class="bg-transparent  ml-[500px] text-center mb-2  w-[300px] mt-3 "  >
                    <p class="text-red-500 w-[300px]">{{ errortext }}</p> 
                    <button @click="error=false" class="border border-black px-5 py-1 text-black bg-white mt-1">close</button>
                </dialog>
        </div>
        
      
    </section>
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

