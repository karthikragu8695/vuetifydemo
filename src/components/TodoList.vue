<template>
    <section>
        <v-container>
            <v-card>
                <v-toolbar color="cyan-lighten-1">
                    <v-btn variant="text" icon="mdi-menu"></v-btn>
                    <v-toolbar-title>Todo List</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" icon="mdi-magnify"></v-btn>
                </v-toolbar>
                    <v-card class="text-right  mt-10 justify-center flex ">
                        <v-card-text class="flex w-[500px] mx-auto">
                             <v-text-field  v-model="todo" class="border border-white bg-white " density="compact" variant="solo" label="Add New Task"  single-line    hide-details >
                            </v-text-field>
                            <v-btn class="border border-white ml-2 g-5 " @click="add">Add</v-btn>
                        </v-card-text>
                    </v-card>
            <v-card class="mt-10 ml-20 space-between h-[400px]">
                <v-list-item v-for="list in lists" :key="list" value="notifications">
                        <template v-slot:prepend="{ isActive }">
                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                    </v-list-item-action>
                        </template>
                        <v-card class=" w-[700px] space-x-8">
                            <v-list-item-title class="inline">{{ list }}</v-list-item-title>
                            <v-btn icon="mdi-delete" size="large" @click="deleteLi(todo)"></v-btn>
                        </v-card>
                </v-list-item>
            </v-card>
        </v-card>
        </v-container>
    </section>
</template>

<script>
import {firebase} from '../firebase'
export default{
    data(){
        return{
            todo:'',
            
        }
        
    },
    methods:{
        add(){
           const lists={
           todo: this.todo
           }
           firebase.database().ref('TodoLists').push(lists)
           .then(()=>{
            console.log('added')
            this.close()
            this.$store.dispatch('getLists')
           })
           .catch((error)=>{
            console.log(error.message)
            this.close()
           })
        },
        deleteLi(todo){
           firebase.database().ref(`employee/${todo}`).remove()
           .then(()=>{
            console.log("list deleted")
           })
        },
        close(){
            this.todo='';
        }
    },
    computed:{
        lists(){
            return this.$store.getters.getLists
        }
    }
}
</script>