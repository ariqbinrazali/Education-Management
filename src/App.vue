<template>
<div>
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light font-weight-bold" style="background-color: #e3f2fd;">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item active-toggle">
                            <router-link class="nav-link" to="/" href="">Home </router-link>
                        </li>
                        <li class="nav-item active-toggle">
                            <router-link class="nav-link" to="/Department">Department</router-link>
                        </li>
                        <li class="nav-item active-toggle">
                            <router-link class="nav-link" to="/Teacher">Teacher</router-link>
                        </li>
                        <li class="nav-item active-toggle">
                            <router-link class="nav-link" to="/Student">Student</router-link>
                        </li>
                    </ul>
                    <div class="mx-auto " style="padding-right:133px">
                        <a class="navbar-brand">Education Management System</a>
                    </div>
                    <div class="form-inline my-lg-0">
                        <button type="button" class="btn btn-outline-info  mr-sm-2" data-toggle="modal" data-target="#exampleModal">Log In</button>
                        <router-link to='/SignUpForm' class="btn btn-outline-info  my-sm-0">Sign Up</router-link>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary bg-gradient">
                                        <h5 class="modal-title" id="exampleModalLabel">Sign In
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                                            </svg>
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body bg-light ">
                                        <form>
                                            <h3 class="col">Enter Your Details</h3>
                                            <div class="form-group mt-4 ">

                                                <label for="usernameInput" class="col ml-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                    </svg> Username: </label>
                                                <input type="text" class="form-control mr-5" id="username" placeholder="Username" v-model="username"/>
                                            </div>
                                            <div class="form-group my-2 ">
                                                <label for="passwordInput" class="col ml-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                    </svg>
                                                    Password: </label>
                                                <input type="text" class="form-control mr-5" id="password" placeholder="Password" v-model="password" />
                                            </div>
                                            <div class="mx-auto" style="width: 170px; ">
                                                <button type="submit" class="btn btn-primary my-2 " style="width: 150px ">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>

        <div class="body text-white">

            <router-view></router-view>

        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        onSubmit (){
            const formData = {
                username: this.username,
                password: this.password
            }
            this.$store.dispatch('login',this.formData)
            .then(() => {
                this.$router.push("/")
            })
        }
    }
}
</script>

<style>
body {
    background-image: url("https://hawkesburyit.com.au/wp-content/uploads/2016/04/website-background.gif");
}
</style>
