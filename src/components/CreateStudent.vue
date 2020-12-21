<template>
<div>
    <div class="container">
        <h3 class="mt-2">Register New Student</h3>
        <div class="row">
            <div class="col-md-6 offset-md-3 mt-2">
                <form @submit.prevent="onSubmit">
                    <div class="form-group" :class="{invalid: $v.name.$error}">
                        <label for="name">Student's Name</label>
                        <input type="string" class="form-control" @blur="$v.name.$touch()" id="name" v-model="name" >
                        <p v-if="!$v.name.required">This field must not be empty.</p>
                        
                    </div>
                    <div class="form-group" :class="{invalid: $v.age.$error}">
                        <label for="age">Student's Age</label>
                        <input type="int" class="form-control" @blur="$v.age.$touch()" id="age" v-model.number="age" >
                        <p v-if="!$v.age.required">This field must not be empty.</p>
                        <p v-if="!$v.age.minVal">Age must be at least {{ $v.age.$params.minVal.min }} years old.</p>
                    </div>
                    <div class="form-group" :class="{invalid: $v.email.$error}">
                        <label for="email">Student's Mail</label>
                        <input type="email" class="form-control" @blur="$v.email.$touch()" id="email" v-model="email" >
                        <p v-if="!$v.email.email">Please provide a valid email address.</p>
                        <p v-if="!$v.email.required">This field must not be empty.</p>

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
import axios from 'axios'
import {required, email, numeric, minValue, } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            name: '',
            age: null,
            email: ''
        }
    },
    validations: {
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

    },
    methods: {
        async onSubmit() {
            const formData = {
                name: this.name,
                age: this.age,
                email: this.email
            };
            let res = await axios.post('https://localhost:44386/api/Student',
                formData)

            this.$router.push('/Student')

            return res

        }
    }
}
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