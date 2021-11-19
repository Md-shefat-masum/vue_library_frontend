<template>
  <div class="frontend_page">
    <!-- Header Area Start -->
    <header class="header-area section" style="position:unset">
        <!-- Header Top -->
        <div class="header-top section">
            <div class="container">
                <div class="row">
                    <!-- Header Top Left -->
                    <div class="header-top-left text-left col-sm-6">
                        <p>Have any question? +968 547856 254</p>
                    </div>
                    <!-- Header Top Right -->
                    <div class="header-top-right text-right col-sm-6">
                        <ul>
                            <li><router-link :to="{name:'login'}">Log In</router-link></li>
                            <li><router-link :to="{name:'signup'}">Register</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header Bottom -->
        <div class="header-bottom bg-white sticker section sticker">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                          <!-- Header Logo -->
                        <div class="header-logo float-left">
                            <a href="index.html"><img src="/landing_page/img/logo/logo.png" alt="logo"></a>
                        </div>
                        <!-- Header Buttons -->
                        <div class="header-buttons float-right">
                            <div class="header-search float-left">
                                <button class="search-toggle"><i class="zmdi zmdi-search"></i></button>
                                <div class="search-form">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..." name="search" />
                                        <button type="submit"><i class="zmdi zmdi-search"></i></button>
                                    </form>                                
                                </div>
                            </div>
                        </div>
                        <!-- Main Menu -->
                        <div class="main-menu float-right hidden-xs">
                            <nav>
                                <ul>
                                    <li class="active">
                                      <router-link :to="{name:`homePage`}">Home</router-link>
                                    </li>
                                    <li>
                                      <router-link :to="{name:`about`}">About</router-link>
                                    </li>
                                    <li>
                                      <router-link :to="{name:`portfolio`}">Portfolio</router-link>
                                    </li>
                                    <li>
                                      <a href="courses.html">Courses</a>
                                        <ul class="sub-menu">
                                            <li><a href="courses.html">Courses</a></li>
                                            <li><a href="course-details.html">Course Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                      <a href="event.html">event</a>
                                        <ul class="sub-menu">
                                            <li><a href="event.html">event</a></li>
                                            <li><a href="event-details.html">event Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>   
    </header>

    <router-view />

    <!-- 
      1. vue cli install.
      2. vue new project installtion.
      3. vue router.
      4. vuex store.
      5. vue role base authentication.

      6. laravel auth with passport.
      7. laravel api roting.
      8. laravel DB Sedding.
      9. Laravel email.

      10. multiple template connection.
      11. html to vue conversion.

      12. login registration.
      13. book management.
      14. book entry management.

      15. vue select2.
      16. vue image uploading.
      17. vue pagination.
      18. vue multiple insertion.
      18. vue multiple delete.

      18. request progressbar.
      18. axios setup.
      18. Jquery setup.

      18. github hosting.
      19. cpanel hosting.
     -->

    
    <!-- Footer Top Area Start -->
    <div class="footer-top-area section pt-100 pb-50">
        <div class="container">
            <div class="row">
                <!-- Footer Widget -->
                <div class="footer-widget col-md-3 col-sm-6 col-xs-12 mb-50">
                    <a class="footer-logo" href="index.html"><img src="/landing_page/img/logo/footer.png" alt=""></a>
                    <p>There are many variations of passg of Lorem Ipsum available, but thmajority have suffered altem, </p>
                    <div class="footer-social">
                        <a href="www.facebook.com"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-rss"></i></a>
                        <a href="www.plus.google.com"><i class="fa fa-google-plus"></i></a>
                        <a href="www.pinterest.com"><i class="fa fa-pinterest"></i></a>
                        <a href="www.instagram.com"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
                <!-- Footer Widget -->
                <div class="footer-widget col-md-3 col-sm-6 col-xs-12 mb-50">
                    <h3>GET IN TOUCH</h3>
                    <ul>
                        <li><i class="fa fa-phone"></i> <span>+88 018 785 4589</span></li>
                        <li><i class="fa fa-envelope"></i> <span>devitems@email.com</span></li>
                        <li><i class="fa fa-globe"></i> <span>www.devitems.com</span></li>
                        <li><i class="fa fa-map-marker"></i> <span>ur address goes here,street.</span></li>
                    </ul>
                </div>
                <!-- Footer Widget -->
                <div class="footer-widget col-md-3 col-sm-6 col-xs-12 mb-50">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">Teachers &amp; Staff</a></li>
                        <li><a href="#">Our Courses</a></li>
                        <li><a href="#">Courses Categories</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <!-- Footer Widget -->
                <div class="footer-widget col-md-3 col-sm-6 col-xs-12 mb-50">
                    <h3>Instagram</h3>
                    <div class="instagram-widget">
                        <div><a href="#"><img src="/landing_page/img/instagram/1.jpg" alt=""></a></div>
                        <div><a href="#"><img src="/landing_page/img/instagram/2.jpg" alt=""></a></div>
                        <div><a href="#"><img src="/landing_page/img/instagram/3.jpg" alt=""></a></div>
                        <div><a href="#"><img src="/landing_page/img/instagram/4.jpg" alt=""></a></div>
                        <div><a href="#"><img src="/landing_page/img/instagram/5.jpg" alt=""></a></div>
                        <div><a href="#"><img src="/landing_page/img/instagram/6.jpg" alt=""></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End of Footer Top Area-->
    <!-- Footer Bottom Area Start -->
    <footer class="footer-bottom-area section">
        <div class="container">
            <div class="row">
                <div class="text-left col-md-6 col-sm-7">
                    <p>Copyright &copy; Study 2017.All right reserved.Created by <a href="http://hastech.company">Hastech</a></p>
                </div>
                <div class="text-right col-md-6 col-sm-5">
                    <p><a href="#">Privacy Policy</a> , <a href="#">Terms &amp; Conditions</a></p>
                </div>
            </div>
        </div>
    </footer>
    <!-- End of Footer Bottom Area -->
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>