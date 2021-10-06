<template>
  <h3 class="text-center">Forget Password</h3>
  <h6 class="text-center">Enter your email</h6>
  <div class="card mt-4 p-4">
    <form class="theme-form" id="signup_form" @submit.prevent="forget_submit">
      <div class="form-group">
        <label class="col-form-label"
          >Email <sub>you will recive a token.</sub></label
        >
        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="test@gmail.com"
        />
      </div>

      <div class="form-row">
        <div class="col-sm-3">
          <button type="submit" class="btn btn-secondary">Submit Email</button>
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
  <div class="card mt-4 p-4">
    <form class="theme-form" id="token_form" @submit.prevent="token_submit">
      <div class="form-group">
        <label class="col-form-label"
          >Token <sub>you will recive a password</sub></label
        >
        <input
          type="text"
          name="forget_token"
          class="form-control"
          placeholder="**********"
        />
      </div>

      <div class="form-row">
        <div class="col-sm-3">
          <button type="submit" class="btn btn-secondary">Submit</button>
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
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["set_auth_token", "set_auth_info"]),
    forget_submit: function () {
      let form_data = new FormData(document.getElementById("signup_form"));

      window.axios.post("/user/forget-password", form_data).then((res) => {
        console.log(res.data);
        window.alert("a mail has been sent to your email");
      });
      // .catch((err)=>{
      //     console.log(err);
      // })
    },
    token_submit: function () {
      let form_data = new FormData(document.getElementById("token_form"));

      window.axios.post("/user/forget-token", form_data).then((res) => {
        console.log(res.data);
        document.getElementById("token_form").reset();
        window.alert(
          "please check your email . soon you will recive a password."
        );
        this.$router.replace({ name: "login" });
      });
      // .catch((err)=>{
      //     console.log(err);
      // })
    },
  },
};
</script>

<style></style>
