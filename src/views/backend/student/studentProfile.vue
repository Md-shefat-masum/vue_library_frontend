<template>
  <div class="user-profile row justify-content-center">
    <div class="col-sm-12 col-md-8 col-lg-9">
      <div class="card hovercard text-center">
        <div class="cardheader"></div>
        <div class="user-image">
          <div class="avatar">
            <img
              v-if="get_auth_info.image"
              alt=""
              :src="get_profile_image_url"
              class="img-fluid"
            />
            <img v-else alt="" src="/assets/images/user/11.png" />
          </div>
          <div class="icon-wrapper">
            <form enctype="multipart/form-data" id="change_profile_form">
              <label for="image">
                <i class="icofont icofont-pencil-alt-5"></i>
              </label>
              <input
                type="file"
                id="image"
                @change="change_profile"
                name="image"
                style="display: none"
              />
            </form>
          </div>
        </div>
        <div class="info">
          <div class="row">
            <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
              <div class="row">
                <div class="col-md-6">
                  <div class="ttl-info text-left">
                    <h6>
                      <i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;Email
                    </h6>
                    <span>{{ get_auth_info.email }}</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ttl-info text-left">
                    <h6><i class="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;BOD</h6>
                    <span>02 January 1988</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
              <div class="user-designation">
                <div class="title">
                  <a target="_blank" href="#">{{ get_auth_info.username }}</a>
                </div>
                <div class="desc mt-2">
                  {{ get_auth_info.role_name }}
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
              <div class="row">
                <div class="col-md-6">
                  <div class="ttl-info text-left">
                    <h6>
                      <i class="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Contact Us
                    </h6>
                    <span>India +91 123-456-7890</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ttl-info text-left">
                    <h6>
                      <i class="fa fa-location-arrow"></i
                      >&nbsp;&nbsp;&nbsp;Location
                    </h6>
                    <span>B69 Near Schoool Demo Home</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="social-media">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fa fa-google-plus"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fa fa-instagram"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fa fa-rss"></i></a>
              </li>
            </ul>
          </div>
          <div class="follow">
            <div class="row">
              <div class="col-6 text-md-right border-right">
                <div class="follow-num counter">25869</div>
                <span>Follower</span>
              </div>
              <div class="col-6 text-md-left">
                <div class="follow-num counter">659887</div>
                <span>Following</span>
              </div>
            </div>
          </div>
          <div class="row card mt-4">
            <div class="col-12 card-body">
              <form
                action="#"
                id="update_profile"
                @submit.prevent="update_profile"
              >
                <h3>Update Profile</h3>
                <div class="form-group text-left">
                  <label for="">Username</label>
                  <input
                    type="text"
                    name="name"
                    :value="get_auth_info.username"
                    class="form-control"
                  />
                </div>
                <div class="form-group text-left">
                  <label for="">Password</label>
                  <input type="text" name="password" class="form-control" />
                </div>
                <div class="form-group text-left">
                  <label for="">Confirm Password</label>
                  <input
                    type="text"
                    name="password_confirmation"
                    class="form-control"
                  />
                </div>
                <div class="form-group text-left">
                  <button class="btn btn-info">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "student-profile",
  created: function () {
    console.log(this.get_auth_info);
  },
  methods: {
    ...mapMutations(["set_auth_info"]),
    update_profile: function () {
      let form_data = new FormData(document.getElementById("update_profile"));
      window.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.get_auth_token}`;
      window.axios.post("/user/update-profile", form_data).then((res) => {
        console.log(res.data);
        this.set_auth_info(res.data.user);
      });
    },

    change_profile: function () {
      let form_data = new FormData(
        document.getElementById("change_profile_form")
      );
      window.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.get_auth_token}`;
      window.axios.post("/user/update-profile-pic", form_data).then((res) => {
        // console.log(res.data);
        this.set_auth_info(res.data.user);
      });
    },
  },
  computed: {
    ...mapGetters(["get_auth_info", "get_auth_token", "get_profile_image_url"]),
  },
};
</script>

<style></style>
