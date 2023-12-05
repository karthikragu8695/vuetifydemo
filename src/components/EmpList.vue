<template>
    <v-container>
        <v-card-title  class="text-3xl">Employee Informations</v-card-title>
       <v-card>
            <v-table>
                <thead>
                    <tr>
                        <th>EmpId</th>
                        <th>EmpName</th>
                        <th>EmpPhone</th>
                        <th>EmpDesignation</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{ employee.id }}</td>
                    <td>{{employee.name}}</td>
                    <td>{{employee.phone}}</td>
                    <td>{{employee.designation}}</td>
                    <td><v-btn class="me-4" icon="mdi-pencil" @click="editEmp(employee)"></v-btn>
                <v-btn class="me-4 text-red" icon="mdi-delete" @click="deleteEmp(employee)"></v-btn> </td>
                </tr>
            </tbody>
            </v-table>    
       </v-card> 
            <v-btn variant="outlined" color="white" @click="show=true" class="mt-3">Add</v-btn>
       <v-dialog v-model="show">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Employee Profile</span>
                </v-card-title>
                <v-card-text >
                    <v-container >
                        <v-form ref="form" id="EmployeeForm">
                        <v-row justify="center">
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="id" :rules="IdRules" label="Employee Id" id="id"  required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="name" :rules="nameRules" label="Employee Name" id="name" type="name" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="phone" :rules="phoneRules" label="Employee Phone" id="Empphone" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="designation" :rules="designationRules" id="Empdesignation" label="Employee designation" required></v-text-field>
                            </v-col>
                        </v-row>
                    
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn varient="outlined" color="blue-darken-1" @click="show=false">close</v-btn>
                            <v-btn v-if="!editing" @click.prevent="add">save</v-btn>
                            <v-btn v-else @click="altupd()" >update</v-btn>
                        </v-card-actions>
                        </v-form>
                    </v-container>
                </v-card-text>
            </v-card>
       </v-dialog>
    </v-container>

</template>

<script>
import {firebase} from '../firebase'
export default{
    data(){
        return{
            id:'',
            IdRules:[
            v => !!v || 'Id is required',
            ],
            name:'',
            nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 10) || 'Name must be less than 10 characters',
      ],
            phone:'',
            phoneRules:[
            v => !!v || 'phone is required',
        v => (v && v.length >= 10) || 'Phone number needs to be at least 9 digits.',
            ],
            designation:'',
            designationRules: [
        v => !!v || 'designation is required',
        v => (v && v.length >= 10) || 'designation must be less than 10 characters',
      ],
            show:false,
            selectEmp:{},
            editing:false,

        }
    },
    methods:{
        async add(){
            const{ valid }=await this.$refs.form.validate()
            if(valid) {
                const employee={
                    id:this.id,
                    name:this.name,
                    phone:this.phone,
                    designation:this.designation
                }
                console.log(employee)
                firebase.database().ref('employee').push(employee)
                .then(() => {
                     console.log('employee added')
                     this.close()
                     this.$store.dispatch('getEmployees')
                })
                .catch((error)=>{
                    console.log(error.message)
                    this.close()
                })
            } 
        },
        close(){
            this.id=null,
            this.name=null,
            this.phone=null,
            this.designation=null
            this.show=false  
            this.editing=false
        },
        deleteEmp(emp){
            firebase.database().ref(`employee/${emp.iid}`).remove()
            .then(()=>{
                console.log('employee deleted')
            })
        },
        editEmp(emp){
            this.id=emp.id
            this.name=emp.name
            this.phone=emp.phone
            this.designation=emp.designation
            this.show=true
            this.editing=true
            this.selectEmp=emp
        },
        altupd(){
            const employee={
                    id:this.id,
                    name:this.name,
                    phone:this.phone,
                    designation:this.designation
                }
                console.log(this.selectEmp)
            firebase.database().ref('employee/'+this.selectEmp.iid).update(employee)
                .then((data) => {
                     console.log(data.val())
                     this.close()
                })
                .catch((error)=>{
                    console.log(error.message)
                    this.close()
                })
            // let targetobj=this.employees.find(obj =>obj.id=this.selectEmp.id)
            // targetobj.id=this.id
            // targetobj.name=this.name
            // targetobj.phone=this.phone
            // targetobj.designation=this.designation
            // this.close()
        }
    },
    computed:{
        employees(){
            return this.$store.getters.loadedEmployees
        }  
    }
}
</script>