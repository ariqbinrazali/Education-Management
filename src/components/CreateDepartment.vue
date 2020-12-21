<template>
<div>
    <div class="container">
        <h3 class="mt-2">Create New Department</h3>
        <div class="row mx-auto">
            <div class="col-md-6 offset-md-3 mt-2">
                <form @submit.prevent="onSubmit">
                    <div class="form-group" :class="{invalid: $v.name.$error}">
                        <label for="name">Department Name</label>
                        <input type="string" class="form-control" @blur="$v.name.$touch()" id="name" v-model="name" />
                         <p v-if="!$v.name.required">This field must not be empty.</p>
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
import {required, } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            name: "",
        };
    },
    validations: {
        
        name: {
            required,
            
        },
        

    },
    methods: {
       async onSubmit() {
            const formData = {
                name: this.name,
            };
           let res = await axios.post("https://localhost:44386/api/Department", 
           formData)

           this.$router.push('/Department')
           
           return res
                
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