<template>
  <div class="page-sidebar custom-scrollbar">
    <div class="sidebar-user text-center">
      <div>
        <img
          v-if="get_auth_info.image"
          alt=""
          class="img-50 rounded-circle"
          :src="get_profile_image_url"
        />
        <img
          v-else
          class="img-50 rounded-circle"
          src="/assets/images/user/1.jpg"
          alt="#"
        />
      </div>
      <h6 class="mt-3 f-12">{{ get_auth_info.username }}</h6>
    </div>
    <ul class="sidebar-menu">
      <li v-if="get_auth_role_name == 'admin'">
        <div class="sidebar-title">Admin</div>
        <a href="#" class="sidebar-header">
          <i class="icon-desktop"></i><span>Links</span>
          <i class="fa fa-angle-right pull-right"></i>
        </a>
        <ul class="sidebar-submenu">
          <li>
            <router-link :to="{ name: 'adminProfile' }">
              <i class="fa fa-angle-right"></i>Home
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'userList' }">
              <i class="fa fa-angle-right"></i>Users
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'bookList' }">
              <i class="fa fa-angle-right"></i>Book List
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'bookEntry' }">
              <i class="fa fa-angle-right"></i>Book Entry
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'entryList' }">
              <i class="fa fa-angle-right"></i>Entry List
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'newEntry' }">
              <i class="fa fa-angle-right"></i>New Entry
            </router-link>
          </li>
        </ul>
      </li>
      <li v-if="get_auth_role_name == 'student'">
        <div class="sidebar-title">Student</div>
        <a href="#" class="sidebar-header">
          <i class="icon-desktop"></i><span>Links</span>
          <i class="fa fa-angle-right pull-right"></i>
        </a>
        <ul class="sidebar-submenu">
          <li>
            <router-link :to="{ name: 'studentProfile' }">
              <i class="fa fa-angle-right"></i>Profile
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'studentBookList' }">
              <i class="fa fa-angle-right"></i>Book List
            </router-link>
          </li>
        </ul>
      </li>
      <li v-if="get_auth_role_name == 'management'">
        <div class="sidebar-title">Management</div>
        <a href="#" class="sidebar-header">
          <i class="icon-desktop"></i><span>Links</span>
          <i class="fa fa-angle-right pull-right"></i>
        </a>
        <ul class="sidebar-submenu">
          <li>
            <router-link :to="{ name: 'managementProfile' }">
              <i class="fa fa-angle-right"></i>Profile
            </router-link>
            <router-link :to="{ name: 'managementBookList' }">
              <i class="fa fa-angle-right"></i>Book List
            </router-link>
            <router-link :to="{ name: 'managementEntryList' }">
              <i class="fa fa-angle-right"></i>Entry List
            </router-link>
            <router-link :to="{ name: 'managementNewEntry' }">
              <i class="fa fa-angle-right"></i>New Entry
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="#" @click="get_logout()" class="sidebar-header">
          <i class="icon-rocket"></i> <span>Logout</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "sidebar-nav",
  created: function () {
    this.init_jq();
  },
  methods: {
    ...mapMutations(["set_logout"]),
    get_logout: function () {
      window.axios.get("/user/logout").then((res) => {
        console.log(res.data);
      });
      this.$router.replace({ name: "login" });
      this.set_logout();
    },
    init_jq: function () {
      "use strict";
      setTimeout(() => {
        $.sidebarMenu = function (menu) {
          var animationSpeed = 300,
            subMenuSelector = ".sidebar-submenu";
          $(menu).on("click", "li a", function () {
            var $this = $(this);
            var checkElement = $this.next();
            if (
              checkElement.is(subMenuSelector) &&
              checkElement.is(":visible")
            ) {
              checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass("menu-open");
              });
              checkElement.parent("li").removeClass("active");
            } else if (
              checkElement.is(subMenuSelector) &&
              !checkElement.is(":visible")
            ) {
              var parent = $this.parents("ul").first();
              var ul = parent.find("ul:visible").slideUp(animationSpeed);
              ul.removeClass("menu-open");
              var parent_li = $this.parent("li");
              checkElement.slideDown(animationSpeed, function () {
                checkElement.addClass("menu-open");
                parent.find("li.active").removeClass("active");
                parent_li.addClass("active");
              });
            }
          });
        };
        $(".mobile-sidebar .switch-state").click(function () {
          $(".page-body-wrapper").toggleClass("sidebar-close");
        });
        $.sidebarMenu($(".sidebar-menu"));
      }, 300);
    },
  },
  computed: {
    ...mapGetters([
      "get_auth_role_name",
      "get_check_auth_status",
      "get_auth_info",
      "get_profile_image_url",
    ]),
  },
};
</script>

<style></style>
