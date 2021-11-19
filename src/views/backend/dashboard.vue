<template>
    <div class="backend">
        <!-- Loader starts -->
        <!-- <div class="loader-wrapper">
            <div class="loader bg-white">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <h4>Have a great day at work today <span>&#x263A;</span></h4>
            </div>
        </div> -->
        <!-- Loader ends -->

        <!--page-wrapper Start-->
        <div class="page-wrapper">

            <!--Page Header Start-->
            <page-header></page-header>
            <!--Page Header Ends-->

            <!--Page Body Start-->
            <div class="page-body-wrapper">
                <!--Page Sidebar Start-->
                <side-bar-nav></side-bar-nav>
                <!--Page Sidebar Ends-->

                <div class="page-body">

                    <!-- Container-fluid starts -->
                    <div class="container-fluid">
                        <div class="page-header">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h3>Sample Page
                                        <small>Universal Admin panel</small>
                                    </h3>
                                </div>
                                <div class="col-lg-6">
                                    <ol class="breadcrumb pull-right">
                                        <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i></a></li>
                                        <li class="breadcrumb-item active">Sample Page</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Container-fluid Ends -->

                    <!-- Container-fluid starts -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <router-view />
                            </div>
                        </div>
                    </div>
                    <!-- Container-fluid starts -->
                </div>
            </div>
            <!--Page Body Ends-->

        </div>
        <!--page-wrapper Ends-->
    </div>
</template>

<script>
import PageHeader from '../../components/backend/pageHeader.vue'
import SideBarNav from '../../components/backend/sideBarNav.vue'
export default {
  components: { PageHeader, SideBarNav },

}
</script>
    

<style>

</style>