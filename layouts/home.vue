<template>
  <v-app  class="body-txt">
    
    <v-main>
      
      <v-container fluid class="bg body-txt">
        
        <nuxt />
      </v-container>
    </v-main>
    <div class="our-story">
      <div class="row">
        <div class="col-md-12 col-sm-6 col-xs-12">
          <div class="display-5 text-center our-story-text">
            <h1 class="font-weight-bold white--text body-text mb-4">
              Quikk Story...
            </h1>
            <v-icon size="60" color="#fff">mdi-arrow-right-drop-circle</v-icon>
          </div>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <div class="footer-container">
        <div class="row">
          <div class="col-xs-12 col-xs-12 col-md-4 col-lg-4">
            <h6 class="ma-2">Contact Info</h6>
            <ul class="footer-links">
              <li>
                <v-btn class="white--text ma-2" outlined x-small icon fab
                  ><v-icon size="" class="white--text"
                    >mdi-map-marker-outline</v-icon
                  ></v-btn
                >
                <a href="http://scanfcode.com/category/c-language/"
                  >CBD Nairobi</a
                >
              </li>
              <li>
                <v-btn class="white--text ma-2" outlined x-small icon fab
                  ><v-icon class="white--text">mdi-phone-outline</v-icon></v-btn
                ><a href="http://scanfcode.com/category/front-end-development/"
                  >+25400000000</a
                >
              </li>
              <li>
                <v-btn class="white--text ma-2" outlined x-small icon fab
                  ><v-icon class="white--text">mdi-email</v-icon></v-btn
                ><a href="http://scanfcode.com/category/back-end-development/"
                  >ku2021@gmail.com</a
                >
              </li>
            </ul>
          </div>

          <div class="col-xs-12 col-xs-12 col-md-4 col-lg-4">
            <h6 class="ma-2">Social Media</h6>
            <ul class="footer-links">
              <li>
                <v-btn class="white--text ma-2" outlined x-small icon fab
                  ><v-icon size="" class="white--text"
                    >mdi-facebook</v-icon
                  ></v-btn
                >
                <a href="http://facebook.com">Facebook</a>
              </li>
              <li>
                <v-btn class="white--text ma-2" outlined x-small icon fab
                  ><v-icon class="white--text">mdi-instagram</v-icon></v-btn
                ><a href="http://instagram.com">Instagram</a>
              </li>
              <li>
                <v-btn class="white--text ma-2" outlined x-small icon fab
                  ><v-icon class="white--text">mdi-twitter</v-icon></v-btn
                ><a href="http://twitter">Twitter</a>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-xs-12 col-md-4 col-lg-4">
            <h6 class="ma-2">Quick Links</h6>
            <ul class="footer-links">
              <li>
                <v-btn class="white--text ma-2" outlined x-small icon fab
                  ><v-icon class="white--text">mdi-sprout</v-icon></v-btn
                ><a href="/organic-farming">How We Grow</a>
              </li>
              <li>
                <v-btn class="white--text ma-2" outlined x-small icon fab
                  ><v-icon class="white--text">mdi-stove</v-icon></v-btn
                ><a href="/recipes/">How We Cook</a>
              </li>
              <li>
                <v-btn class="white--text ma-2" outlined x-small icon fab
                  ><v-icon class="white--text">mdi-post</v-icon></v-btn
                ><a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="footer-container">
        <div class="row">
          <div class="col-md-12 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="#">Quikk</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </v-app>
</template>


<style scoped>
.body-txt {
  font-family: "Poppins", sans-serif;
}
.footer-container {
  margin: 0 auto;
  width: 75%;
}
.site-footer {
  background-color: #68904F;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #fff;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #f5d723;
}
.site-footer a:hover {
  color: #f5d723;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #fff;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #f5d723;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0 auto;
  color: #fff;
  text-align: center;
}
@media (max-width: 991px) {
 
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}



.grey-div {
  width: 100vw;
  margin: 0 auto;
}

.footer-div {
  width: 100vw;
  height: 450px;
  background-color: #68904F;
}
.icon {
  font-size: 100px;
  border-radius: 50%;
}
.circle {
  border: 2px solid white;
  border-radius: 50%;
}
.hr {
  border: 2px solid #68904F;
  width: 65px;
}
.signp-btn {
  border: 3px solid #fff;
}
.transparent-card {
  background: transparent;
}
.btn {
  position: absolute;
  right: 30px;
  bottom: 0px;
  z-index: 2;
}

.third-outline {
  border: 3px solid #68904F;
}
.center {
  margin: 0 auto;
  width: 75vw;
}

.greyy-div {
  height: 700px;
  width: 100vw;
}
.hr {
  border: 2px solid #68904F;
  width: 65px;
  margin: 0 auto;
}
.font-orange {
  font-weight: bold;

  width: 100%;
  height: 100px;
  margin: 0 auto;
}
.p-head {
  font-size: 20px;
}
.p-head1 {
  font-size: 34px;
  font-weight: 700;
}
.content {
  margin-top: 100px;
}
.sln {
  margin: 100px 0 150px 0;
}
.bg {
  background-color: #fff;
}
ul {
  list-style-type: none;
}
.our-story {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(assets/images/quikkdev.jpg);
  background-size: cover;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.our-story-text {
  color: #fff;

  margin: 0 auto;
}
</style>