<template>
<div>
    <div class="container">
        <h3 class="mt-2">Edit Department</h3>
        <div class="row">
            <div class="col-md-6 offset-md-3 mt-2">
                <form @submit.prevent="onSubmit(department.id)">
                    <div class="form-group">
                        <label for="id">Deparment Id</label>
                        <input type="string" readonly class="form-control-plaintext" id="id" v-model.number="departments.id" />

                    </div>
                    <div class="form-group" :class="{invalid: $v.name.$error}">
                        <label for="name">Department Name</label>
                        <input type="string" class="form-control" @blur="$v.departments.name.$touch()" id="name" v-model="departments.name" />
                        <p v-if="!$v.departments.name.required">This field must not be empty.</p>
                    </div>

                    <div>
                        <button type="submit" :disabled="$v.$invalid" class="btn btn-primary">Submit</button>
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
            departments: {
                id: "",
                name: "",
                
            },
        };
    },
     validations: {
        departments:{

        
        name: {
            required,
            
        },
        }

    },
    created() {
        this.GetUser()
    },
    methods: {
        async onSubmit(departmetnId) {
            const formData = {
                id: this.departments.id,
                name: this.departments.name,
                
            };
            /// ada async ada await , await > tunggu proccess siap baru run next line 
            let res = await axios.patch(`https://localhost:44386/api/Department?departmentId=${departmentId}`,
                formData)
            
            this.$router.push('/Department')

            return res

        },
        async GetUser() {
            this.id = this.$route.params.id;
            let res = await axios.get(`https://localhost:44386/api/Department/${this.id}`)
            
          
            this.departments = res.data
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