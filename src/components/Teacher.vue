<template>
<div>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-10">
                <h2>List of Teachers</h2>
            </div>
            <div class="col">
                <router-link to="/CreateTeacher" class="btn btn-lg  btn-light btn-outline-primary  mt-2" style="color: #333">Register New Teacher</router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4 mt-5" v-for="teacher in teachers" :key="teacher.id">
                <div class="card text-dark bg-light mb-3" style="border">
                    <div class="card-body">
                        <h5 class="card-title">{{ teacher.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            Teacher id : {{ teacher.id }}
                        </h6>
                        <h6 class="card-subtitle mb-2 text-muted">
                            Email : {{ teacher.email }}
                        </h6>
                        <h6 class="card-subtitle mb-2 text-muted">
                            {{ teacher.age }} Years old
                        </h6>
                        <h6 class="card-subtitle mb-2 text-muted">
                            {{ teacher.departmentId }} Department ID
                        </h6>
                        <div class="mt-4">
                            
                            <button a @click="onEdit(teacher.id)" class="btn btn-secondary mr-1">Edit Details</button>
                            <button class="btn btn-secondary" @click="onDelete(teacher.id),Reload()">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            teachers: {
                id: "",
                name: "",
                age: "",
                email: "",
                departmentId:"",
            }
        };
    },
    async created() {
        let res = await axios.get("https://localhost:44386/api/Teacher")
              
              this.teachers = res.data
    },

    methods: {
        onEdit(teacherId) {
            this.$router.push(`/EditTeacher/${teacherId}`)
        },
        onDelete(teacherId) {
            axios
                .delete(`https://localhost:44386/api/Teacher?teacherId=${teacherId}`)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));

        },
        Reload() {
            window.location.reload()
        },
    },
}
</script>
