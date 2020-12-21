<template>
<div>
    <div class="container">
        <h3 class="mt-2">Register New Teacher</h3>
        <div class="row">
            <div class="col-md-6 offset-md-3 mt-2">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="string" class="form-control" id="name" v-model="name" />
                    </div>
                    <div class="form-group">
                        <label for="age">Your Age</label>
                        <input type="int" class="form-control" id="age" v-model.number="age" />
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input type="email" class="form-control" id="email" v-model="email" />
                    </div>

                    <div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            age: null,
            email: ''
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                name: this.name,
                age: this.age,
                email: this.email
            }
            axios
                .post('https://localhost:44386/api/Student', formData)
                .then((res) => console.log(res))
                .catch((error) => console.log(error))
        }
    }
}
</script>
