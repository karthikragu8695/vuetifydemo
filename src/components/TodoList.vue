<template>
    <section>
        <v-container>
            <v-card>
                <v-toolbar color="cyan-lighten-1 ">
                    <v-toolbar-title class="text-center text-white text-h4" >Todo List</v-toolbar-title>
                </v-toolbar>
                    <v-card class="text-right  mt-10 justify-center flex ">
                        <v-card-text class="flex w-[500px] mx-auto">
                             <v-text-field  v-model="todo" class="border border-white bg-white " density="compact" variant="solo" label="Add New Task"  single-line    hide-details >
                            </v-text-field>
                            <v-btn class="border border-white ml-2 g-5" v-if="!show" @click="add">Add</v-btn>
                            <v-btn class="border border-white bg-blue  ml-2 g-5" v-if="show" @click="updateLi">update</v-btn>
                        </v-card-text>
                    </v-card>
            <v-card class="mt-10 ml-20 ">
                <v-list-item v-for="list in todolist" :key="list" value="notifications">
                    <v-layout class="overflow-visible " >
                    <v-list-item-action start> 
                        <v-checkbox-btn color="green"  @click="setComplete(list)" v-model="list.completed"></v-checkbox-btn>
                        </v-list-item-action>
                                <v-list-item-title class="mt-4">{{ list.todo }}</v-list-item-title>
                                <v-spacer></v-spacer>
                                <v-btn class="text-red" icon="mdi-delete" size="large"  @click="deleteLi(list)"></v-btn>
                                <v-btn class="text-blue"  icon="mdi-pencil" size="large"  @click="editLi(list)"></v-btn>
                         </v-layout>
                    </v-list-item>
                    <v-card class="text-end mt-10">
                        <v-btn class="text-violet bg-blue"  size="large"  @click="clear" >Clear All</v-btn>
                    </v-card>
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
            show:false,
            store:{},
            
        }
    },
    methods:{
        add(){
           const lists={
           todo: this.todo,
           completed:false
           }
           firebase.database().ref('TodoLists').push(lists)
           .then(()=>{
            console.log('added')
            this.close()
           })
           .catch((error)=>{
            console.log(error.message)
            this.close()
           })
        },
        deleteLi(list){
            console.log(`TodoLists/${list.iid}`);
           firebase.database().ref(`TodoLists/${list.iid}`).remove()
           .then(()=>{
            console.log("list deleted")
            this.show=false
           })
        },
        setComplete(list){
            firebase.database().ref(`TodoLists/${list.iid}`).update({
                completed: !list.completed
            })
            
        },
        editLi(list){
            this.todo=list.todo
            this.show=true
            this.store=list
        },
        updateLi(){
            const list={
                todo:this.todo
            }
            firebase.database().ref(`TodoLists/${this.store.iid}`).update(list)
            this.close()
        },
        close(){
            this.show=false
            this.todo=null
        },
        clear(){
            firebase.database().ref(`TodoLists`).remove()
        }
    },

    computed:{
        todolist(){
            return this.$store.getters.getLists
        }
    }
}
</script>