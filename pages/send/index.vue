<template>


    <!--  Create Cards Based on Objects in an Array -->

    
  <v-layout column justify-center align-center style=" width: 100vw;
height: 100%;">
       <v-card flat style="background: transparent" width="75%" height="100%">
        <v-layout column>
          <v-layout>
              <v-card flat width="100%" height="100% " class="mb-4 d-flex flex-column profile-card">
                  <div class="align-items-center">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                          <!-- Bg -->
                          <div class="pt-16 rounded-top add-course"></div>
                          <div class="
                        d-flex
                        align-items-end
                        justify-content-between
                        bg-white
                        px-4
                        pt-2
                        pb-4
                        rounded-none rounded-bottom
                        shadow-sm
                      ">
                              <div class="d-flex align-items-center">
                                  <div class="
                            mr-2
                            position-relative
                            d-flex
                            justify-content-end
                            align-items-end
                            mt-n5
                          ">
                                      <img src="~assets/images/quikkdev.jpg" class="
                              avatar-xl
                              rounded-circle
                              border-width-4 border-white
                              position-relative
                            " alt="" />
                                      <a href="#!" class="position-absolute top-0 right-0" data-toggle="tooltip"
                                          data-placement="top" title="" data-original-title="Verified">
                                          <img src="https://codescandy.com/geeks/assets/images/svg/checked-mark.svg"
                                              alt="" height="30" width="30" class="" />
                                      </a>
                                  </div>
                                  <div class="lh-1">
                                    <h1 class="d-flex justify-center mt-4">Transact</h1>
                                  </div>
                                
                              </div>

                          </div>
                      </div>
                  </div>
              </v-card>
          </v-layout>
      
      <v-layout wrap class="" style="width: 100%; padding-bottom: 16px">
        <v-layout column style="width: 30%; height: 100%">
          <v-flex xs12 md2 lg2 sm12 class="mr-6">
            <v-card height="100%" class="topup-card ma-2">

              <v-layout class="auth-card ">
                <v-flex xs12 sm12 md8 lg8 class="mx-auto">
                                <h1 class="d-flex justify-center mt-4">Send Money</h1>
                                <v-card-actions class="d-flex justify-center">
                                    <span>Please fill in to Proceed</span>


                                </v-card-actions>
                                <div style="width: 100%" class="d-flex d-inline-flex ma-2">
                                    <hr class="hr-text" data-content="or" />
                                </div>
                                <v-form v-model="valid">


                                    <h5 class="text-left">Amount to Send</h5>
                                    <v-text-field dense v-model="userInfo.send_amount" :rules="[num_rules]" min="50"
                                        ref="input" type="number" class="" color="##335eea" outlined></v-text-field>
                                    <v-row>
                                        <v-col md="12" xs="12" sm="12">
                                            <v-select v-model="userInfo.recipient_phone" outlined dense color="#836329"
                                                :items="contacts" item-text="name" item-value="id"
                                                placeholder="Select Receiver" persistent-hint return-object single-line>
                                            </v-select>
                                        </v-col>
                                    </v-row>



                                    <v-btn class="btn1" block color="##335eea" @click="transact" :disabled="!valid">
                                        Send </v-btn>
                                </v-form>
                                <v-card-text class="text-center">
                                    <p class="mx-auto">
                                        By using our app up you agree to Quikk's
                                        <a href="#">Terms of Service</a> and
                                        <a href="#">Privacy Policy.</a>
                                    </p>
                                </v-card-text>
                            </v-flex>
              </v-layout>

            </v-card>
          </v-flex>
        </v-layout>
        <v-layout column class="hidden-sm-and-down" style="width: 70%; height: 700">
          <v-card flat width="100%" style="background: transparent" class="d-flex flex-column mb-4">
            <v-flex xs12 md12 lg12 sm12>
              <v-layout column style="width: 100%; margin: 0 auto">
                <v-layout wrap>

                  <v-flex xs12 md12 lg12 sm12 pa-1>
                    <v-card color="" class="">
                      <v-layout class="auth-card-blue">
                        <v-flex xs12 sm12 md8 lg8 class="">
                          <h1 class=" ">Transaction History</h1>

                        </v-flex>
                      </v-layout>

                      <v-layout wrap style="width: 100%;justify-content: center;align-items: center; padding: 5px"
                        v-for="transaction in my_transactions" :key="transaction.title">
                        <v-layout wrap>


                          <v-flex xs12 sm12 md4 lg4><span class="mr-9 d-inline-flex">
                              <v-avatar size="25" color="indigo">
                                <v-icon dark>
                                  mdi-account-circle
                                </v-icon>
                              </v-avatar>
                              <p class="black--text text--center my-auto">
                                {{ transaction.title }}</p>
                            </span><span style="width: 100%" class="  ">
                            </span></v-flex>
                          <v-flex xs12 sm12 md4 lg4>

                            <span class="subheading mr-2 ">
                              <v-span class="d-flex d-inline-flex" style="width: 100%; font-size: 12px">

                                <p class="">Ksh.
                                  {{ transaction.amount }}
                                </p>
                                &nbsp;<span>
                                </span>
                              </v-span>
                            </span>
                          </v-flex>

                          <v-flex xs12 sm12 md4 lg4>

                            <span class="subheading mr-2 ">
                              <v-span class="d-flex d-inline-flex" style="width: 100%; font-size: 12px">

                                <p class="">
                                  {{ transaction.done_time }}
                                </p>
                                &nbsp;<span>
                                </span>
                              </v-span>
                            </span>
                          </v-flex>

                        </v-layout>
                      </v-layout>
                    </v-card>
                  </v-flex>

                </v-layout>
              </v-layout>
            </v-flex>
          </v-card>


        </v-layout>
      </v-layout>


    </v-layout>

</v-card>
  </v-layout>

</template>
<script>
import axios from "axios";
export default {
  name: "index",
  layout: "default",
  data: () => ({
    page: 1,
    my_transactions: [

      {
        avatar: require("/assets/images/quikkdev.jpg"),
        done_time: "11.32 am",
        title: 'John Ouma',
        amount: 4500,
      },
      {
        avatar: require("/assets/images/quikkdev.jpg"),
        done_time: "11.11 am",
        title: 'Weller Kurt',
        amount: 5520,
      },
      {
        avatar: require("/assets/images/quikkdev.jpg"),
        done_time: "07.21 am",
        title: 'Wakio Omta',
        amount: 1060,
      },
      {
        avatar: require("/assets/images/quikkdev.jpg"),
        done_time: "05.44 pm",
        title: 'Frank Mnyao',
        amount: 7100,
      },
      {
        avatar: require("/assets/images/quikkdev.jpg"),
        done_time: "11.10 pm",
        title: 'Emm Kariuki',
        amount: 32100,
      },
    ],
    count: "",
    selectedItem: "",
    rating: "4.3",
    userInfo: {
      top_amount: "",
      my_phone: "",
      balance: 0,
    },

    right: null,
  }),
  mounted() {
        this.getContact()
    },
    methods: {
        getContact() {
            const userPhone = this.userInfo.my_phone;
            const AITRABLE_BASE_ID = "appAC0VgHCJlUd9UB";
            const AIRTABLE_BASE_NAME = "User";
            axios
                .get(`https://api.airtable.com/v0/${AITRABLE_BASE_ID}/${AIRTABLE_BASE_NAME}`,
                    // `https://api.airtable.com/v0/${AITRABLE_BASE_ID}/${AIRTABLE_BASE_NAME}?fields=Phone&fields=Balance&fields=Fullname&fields=Email&filterByFormula=SEARCH("${userPhone}",+Phone)`,
                    {
                        headers: {
                            Authorization: "Bearer keyFdAypJPpjvsOqT",
                        },
                    }
                )
                .then((res) => {
                    // load the API response into items for datatable
                    this.records = res.data.records;
                    const my_contacts = Object.entries(this.records);
                    //my_contacts =this.records
                    for (const my_contact of my_contacts) {
                        this.contacts.push(my_contact[1]['fields']['Phone']);
                        //console.log(my_contact[1]['id']);
                    }
                    console.log("My Contacts" + this.contacts)
                    // this.userInfo.balance = this.records[0]['fields']['Balance']
                    // check if any records were returned
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // getContactNo() {},
        transact() {
            //  console.log(this.userInfo.recipient_phone)
            const newUserPhone = this.userInfo.recipient_phone;
            const AITRABLE_BASE_ID = "appAC0VgHCJlUd9UB";
            const AIRTABLE_BASE_NAME = "User";
            let current_bal
            let received
            let newBalance
            let newId
            let receiver = this.userInfo.recipient_phone
            let str = ' Shillings sent to '
            axios
                .get(
                    //`https://api.airtable.com/v0/${AITRABLE_BASE_ID}/${AIRTABLE_BASE_NAME}`,
                    `https://api.airtable.com/v0/${AITRABLE_BASE_ID}/${AIRTABLE_BASE_NAME}?fields=Phone&fields=Balance&filterByFormula=SEARCH("${newUserPhone}",+Phone)`,
                    {
                        headers: {
                            Authorization: "Bearer keyFdAypJPpjvsOqT",
                        },
                    }
                )
                .then((res) => {
                    // load the API response into items for datatable
                    this.records = res.data.records;
                    if (
                        this.records.length > 0 &&
                        this.records[0]["fields"]["Phone"] === newUserPhone
                    ) {
                        newId = this.records[0]["id"]
                        current_bal = this.records[0]["fields"]["Balance"]
                        received = parseInt(this.userInfo.send_amount)
                        newBalance = received + current_bal
                        console.log(typeof (newBalance))
                        alert(received + str + receiver);
                        var Airtable = require("airtable");
                        var base = new Airtable({ apiKey: "keyFdAypJPpjvsOqT" }).base(
                            "appAC0VgHCJlUd9UB"
                        );
                        //  console.log(this.newBalance)
                        base("User").update(
                            [
                                {
                                    id: newId,
                                    fields: {
                                        Balance: newBalance,
                                        Phone: newUserPhone,
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
                    } else {
                        alert("Invalid Credentials!");
                    }
                    this.userInfo.balance = this.records[0]['fields']['Balance']
                    // console.log(this.userInfo.balance)
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
  .auth-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
  }
  .auth-card-blue {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5px;
      background-color: #7c69ef;
    
      color: #fff;
      padding: 42px;
  }
  .login-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 75px;
      width: 90%;
      border-radius: 10px;
      margin: 20px;
      padding: 6px;
      margin: 0 auto;
  }
  .topup-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 1110px;
      width: 100%;
      border-radius: 10px;
      padding: 6px;
      margin: 20px;
      margin: 0 auto;
  }
  .poster-vid {
      height: 100px;
  }
  .add-course {
      background-image: url(~/assets/images/profile-bg.jpg);
      background-size: cover;
      background-position: center center;
    
     
  }
  .profile-card {
      height: 300px;
      width: 100%;
      border-radius: 8px;
  }
  .admin-col {
      display: flex;
      flex-direction: column;
      width: 85%;
      height: 100%;
      margin: 0 auto;
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
      background-color: #6ebe3b;
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
  }
  .right-col {
      width: 85%;
      margin: 0 auto;
      height: 100%;
  }
  .sum-card {
      border-radius: 8px;
  }
  .pagination {
      width: 100%;
  }
  .banner-div {
      height: 100px;
  }
  .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -12px;
      margin-left: -12px;
  }
  .col-12,
  .col-lg-12,
  .col-md-12,
  .col-xl-12 {
      position: relative;
      width: 100%;
      padding-right: 12px;
      padding-left: 12px;
  }
  .col-12 {
      flex: 0 0 100%;
      max-width: 100%;
  }
  @media (min-width: 768px) {
      .col-md-12 {
          flex: 0 0 100%;
          max-width: 100%;
      }
  }
  @media (min-width: 992px) {
      .col-lg-12 {
          flex: 0 0 100%;
          max-width: 100%;
      }
  }
  @media (min-width: 1200px) {
      .col-xl-12 {
          flex: 0 0 100%;
          max-width: 100%;
      }
  }
  .btn {
      display: inline-block;
      font-weight: 600;
      color: #5c5776;
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.75rem 1.25rem;
      font-size: 0.875rem;
      line-height: 1.6;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
      .btn {
          transition: none;
      }
  }
  .btn:hover {
      color: #5c5776;
      text-decoration: none;
  }
  .btn:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(117, 79, 254, 0.25);
  }
  .btn:disabled {
      opacity: 0.65;
  }
  .btn-primary {
      color: #fff;
      background-color: #68904f;
      border-color: #68904f;
  }
  .btn-primary:focus,
  .btn-primary:hover {
      color: #fff;
      background-color: #5729fe;
      border-color: #4d1cfe;
  }
  .btn-primary:focus {
      box-shadow: 0 0 0 0.2rem rgba(138, 105, 254, 0.5);
  }
  .btn-primary:disabled {
      color: #fff;
      background-color: #754ffe;
      border-color: #754ffe;
  }
  .btn-sm {
      padding: 0.5rem 0.875rem;
      font-size: 0.875rem;
      line-height: 1.2;
      border-radius: 0.2rem;
  }
  .bg-white {
      background-color: #fff !important;
  }
  .border-white {
      border-color: #fff !important;
  }
  .rounded-top {
      border-top-left-radius: 0.25rem !important;
  }
  .rounded-top {
      border-top-right-radius: 0.25rem !important;
  }
  .rounded-bottom {
      border-bottom-right-radius: 0.25rem !important;
  }
  .rounded-bottom {
      border-bottom-left-radius: 0.25rem !important;
  }
  .rounded-circle {
      border-radius: 50% !important;
  }
  .d-none {
      display: none !important;
  }
  .d-block {
      display: block !important;
  }
  .d-flex {
      display: flex !important;
  }
  @media (min-width: 768px) {
      .d-md-block {
          display: block !important;
      }
  }
  .justify-content-end {
      justify-content: flex-end !important;
  }
  .justify-content-between {
      justify-content: space-between !important;
  }
  .align-items-end {
      align-items: flex-end !important;
  }
  .align-items-center {
      align-items: center !important;
  }
  .position-relative {
      position: relative !important;
  }
  .position-absolute {
      position: absolute !important;
  }
  .shadow-sm {
      box-shadow: 0 1px 3px rgba(3, 0, 71, 0.09) !important;
  }
  .mb-0 {
      margin-bottom: 0 !important;
  }
  .mr-2 {
      margin-right: 0.5rem !important;
  }
  .pt-2 {
      padding-top: 0.5rem !important;
  }
  .px-4 {
      padding-right: 1.5rem !important;
  }
  .pb-4 {
      padding-bottom: 1.5rem !important;
  }
  .px-4 {
      padding-left: 1.5rem !important;
  }
  .pt-16 {
      padding-top: 7.5rem !important;
  }
  .mt-n5 {
      margin-top: -2rem !important;
  }
  @media print {
      *,
      :after,
      :before {
          text-shadow: none !important;
          box-shadow: none !important;
      }
      a:not(.btn) {
          text-decoration: underline;
      }
      img {
          page-break-inside: avoid;
      }
      h2,
      p {
          orphans: 3;
          widows: 3;
      }
      h2 {
          page-break-after: avoid;
      }
  }
  .avatar-xl {
      width: 5rem;
      height: 5rem;
  }
  :focus {
      outline: 0;
  }
  h2 {
      letter-spacing: -0.022rem;
  }
  .lh-1 {
      line-height: 1;
  }
  .rounded-top {
      border-top-left-radius: 0.5rem !important;
  }
  .rounded-top {
      border-top-right-radius: 0.5rem !important;
  }
  .rounded-bottom {
      border-bottom-right-radius: 0.5rem !important;
  }
  .rounded-bottom {
      border-bottom-left-radius: 0.5rem !important;
  }
  .border-width-4 {
      border: 4px solid;
  }
  @media (max-width: 576px) {
      .rounded-none.rounded-bottom {
          border-bottom-right-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
      }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
      .rounded-none.rounded-bottom {
          border-bottom-right-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
      }
  }
  .top-0 {
      top: 0;
  }
  .right-0 {
      right: 0;
  }
  </style>