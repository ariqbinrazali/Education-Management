<template>
<div>
    <div class="container">
        <h3 class="mt-2">Edit Teacher</h3>
        <div class="row">
            <div class="col-md-6 offset-md-3 mt-2">
                <form @submit.prevent="onSubmit(teachers.id)">
                    <div class="form-group">
                        <label for="id">Teacher's Id</label>
                        <input type="string" readonly class="form-control-plaintext"  id="id" v-model.number="teachers.id" />
                        
                    </div>
                    <div class="form-group" :class="{invalid: $v.teachers.name.$error}">
                        <label for="name">Teacher's Name</label>
                        <input type="string" class="form-control" @blur="$v.teachers.name.$touch()" id="name" v-model="teachers.name" />
                        <p v-if="!$v.teachers.name.required">This field must not be empty.</p>
                    </div>
                    <div class="form-group" :class="{invalid: $v.teachers.age.$error}">
                        <label for="age">Teacher's Age</label>
                        <input type="int" class="form-control" @blur="$v.teachers.age.$touch()" id="age" v-model.number="teachers.age" />
                        <p v-if="!$v.teachers.age.required">This field must not be empty.</p>
                        <p v-if="!$v.teachers.age.minVal">Age must be at least {{ $v.teachers.age.$params.minVal.min }} years old.</p>
                    </div>
                    <div class="form-group" :class="{invalid: $v.teachers.email.$error}">
                        <label for="email">Teacher's Mail</label>
                        <input type="email" class="form-control" @blur="$v.teachers.email.$touch()" id="email" v-model="teachers.email" />
                         <p v-if="!$v.teachers.email.email">Please provide a valid email address.</p>
                        <p v-if="!$v.teachers.email.required">This field must not be empty.</p>
                    </div>
                     <div class="form-group" :class="{invalid: $v.teachers.departmentId.$error}">
                        <label for="age">Teacher's Department ID</label>
                        <input type="int" class="form-control" @blur="$v.teachers.departmentId.$touch()" id="departmentId" v-model.number="teachers.departmentId" />
                        <p v-if="!$v.teachers.departmentId.required">This field must not be empty.</p>
                    </div>

                    <div>
                        <button type="submit" :disabled= "$v.$invalid" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import {required, email, numeric, minValue, } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            teachers: {
                id: "",
                name: "",
                age: "",
                email: "",
                departmentId:"",
            },
        };
    },
     validations: {
        teachers:{
        email: {
            required,
            email
        },
        name: {
            required,
            
        },
        age: {
            required,
            numeric,
            minVal: minValue(17)
        },
         departmentId: {
            required,
            numeric,
           
        }
        }
        
    },
    created() {
        this.GetUser()
    },
    methods: {
        async onSubmit(teacherId) {
            const formData = {
                id: this.teachers.id,
                name: this.teachers.name,
                age: this.teachers.age,
                email: this.teachers.email,
                departmentId: this.teachers.departmentId
            };
            /// ada async ada await , await > tunggu proccess siap baru run next line 
            let res = await axios.patch(`https://localhost:44386/api/Teacher?teacherId=${teacherId}`,
                formData)
            
            this.$router.push('/Teacher')

            return res

        },
        async GetUser() {
            this.id = this.$route.params.id;
            let res = await axios.get(`https://localhost:44386/api/Teacher/${this.id}`)
            
          
            this.teachers = res.data
            ///console.log("respon",this.students)
        },
    },
};
</script>
<style>
.form-group.invalid label {
   color: red;

}
.form-group.invalid input{
    border: 1px solid red;
    background-color: #ffc9aa;
}

</style>