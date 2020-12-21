<template>
<div class="container">
    <h2>Modal Login Example</h2>

    <!-- Trigger the modal with a button -->
    <button type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#myModal" id="myBtn">
        Login
    </button>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" style="padding:35px 50px;">
                    <button type="button" class="close" data-dismiss="modal">
                        &times;
                    </button>
                    <h4>Login</h4>
                </div>
                <div class="modal-body" style="padding:40px 50px;">
                    <form role="form">
                        <div class="form-group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z" />
                            </svg>
                            <label for="usrname"><i class="glyphicon glyphicon-cloud"></i>
                                Username</label>
                            <input type="text" class="form-control" id="usrname" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="psw"><span class="glyphicon glyphicon-eye-open"></span>
                                Password</label>
                            <input type="text" class="form-control" id="psw" placeholder="Enter password" />
                        </div>

                        <button type="submit" class="btn btn-success btn-block">
                            <span class="glyphicon glyphicon-off"></span> Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style></style>
