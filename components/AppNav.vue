<template>
  <v-layout>
    <v-layout column>
      <v-layout column style=" z-index: 2;
  position: relative;">
        <span class="">
          <v-navigation-drawer width="85%" app v-model="drawer" disable-resize-watcher>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-avatar size="26px">
                    <img alt="Avatar" src="~assets/images/bg.webp" />
                  </v-avatar>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Jane Doe</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap">janedoe1825@gmail.com</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn to="my-profile" fab icon>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    Jane Doe
                  </v-list-item-title>
                  <v-list-item-subtitle>janedoe1825@gmail.com</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i" :to="`${item.to}`">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          <v-toolbar  flat height="100%" class="navba" >
            <v-toolbar-side-icon class="hidden-md-and-up white--text" @click="drawer = !drawer">
              <v-icon color="000 ">mdi-menu</v-icon>
            </v-toolbar-side-icon>

            <v-flex xs6 sm6 md2 lg2>
              <div style="" class="d-flex flex-column logo my-auto">
                <a href="/"
              ><img alt="Avatar" class="logo" src="~assets/images/logo.png"
            /></a>
              </div>
            </v-flex>
            <v-flex xs12 sm12 md10 lg10 class="hidden-sm-and-down">
              <div>
                <div style="
                  display: flex;
                  justify-content:flex-end;
                  width: 90%;
                " class="my-auto">
                  <a href="/send" class="link-btn mr-4 black--text font-weight-bold pt-2">Send Money</a>
                 
                 
                  <a href="/" class="link-btn mr-4 black--text font-weight-bold pt-2"> History</a>

                 
                </div>
              </div>
            </v-flex>

          
          </v-toolbar>
        </span>
      </v-layout>
    
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  name: "AppNav",
  data() {
    return {
      drawer: false,
      group: null,
      selectedItem: 0,
      items: [
        { text: 'Home', icon: 'mdi-home', to: "/", },
        { text: 'Send', icon: 'mdi-share', to: "/sendg", },
        { text: 'Top Up', icon: 'mdi-upload', to: "/to", },
        { text: 'Transact', icon: 'mdi-cash', to: "/blog", },
        { text: 'Logout', icon: 'mdi-information', to: "/about-us", },
        
      ],
    };
  },
}
</script>

<style scoped>
.nav {
  display: flex;

  width: 100vw;
  background-color: #7c69ef;
}
.navba{
  background-image: url(assets/images/bg.svg);
  background-size: cover;

}

.hr-text-logo {
  line-height: 0.5em;
  position: relative;
  outline: 0;
  border: 0;
  color: #7c69ef;
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
  background-color: #7c69ef;
  color: white;
  text-decoration: none;
}

li a:hover {
  background-color: #7c69ef;
  color: white;
  text-decoration: none;
}

@media screen and (max-width: 300px) {
  .search-container .search-container-icon {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .link-btn {
    width: 10px;
    font-size: 10px;
    font-weight: bold;
  }

  .signup-btn {
    width: 10px;
    font-size: 10px;
    font-weight: bold;
  }

  .login-btn {
    width: 10px;
    font-size: 10px;
    font-weight: bold;
  }

  .logo {
    font-size: 15px;
    font-weight: bold;
    margin: 0 auto;
  }

  .search-container {
    display: flex;
  }

  .nav {
    display: flex;
    width: 100vw;
  }

  .search-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 5px;
    width: 100%;
    margin: 0 auto;

  }

  .search-container input[type=text] {
    padding: 6px;
    margin-top: 8px;
    font-size: 15px;
    border: none;
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    border-radius: 50px;
    height: 30px;
    display: none;
  }
}

@media screen and (min-width: 600px) {
  .search-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 5px;
    width: 100%;
    margin: 0 auto;

  }

  .search-container input[type=text] {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    border-radius: 50px;

  }

  .search-container .search-container-icon {
    display: none;
  }
}
</style>
