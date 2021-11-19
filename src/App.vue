<template>
  <div>
    <div v-if="get_check_auth_status">
      <dashboard></dashboard>
    </div>

    <div v-else>
      <router-view />
    </div>

  </div>
</template>

<script>
import dashboard from "./views/backend/dashboard.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { dashboard },
  data: function () {
    return {};
  },
  created: function () {
    this.chech_auth_role();
    // console.log(this.get_check_auth_status);
    this.check_auth_status();
  },
  updated: function () {
    console.log(this.get_check_auth_status);
    console.log(this.get_auth_role_name);
  },
  watch: {
    get_check_auth_status: {
      handler: function () {
        this.check_auth_status();
      },
    },
  },
  methods: {
    // ...mapActions(['']),
    ...mapMutations(["set_logout", "set_auth_token"]),
    chech_auth_role: function () {
      if (this.get_check_auth_status) {
        if (this.get_auth_role_name == "admin") {
          this.$router.replace({ name: "admin" });
        } else if (this.get_auth_role_name == "student") {
          this.$router.replace({ name: "student" });
        } else if (this.get_auth_role_name == "management") {
          this.$router.replace({ name: "management" });
        } else {
          this.set_logout();
          this.$router.replace({ name: "login" });
        }
      } else {
        // this.$router.replace({ name: "login" });
        this.$router.replace({ name: "homePage" });
      }
    },
    check_auth_status: function () {
      console.log("changed status");
      this.chech_auth_role();

      if (this.get_check_auth_status == true) {
        console.log('set token');
        window.axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${this.get_auth_token}`;
      } else {
        this.set_auth_token({ token: null });
        delete window.axios.defaults.headers.common.Authorization;
      }
    },
  },
  computed: {
    ...mapGetters([
      "get_check_auth_status",
      "get_auth_role_name",
      "get_auth_token",
    ]),
  },
};
</script>
