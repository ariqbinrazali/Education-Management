import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Department from '../components/Department.vue'
import Teacher from '../components/Teacher.vue'
import Student from '../components/Student.vue'
import CreateStudent from '../components/CreateStudent.vue'
import CreateDepartment from '../components/CreateDepartment.vue'
import CreateTeacher from '../components/CreateTeacher.vue'
import EditStudent from '../components/EditStudent.vue'
import EditDepartment from '../components/EditDepartment.vue'
import EditTeacher from '../components/EditTeacher.vue'
import SignUpForm from '../components/SignUpForm.vue'
import testcomponent from '../components/testcomponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/Department',
    name:'Department',
    component: Department
  },
  {
    path:'/CreateDepartment',
    name:'CreateDepartment',
    component: CreateDepartment
  },
  {
    path:'/EditDepartment/:id',
    name:'EditDepartment',
    component: EditDepartment
  },
  {
    path:'/Teacher',
    name:'Teacher',
    component: Teacher
  },
  {
    path:'/CreateTeacher',
    name:'CreateTeacher',
    component: CreateTeacher
  },
  {
    path:'/Student',
    name:'Student',
    component: Student
  },
  {
    path:'/CreateStudent',
    name:'CreateStudent',
    component: CreateStudent
  },
  {
    path:'/EditStudent/:id',
    name:'EditStudent',
    component: EditStudent
  },
  {
    path:'/EditTeacher/:id',
    name:'EditTeacher',
    component: EditTeacher
  },
  {
    path:'/SignUpForm',
    name:'SignUpForm',
    component: SignUpForm
  },
  {
    path:'/testcomponent',
    name:'testcomponent',
    component:testcomponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
