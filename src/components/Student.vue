<template>
<div>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-10">
                <h2>List of Students</h2>
            </div>
            <div class="col">
                <router-link to="/CreateStudent" class="btn btn-lg btn-secondary border-white bg-white mt-2" style="color: #333">Create New</router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4 mt-5" v-for="student in students" :key="student.id">
                <div class="card" style="border">
                    <div class="card-body">
                        <h5 class="card-title">{{ student.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            Student id : {{ student.id }}
                        </h6>
                        <h6 class="card-subtitle mb-2 text-muted">
                            Email : {{ student.email }}
                        </h6>
                        <h6 class="card-subtitle mb-2 text-muted">
                            {{ student.age }} Years old
                        </h6>
                        <div class="mt-4">
                            <button class="btn btn-secondary mr-1">View Details</button>
                            <button a @click="onEdit(student.id)" class="btn btn-secondary mr-1">Edit Details</button>
                            <button class="btn btn-secondary" @click="onDelete(student.id),Reload()">
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
            students: {
                id: "",
                name: "",
                age: "",
                email: "",
            }
        };
    },
    async created() {
        let res = await axios.get("https://localhost:44386/api/Student")
              
              this.students = res.data
    },

    methods: {
        onEdit(studentId) {
            this.$router.push(`/EditStudent/${studentId}`)
        },
        onDelete(studentId) {
            axios
                .delete(`https://localhost:44386/api/Student?studentId=${studentId}`)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));

        },
        Reload() {
            window.location.reload()
        },
    },
}
</script>
