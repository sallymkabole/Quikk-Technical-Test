<template>
  <v-layout column class="main-list" justify-center align-center>
    <!--  Create Cards Based on Objects in an Array -->
    <v-toolbar app flat height="70px" width="100%" color="transparent">
      <v-flex xs6 sm6 md2 lg2>
        <div style="" class="d-flex flex-column logo my-auto">
        </div>
      </v-flex>
    </v-toolbar>
    <v-layout class="right-nav">
      <v-card elevation="12" class="login-card ma-2">
        <v-layout class="auth-card pa-4">
          <v-flex xs12 sm12 md8 lg8 class="mx-auto">
            <h1 class="d-flex justify-center mt-4">Log In</h1>
            <v-card-actions class="d-flex justify-center">
              <v-btn icon color="#DF4930" outlined class="signup-btn">
                <v-icon small class="">mdi-google</v-icon>
              </v-btn>
              <v-btn icon color="#3b5998" outlined class="signup-btn">
                <v-icon small>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon color="#00acee " outlined class="signup-btn">
                <v-icon small>mdi-twitter</v-icon>
              </v-btn>
            </v-card-actions>
            <div style="width: 100%" class="d-flex d-inline-flex ma-2">
              <hr class="hr-text" data-content="or" />
            </div>

            <v-form>
              <v-alert v-if="alert" :type="alert.type" value="true">{{
                  alert.message
              }}</v-alert>
              <v-text-field dense v-model="userInfo.email" class="" color="#335eea" outlined placeholder="Email">
              </v-text-field>
              <v-text-field dense v-model="userInfo.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :passrules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                hint="At least 8 characters" counter @click:append="show1 = !show1" color="#335eea" outlined
                placeholder="Password"></v-text-field>
              <NuxtLink class="mb-2 float-right" to="/auth/signup">
                Forgot Password
              </NuxtLink>

              <v-btn class="white--text" block color="#335eea" @click="loginUser()" :loading="loading"
                :disabled="!userInfo.email || !userInfo.password">
                Log In</v-btn>
            </v-form>
            <v-card-text class="text-center">
              <p class="mx-auto">
                By signing up you agree to Quikk's
                <a href="#">Terms of Service</a> and
                <a href="#">Privacy Policy.</a>
              </p>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-layout>
  </v-layout>
</template>
<script>
import axios from "axios";
//import Notification from "~/components/Notification";
export default {
  name: "login",
  layout: "auth",
  components: {
    // Notification,
  },
  data: () => ({

    loading: false,
    address: "",
    alert: false,
    valid: false,
    userInfo: {
      email: "",
      password: "",
    },
    form: {
      min: 18,
      max: 100,
    },
    number: 0,
    emailrules: {
      required: (value) => !!value || "Required.",
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
    show1: false,
    passrules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    password: "Password",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
      min: (v) => v >= this.form.min || `The Min is ${this.form.min}`,
      max: (v) => v <= this.form.max || `The Max is ${this.form.max}`,
    },
  }),

  methods: {
    countryChanged(country) {
      this.country = "+" + country.dialCode;
      console.log(this.userInfo.phone);
      console.log(this.country);
    },

    async loginUser() {
      const userDetails = {
        email: this.userInfo.email
      }
      const userEmail = this.userInfo.email;
      const userPassword = this.userInfo.password;
      const AITRABLE_BASE_ID = "appAC0VgHCJlUd9UB";
      const AIRTABLE_BASE_NAME = "User";
      let status = 0;
      console.log(userEmail, userPassword)
      //
      axios
        .get(
          `https://api.airtable.com/v0/${AITRABLE_BASE_ID}/${AIRTABLE_BASE_NAME}?fields=Email&fields=Password&filterByFormula=SEARCH("${userEmail}",+Email)`,
          {
            headers: {
              Authorization: "Bearer keyFdAypJPpjvsOqT",
            },
          }
        )
        .then((res) => {
          // load the API response into items for datatable
          this.records = res.data.records;
          // check if any records were returned
          if (
            this.records.length > 0 &&
            this.records[0]["fields"]["Password"] === userPassword
          ) {
            const userDetails = {
              email: this.userInfo.email,

            };
            this.$store.commit("SET_USER_DETAILS", userDetails);
            this.$router.push(
              this.$router.push({
                name: "index",
              })
            );


            //this.$router.push("/");
          } else {
            alert("Invalid Credentials!");
          }
        })
        .catch((error) => {
          console.log(error);
        });

    },
  },
};
</script>

<style scoped>
.d {
  transform: scale(1.5);
}

.green-text {
  color: #68904f;
}

.body-txt {
  font-family: "Poppins", sans-serif;
}

.recipe-hr {
  border: solid 1px #dcdee1;
  width: 100%;
}

.transp-card {
  background: transparent;
}

.login-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.login-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #eaee44, #33d0ff);
  opacity: 0.7;
}

.login-card::after {
  z-index: 1;
}

.login-card>* {
  z-index: 100;
}

.logo {
  font-size: 25px;
  font-weight: bold;
  margin: 0 auto;
}

.hr-text-logo {
  line-height: 0.5em;
  position: relative;
  outline: 0;
  border: 0;
  color: #68904f;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  margin: 0 auto;
}

.hr-text-logo:before {
  content: "";
  background: #000;
  position: absolute;
  left: 0;
  top: 50%;
  width: 95%;
  height: 1px;
}

.hr-text-logo:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #000;
  background-color: #fcfcfa;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}

.view-card {
  border-radius: 8px;
}

.main-list {
  display: flex;
  background-image: url(assets/images/quikkdev.jpg);
  background-size: cover;
  background-position: center center;
  width: 100vw;
}

ul {
  list-style-type: none;
  text-decoration: none;
  padding: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

li:hover {
  background-color: #addc8e;
  color: white;
  text-decoration: none;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #68904f;
  color: white;
  text-decoration: none;
}

li a:hover {
  background-color: #addc8e;
  color: white;
  text-decoration: none;
}

.left-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.right-nav {
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
}

.max-width {
  width: 100%;
}

.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: red;
}

.border-bottom {
  border-bottom: 1px solid #dcdee1;
}

.auth-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
