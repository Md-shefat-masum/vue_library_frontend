<template>
    <div class="page-main-header">
        <div class="main-header-left">
            <div class="logo-wrapper">
                <a href="index.html">
                    <img src="/assets/images/logo-light.png" class="image-dark" alt="" />
                    <img src="/assets/images/logo-light-dark-layout.png" class="image-light" alt="" />
                </a>
            </div>
        </div>
        <div class="main-header-right row">
            <div class="mobile-sidebar">
                <div class="media-body text-right switch-sm">
                    <label class="switch">
                        <input type="checkbox" id="sidebar-toggle" checked>
                        <span class="switch-state"></span>
                    </label>
                </div>
            </div>
            <div class="nav-right col">
                <ul class="nav-menus">
                    <li>
                        <form class="form-inline search-form">
                            <div class="form-group">
                                <label class="sr-only">Email</label>
                                <input type="search" class="form-control-plaintext" placeholder="Search..">
                                <span class="d-sm-none mobile-search">
                                </span>
                            </div>
                        </form>
                    </li>
                    <li>
                        <a href="#!" onclick="javascript:toggleFullScreen()" class="text-dark">
                            <img class="align-self-center pull-right mr-2"
                                src="/assets/images/dashboard/browser.png" alt="header-browser">
                        </a>
                    </li>
                    <li class="onhover-dropdown">
                        <a href="#!" class="txt-dark">
                            <img class="align-self-center pull-right mr-2"
                                src="/assets/images/dashboard/translate.png" alt="header-translate">
                        </a>
                        <ul class="language-dropdown onhover-show-div p-20">
                            <li>
                                <a href="#" data-lng="en">
                                    <i class="flag-icon flag-icon-ws"></i> English
                                </a>
                            </li>
                            <li>
                                <a href="#" data-lng="es">
                                    <i class="flag-icon flag-icon-va"></i> Spanish
                                </a>
                            </li>
                            <li>
                                <a href="#" data-lng="pt">
                                    <i class="flag-icon flag-icon-id"></i> Portuguese
                                </a>
                            </li>
                            <li>
                                <a href="#" data-lng="fr">
                                    <i class="flag-icon flag-icon-fr"></i> French
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="onhover-dropdown">
                        <a href="#!" class="txt-dark">
                            <img class="align-self-center pull-right mr-2"
                                src="/assets/images/dashboard/notification.png" alt="header-notification">
                            <span class="badge badge-pill badge-primary notification">3</span>
                        </a>
                        <ul class="notification-dropdown onhover-show-div">
                            <li>Notification <span
                                    class="badge badge-pill badge-secondary text-white text-uppercase pull-right">3
                                    New</span></li>
                            <li>
                                <div class="media">
                                    <i
                                        class="align-self-center notification-icon icofont icofont-shopping-cart bg-primary"></i>
                                    <div class="media-body">
                                        <h6 class="mt-0">Your order ready for Ship..!</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                        <span><i class="icofont icofont-clock-time p-r-5"></i>Just Now</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <i
                                        class="align-self-center notification-icon icofont icofont-download-alt bg-success"></i>
                                    <div class="media-body">
                                        <h6 class="mt-0 txt-success">Download Complete</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                        <span><i class="icofont icofont-clock-time p-r-5"></i>5 minutes ago</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <i
                                        class="align-self-center notification-icon icofont icofont-recycle bg-danger"></i>
                                    <div class="media-body">
                                        <h6 class="mt-0 txt-danger">250 MB trush files</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                        <span><i class="icofont icofont-clock-time p-r-5"></i>25 minutes ago</span>
                                    </div>
                                </div>
                            </li>
                            <li class="text-center">You have Check <a href="#">all</a> notification </li>
                        </ul>

                    </li>
                    <li class="onhover-dropdown">
                        <div class="media  align-items-center">
                            <img class="align-self-center pull-right mr-2" src="/assets/images/dashboard/user.png"
                                alt="header-user" />
                            <div class="media-body">
                                <h6 class="m-0 txt-dark f-16">
                                    My Account
                                    <i class="fa fa-angle-down pull-right ml-2"></i>
                                </h6>
                            </div>
                        </div>
                        <ul class="profile-dropdown onhover-show-div p-20">
                            <li>
                                <a href="#">
                                    <i class="icon-user"></i>
                                    Edit Profile
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon-email"></i>
                                    Inbox
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon-check-box"></i>
                                    Task
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon-comments"></i>
                                    Chat
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon-power-off"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="d-lg-none mobile-toggle">
                    <i class="icon-more"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-header',
}
</script>

<style>

</style>