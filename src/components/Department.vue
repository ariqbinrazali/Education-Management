<template>
<div>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-10">
                <h2>List of Departments</h2>
            </div>
            <div class="col">
                <router-link to="/CreateDepartment" class="btn btn-lg  btn-light btn-outline-primary  mt-2 mt-2" style="color: #333">Create New Department</router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4 mt-5" v-for="department in departments" :key="department.id">
                <div class="card text-dark bg-light mb-3" style="border">
                    <div class="card-body">
                        <h5 class="card-title">{{ department.name }} Department</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            Department id : {{ department.id }}
                        </h6>

                        <div class="mt-4">
                            
                            <button @click="onEdit(department.id)" class="btn btn-secondary mr-1">Edit Details</button>
                            <button class="btn btn-secondary" @click="onDelete(department.id),Reload()">
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
            departments: {
                id: "",
                name: "",
            }
        };
    },
    async created() {
        let res = await axios.get("https://localhost:44386/api/Department")
            
                this.departments = res.data;
           
    },

    methods: {
        onDelete(departmentId) {
            axios
                .delete(`https://localhost:44386/api/Department?departmentId=${departmentId}`)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));

        },
        Reload() {
            window.location.reload()
        },
        onEdit(departmentId) {
            this.$router.push(`/EditDepartment/${departmentId}`)
        },
    },
}
</script>
