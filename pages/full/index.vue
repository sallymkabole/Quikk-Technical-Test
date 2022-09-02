<template>

    <v-layout class="right-nav">
        <v-flex xs12 sm12 md8 lg8 class="mx-auto">
            <v-layout class="mt-4 pa-2" row wrap>
                <v-flex xs12 sm12 md6 lg6 class="mx-auto">
                    <v-card rounded-circle class="img-card-holder">

                    </v-card>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6 class="mx-auto">
                    <v-card class="login-card">
                        <v-layout class="auth-card pa-4">
                            <v-flex xs12 sm12 md8 lg8 class="mx-auto">
                                <h1 class="d-flex justify-center mt-4">Ksh {{ userInfo.balance }}</h1>
                                <v-card-actions class="d-flex justify-space-between">
                                    <span>Sally Musanga</span>

                                    <span>{{getUser.email}}</span>
                                </v-card-actions>
                                <div style="width: 100%" class="d-flex d-inline-flex ma-2">
                                    <hr class="hr-text" data-content="or" />
                                </div>
                                <v-form v-model="valid">


                                    <h5 class="text-left">Amount</h5>
                                    <v-text-field dense v-model="userInfo.top_amount" :rules="[num_rules]" min="50"
                                        ref="input" type="number" class="" color="#335eea" outlined></v-text-field>
                                    <v-row>
                                        <v-col md="12" xs="12" sm="12">
                                            <h5 class="text-left">Phone</h5>
                                            <vue-tel-input class="mb-4" style="
                    color: #335eea;
                    border-top-style: transparent;
                    border-right-style: transparent;
                    border-left-style: transparent;
                  " v-model="userInfo.my_phone" v-bind="bindProps" v-on:country-changed="countryChanged">
                                            </vue-tel-input>
                                        </v-col>
                                    </v-row>



                                    <v-btn class="btn1" block color="#335eea" @click="deposit" :disabled="!valid">
                                        Top Up </v-btn>
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
                </v-flex>
            </v-layout>

        </v-flex>
    </v-layout>

</template>
  
  <script>
import axios from "axios";
import { mapGetters } from "vuex";
//import Notification from "~/components/Notification";
export default {
    name: "full",

    components: {
        // Notification,
    },
    computed: {
    ...mapGetters(["getUser"]),
  },
    data: () => ({
        loading: false,
        address: "",
        alert: false,
        valid: false,
        userInfo: {
            top_amount: "",
            my_phone: "",
            balance: "",
        },
        form: {
            min: 18,
            max: 100,
        },
        number: 0,
        num_rules: (val) => {
            if (val < 50) return "Minimum  amount is 50";
            return true;
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
    mounted() {
        this.getbalance();
    },
    methods: {
        countryChanged(country) {
            this.country = "+" + country.dialCode;

        },
        deposit() {
            console.log(typeof (this.userInfo.top_amount))
            var Airtable = require("airtable");
            var base = new Airtable({ apiKey: "keyFdAypJPpjvsOqT" }).base(
                "appAC0VgHCJlUd9UB"
            );
            base("user").update(
                [

                    {
                        id: "recwgiBZ6KeXwi2AV",
                        fields: {
                            Balance: this.userInfo.top_amount,
                            Phone: this.userInfo.phone,
                            // TODO: figure out why the phone number doesnt show up in airtable
                        },
                    },
                ],
                function (err, records) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    records.forEach(function (record) {
                        console.log(record.getId());
                    });
                }
            );
            //this.$router.push("/auth/login");

        },
        getbalance() {
            const userPhone = this.userInfo.my_phone;


            const AITRABLE_BASE_ID = "appAC0VgHCJlUd9UB";
            const AIRTABLE_BASE_NAME = "User";


            axios
                .get(
                    //`https://api.airtable.com/v0/${AITRABLE_BASE_ID}/${AIRTABLE_BASE_NAME}`,
                    `https://api.airtable.com/v0/${AITRABLE_BASE_ID}/${AIRTABLE_BASE_NAME}?fields=Phone&fields=Balance&fields=Fullname&fields=Email&filterByFormula=SEARCH("${userPhone}",+Phone)`,


                    {
                        headers: {
                            Authorization: "Bearer keyFdAypJPpjvsOqT",
                        },
                    }
                )
                .then((res) => {


                    this.records = res.data.records;
                    console.log(this.records)
                    if (
                        this.records.length > 0 &&
                        this.records[0]["fields"]["Phone"] === userPhone
                    ) {
                        this.records = res.data.records;
                        console.log(res)

                        // this.$router.push("/");
                    } else {
                        alert("Invalid Credentials!");
                    }



                    //this.userInfo.balance = this.records[0]['fields']['Balance']
                    // check if any records were returned

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
  
  .img-card-holder {
  
      border-radius: 50%;
      margin: 0 auto;
      height: 342px;
      width: 342px;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url(assets/images/card.svg);
  }
  
  .img-card {}
  
  .login-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0 auto;
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
      background-color: #7c69ef;
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
      background-color: #7c69ef;
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
      /* display: flex;
    
      justify-content: center;
      align-items: center;*/
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
  