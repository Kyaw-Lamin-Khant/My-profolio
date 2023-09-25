<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-white">
            <div class="container my-2">
                <a class="navbar-brand text-primary fs-5 text-uppercase" href="#">
                    <img src="" alt="">
                    Kyaw Lamin Khant</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse offset-5" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <router-link to="/"><a class="nav-link active text-info mx-2"
                                    aria-current="page">Home</a></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about"><a class="nav-link active text-info mx-2"
                                    aria-current="page">About</a></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/project"> <a class="nav-link text-info mx-2"
                                    href="#">Project</a></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/skill">
                                <a class="nav-link text-info mx-2" href="#">language</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contact">
                                <a class="nav-link text-info mx-2" aria-disabled="true">contact</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <router-view></router-view>
        <footer>
            <!-- Footer Start-->
            <div class="footer-area footer-padding fix bg-danger mt-5 shadow-sm">
                <div class="container-fluid">
                    <div class="row d-flex justify-content-between">
                        <div class="col-xl-5 col-lg-5 col-md-7 mx-1 col-sm-12 p-3 mt-5 ">
                            <div class="single-footer-caption">
                                <div class="single-footer-caption">
                                    <div class="footer-tittle">
                                        <div class="footer-pera">
                                            <p class="text-white">
                                                Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames
                                                lectus tempor da blandit gravida sodales Suscipit mauris pede for con
                                                sectetuer sodales adipisci for cursus fames lectus tempor da blandit gravida
                                                sodales Suscipit mauris pede for
                                                sectetuer.
                                            </p>
                                        </div>
                                    </div>
                                    <!-- social -->
                                    <div class="footer-social">
                                        <a href="#"><i class="fab fa-twitter me-3"></i></a>
                                        <a href="#"><i class="fab fa-instagram me-3"></i></a>
                                        <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-5">
                            <div class="single-footer-caption mt-60">
                                <div class="footer-tittle">
                                    <h4 class="text-white">Newsletter</h4>
                                    <p class="text-white">Heaven fruitful doesn't over les idays appear creeping</p>
                                    <!-- Form -->
                                    <div class="footer-form">
                                        <div id="mc_embed_signup">
                                            <form target="_blank"
                                                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                                method="get" class="subscribe_form relative mail_part">
                                                <input type="email" name="email" id="newsletter-form-email"
                                                    placeholder="Email Address" class="placeholder hide-on-focus"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = ' Email Address '" />
                                                <div class="">
                                                    <button class="btn btn-info mt-1">Contact</button>
                                                </div>
                                                <div class="mt-10 info"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-5 col-sm-6 mt-5">
                            <div class="single-footer-caption mb-50 mt-60">
                                <div class="footer-tittle">
                                    <h4 class="text-white mx-3">Instagram Feed</h4>
                                </div>
                                <div class="instagram-gellay">
                                    <ul class="d-flex">
                                        <li>
                                            <a href="#"><img src="image/download.png" class="me-1 mx-1"
                                                    style="width: 80px;" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="image/download.png" class="me-1 mx-1"
                                                    style="width: 80px;" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="image/download.png" class="me-1 mx-1"
                                                    style="width: 80px;" /></a>
                                        </li>

                                    </ul>
                                    <ul class="d-flex">
                                        <li>
                                            <a href="#"><img src="image/download.png" class="me-1 mx-1"
                                                    style="width: 80px;" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="image/download.png" class="me-1 mx-1"
                                                    style="width: 80px;" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src="image/download.png" class="me-1 mx-1"
                                                    style="width: 80px;" /></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer-bottom aera -->
            <div class="footer-bottom-area bg-danger shadow-sm">
                <div class="container">
                    <div class="footer-border">
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-lg-6">
                                <div class="footer-copy-right">
                                    <p class="text-white"> All rights reserved | This template is made with
                                        <i class="ti-heart" aria-hidden="true"></i> by
                                        <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="footer-menu f-right">
                                    <ul>
                                        <li><a href="#">Terms of use</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End-->
        </footer>
    </div>
</template>

