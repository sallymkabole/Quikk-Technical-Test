<template>
  <div>
    <v-app>
      

      <v-main>
        <v-container class=" ma-0 pa-0" fluid>
         <nuxt/>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  components: {
  },
  data() {
    return {
      items: [
        {
          action: "mdi-cash-multiple",
          items: [
            { title: "Reviews" },
            { title: "Disputes" },
            { title: "Top-ups" },
            { title: "Collected fees" },
            { title: "Transfers" },
            { title: "Payouts" },
            { title: "All transactions" },
          ],
          title: "Payments",
        },
      ],
      plist: [
        { title: "Balances", href: "/comp", icon: "mdi-swap-vertical" },
        {
          title: "Customers",
          href: "/customers",
          icon: "mdi-account-search-outline",
        },
        {
          title: "Connected Accounts",
          href: "/orders",
          icon: "mdi-account-supervisor-circle",
        },
        { title: "Product", href: "/product", icon: "mdi-archive" },
        { title: "Reports", href: "/reports", icon: "mdi-file-chart" },
        { title: "Developers", href: "/developers", icon: "mdi-cash-multiple" },
        {
          title: "View test data",
          href: "/view-test-data",
          icon: "mdi-toggle-switch-off-outline",
        },
        { title: "Settings", href: "/settings", icon: "mdi-cog-outline" },
      ],
    };
  },
};
</script>
<style scoped>
html {
  overflow-y: scroll;
}

h1 {
  position: static;
  width: 361px;
  height: 46px;
  left: 68px;
  top: 48px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  /* Grey 800 */

  color: #3c4257;
}
h2 {
  position: static;
  height: 17px;
  left: 0px;
  top: 0px;

  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Grey 800 */

  color: #3c4257;

  /* Inside Auto Layout */
}
.purple-text {
  color: #635cff;
}

.left-text {
  display: inline-block;
}
.right-text {
  float: right;
}

a {
  text-decoration: none;
  color: #697386;
  transition: 0.5s ease;
}
a:hover {
  color: #dfd3d3;
}
.pur {
  color: #635cff;
}
.top-btn {
  color: #3c4257 !important;
  text-transform: capitalize;
}
.top-btn1 {
  color: #fff !important;
  text-transform: capitalize;
}
.btn {
  color: #fff !important ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13.5px 10px;

  /* Purple */

  background: #635cff;
  border-radius: 5px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 28px 0px;
  text-transform: capitalize;
}

.v-text-field {
  width: 406px !important;
}
.v-text-field:hover {
  color: #b0d8f0 !important;
}
.hr {
  border-bottom: 1px solid #e3e8ee;
  width: 100%;
}
.grey-text{
    color: #1A1F36 !important;
}
</style>