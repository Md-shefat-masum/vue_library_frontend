import axios from "axios";

// states
const state = {
  check_auth_status: false,
  auth_info: {
    first_name: null,
    last_name: null,
    email: null,
    username: null,
    image: null,
    phone: null,
    address: null,
    status: null,
    role_name: "guest",
  },
  auth_role_name: "guest",
  auth_token: "",
  // server_url: "http://127.0.0.1:8000",
  server_url: "https://libraryapi.sobujdiganta.com",
};

// getters
const getters = {
  get_check_auth_status: (state) => state.check_auth_status,
  get_auth_info: (state) => state.auth_info,
  get_auth_role_name: (state) => state.auth_role_name,
  get_auth_token: (state) => state.auth_token,
  get_server_url: (state) => state.server_url,
  get_profile_image_url: (state) =>
    state.server_url + "/" + state.auth_info.image,
};

// action
const actions = {
  fetch_auth_info: function () {
    axios.get("/api/links").then((res) => {
      console.log(res.data);
    });
  },
};

// mutators

const mutations = {
  set_auth_role_name: function (state, auth_role_name) {
    state.auth_role_name = auth_role_name;
  },
  set_check_auth_status: function (state, check_auth_status) {
    state.check_auth_status = check_auth_status;
  },
  set_auth_info: function (state, auth_info) {
    // console.log(auth_info);
    state.auth_info.username = auth_info.name;
    state.auth_info.email = auth_info.email;
    state.auth_info.role_name = auth_info.user_role.name;
    state.auth_info.image = auth_info.image;

    this.commit("set_auth_role_name", auth_info.user_role.name);
    this.commit("set_check_auth_status", true);
  },
  set_logout: function (state) {
    state.check_auth_status = false;
    state.auth_role_name = "guest";
    state.auth_info = {
      first_name: null,
      last_name: null,
      email: null,
      username: null,
      image: null,
      phone: null,
      address: null,
      status: null,
      role_name: "guest",
    };
  },
  set_auth_token: function (state, info) {
    state.auth_token = info.token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
