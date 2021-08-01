<template>
    <h3 class="text-center">Login</h3>
    <h6 class="text-center">Enter your Username and Password For Login or Signup</h6>
    <div class="card mt-4 p-4">
        <form class="theme-form">
            <div class="form-group">
                <label class="col-form-label">Email</label>
                <input type="text" class="form-control" placeholder="John Deo">
            </div>
            <div class="form-group">
                <label class="col-form-label">Password</label>
                <input type="password" class="form-control" placeholder="**********">
            </div>

            <div class="form-group">
                <button class="btn btn-success m-1" @click.prevent="login(true,'student')">student</button>
                <button class="btn btn-success m-1" @click.prevent="login(true,'admin')">admin</button>
                <button class="btn btn-success m-1" @click.prevent="login(true,'management')">management</button>
            </div>

            <div class="form-row">
                <div class="col-sm-3">
                    <button type="submit" class="btn btn-secondary">Sign In</button>
                </div>
                <div class="col-sm-8">
                    <div class="text-left mt-2 m-l-20">
                        Don't have an account? &nbsp;&nbsp;
                        <router-link :to="{ name: 'signup' }">singup</router-link>
                    </div>
                </div>

            </div>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods:{
        ...mapMutations([
            'set_auth_role_name',
            'set_check_auth_status',
        ]),
        login: function(status, role_name){
            this.set_auth_role_name(role_name);
            this.set_check_auth_status(status);
        }
    }
}
</script>

<style>

</style>