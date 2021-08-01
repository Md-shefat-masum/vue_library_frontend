<template>
    <h3 class="text-center">Sign up</h3>
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

            <div class="form-row">
                <div class="col-sm-3">
                    <button type="submit" class="btn btn-secondary">Sign Up</button>
                </div>
                <div class="col-sm-8">
                    <div class="text-left mt-2 m-l-20">
                        Are you already user?&nbsp;&nbsp;
                        <router-link :to="{ name: 'login' }">login</router-link>
                    </div>
                </div>

            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>