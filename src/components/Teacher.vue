<template>
<div>
    <div class="container">
        <h1>GETALL</h1>
        <div class="row">
            <div class="col-lg-4" v-for="teacher in teachers" :key="teacher.id">
                <div class="card" style="border">
                    <div class="card-body">
                        <h5 class="card-title">{{teacher.name}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{teacher.age}}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">{{teacher.email}}</h6>

                        <router-link tag="button" :to="`/GetAll/${teacher.id}/EditOne`">Edit</router-link>
                        <!--<router-link tag="button"
                        :to="{ name:'EditOne', params: { id: teacher.id}  }"
                        class="btn btn-success">Edit User</router-link>-->
                        <!-- <button class="btn btn-success" @click="onEdit(teacher.id)">Edit</button>-->
                        <button class="btn btn-danger" @click="onDelete(teacher.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h1>{{message}}</h1>
</div>
</template>

<script>
import axios from 'axios'
//import EditOneVue from './EditOne.vue';//

export default {
    data() {
        return {
            teachers: {
                id: "",
                name: "",
                age: "",
                email: "",

            },
            message: ''
        }
    },
    created() {
        axios.get('https://localhost:44386/api/Teacher')
            .then(res => {
                this.teachers = res.data
                this.message = 'Successful'
            })
            .catch(err => console.log(err));
    },

    methods: {
        onDelete(teacherId) {
            axios.delete(`https://localhost:44386/api/Teacher?teacherId=${teacherId}`)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        },

        /// onEdit(teacherId){
        ///  this.$router.push(`/GetAll/${teacherId}/EditOne`);

        /// }
    },
}
</script>
