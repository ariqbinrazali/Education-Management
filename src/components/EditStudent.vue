<template>
<div>
    <div class="container">
        <h3 class="mt-2">Edit Student</h3>
        <div class="row">
            <div class="col-md-6 offset-md-3 mt-2">
                <form @submit.prevent="onSubmit(students.id)">
                    <div class="form-group">
                        <label for="id">Student's Id</label>
                        <input type="string" readonly class="form-control-plaintext"  id="id" v-model.number="students.id" />
                        
                    </div>
                    <div class="form-group" :class="{invalid: $v.students.name.$error}">
                        <label for="name">Student's Name</label>
                        <input type="string" class="form-control" @blur="$v.students.name.$touch()" id="name" v-model="students.name" />
                        <p v-if="!$v.students.name.required">This field must not be empty.</p>
                    </div>
                    <div class="form-group" :class="{invalid: $v.students.age.$error}">
                        <label for="age">Student's Age</label>
                        <input type="int" class="form-control" @blur="$v.students.age.$touch()" id="age" v-model.number="students.age" />
                        <p v-if="!$v.students.age.required">This field must not be empty.</p>
                        <p v-if="!$v.students.age.minVal">Age must be at least {{ $v.students.age.$params.minVal.min }} years old.</p>
                    </div>
                    <div class="form-group" :class="{invalid: $v.students.email.$error}">
                        <label for="email">Student's Mail</label>
                        <input type="email" class="form-control" @blur="$v.students.email.$touch()" id="email" v-model="students.email" />
                         <p v-if="!$v.students.email.email">Please provide a valid email address.</p>
                        <p v-if="!$v.students.email.required">This field must not be empty.</p>
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
            students: {
                id: "",
                name: "",
                age: "",
                email: "",
            },
        };
    },
     validations: {
        students:{
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
        }
        }
        
    },
    created() {
        this.GetUser()
    },
    methods: {
        async onSubmit(studentId) {
            const formData = {
                id: this.students.id,
                name: this.students.name,
                age: this.students.age,
                email: this.students.email,
            };
            /// ada async ada await , await > tunggu proccess siap baru run next line 
            let res = await axios.patch(`https://localhost:44386/api/Student?studentId=${studentId}`,
                formData)
            
            this.$router.push('/Student')

            return res

        },
        async GetUser() {
            this.id = this.$route.params.id;
            let res = await axios.get(`https://localhost:44386/api/Student/${this.id}`)
            
          
            this.students = res.data
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