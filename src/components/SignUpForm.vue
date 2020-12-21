<template>
<div>
    <div class="container">
        <h3 class="mt-4">Register New User </h3>
        <div class="container ">
            <div class="row pt-4 mx-auto" style="width: 100px">
                <h3><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path fill-rule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg></h3>
            </div>
            <div class="row py-2 ">
                <div class="col-md-6 offset-md-3 mt-2 bg-light bg-gradient py-4">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group" :class="{invalid: $v.name.$error}">
                            <label for="name">Username</label>
                            <input type="string" class="form-control" @blur="$v.name.$touch()" id="name" v-model="name">
                            <p v-if="!$v.name.required">This field must not be empty.</p>
                        </div>
                        <div class="form-group" :class="{invalid: $v.password.$error}">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" @blur="$v.password.$touch()" id="password" v-model="password">
                            <p v-if="!$v.password.required">This field must not be empty.</p>
                            <p v-if="!$v.password.minLength">must be at least 6 characters</p>

                        </div>
                        <div class="form-group" :class="{invalid: $v.repeatPassword.$error}">
                            <label for="Confirm Password">Confirm Password</label>
                            <input type="password" class="form-control" @blur="$v.repeatPassword.$touch()" id="repeatPassword" v-model="repeatPassword">
                            <p v-if="!$v.repeatPassword.sameAsPassword">Password must be identical</p>
                            <p v-if="!$v.repeatPassword.required">This field must not be empty.</p>

                        </div>

                        <div>
                            <button type="submit" :disabled="$v.$invalid" class="btn btn-primary" style="width: 100px">Submit</button>
                            <button type="reset" class="btn btn-warning ml-3" style="width: 100px">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import {
    required,
    email,
    numeric,
    minValue,
    minLength,
    sameAs
} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            name: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {

        name: {
            required,
        },
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
            required,
            sameAsPassword: sameAs('password')
        }

    },

}
</script>

<style>
.form-group.invalid label {
    color: red;

}

.form-group.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
}
</style>
