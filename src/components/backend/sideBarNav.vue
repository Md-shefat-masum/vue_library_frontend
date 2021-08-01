<template>
    <div class="page-sidebar custom-scrollbar">
        <div class="sidebar-user text-center">
            <div>
                <img class="img-50 rounded-circle" src="/assets/images/user/1.jpg" alt="#">
            </div>
            <h6 class="mt-3 f-12">Johan Deo</h6>
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
                        <router-link :to="{ name: 'admin' }"><i class="fa fa-angle-right"></i>Home</router-link> 
                    </li>
                    <li>
                        <router-link :to="{ name: 'users' }"><i class="fa fa-angle-right"></i>Users</router-link> 
                    </li>
                    <li>
                        <router-link :to="{ name: 'bookList' }"><i class="fa fa-angle-right"></i>Book List</router-link> 
                    </li>
                    <li>
                        <router-link :to="{ name: 'bookEntry' }"><i class="fa fa-angle-right"></i>Book Entry</router-link> 
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
                        <router-link :to="{ path: 'student' }"><i class="fa fa-angle-right"></i>Home</router-link> 
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
                        <router-link :to="{ path: 'management' }"><i class="fa fa-angle-right"></i>Home</router-link> 
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
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'sidebar-nav',
    created: function(){
        this.init_jq();
    },
    methods: {
        ...mapMutations([
            'set_logout'
        ]),
        get_logout:function(){
            this.$router.replace({name:'login'});
            this.set_logout();
        },
        init_jq: function(){
            "use strict";
            setTimeout(() => {
                
                $.sidebarMenu = function (menu) {
                    var animationSpeed = 300,
                        subMenuSelector = '.sidebar-submenu';
                    $(menu).on('click', 'li a', function () {
                        var $this = $(this);
                        var checkElement = $this.next();
                        if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                            checkElement.slideUp(animationSpeed, function () {
                                checkElement.removeClass('menu-open');
                            });
                            checkElement.parent("li").removeClass("active");
                        } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                            var parent = $this.parents('ul').first();
                            var ul = parent.find('ul:visible').slideUp(animationSpeed);
                            ul.removeClass('menu-open');
                            var parent_li = $this.parent("li");
                            checkElement.slideDown(animationSpeed, function () {
                                checkElement.addClass('menu-open');
                                parent.find('li.active').removeClass('active');
                                parent_li.addClass('active');
                            });
                        }
                    });
                }
                $(".mobile-sidebar .switch-state").click(function () {
                    $(".page-body-wrapper").toggleClass("sidebar-close");
                });
                $.sidebarMenu($('.sidebar-menu'));

            }, 300);

        }
    },
    computed: {
        ...mapGetters([
            'get_auth_role_name',
            'get_check_auth_status'
        ])
    }
}
</script>

<style>

</style>