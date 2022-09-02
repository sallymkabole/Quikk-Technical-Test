<template>
  <v-layout>
    <v-layout column>
      <v-layout column style=" z-index: 2;
  position: relative;">
        <span class="">
         
          <v-toolbar  flat height="100%" class="navba" >
            
            <v-flex class="" xs6 sm6 md2 lg2>
              <div style="" class="d-flex flex-column logo my-auto">
                <a href="/"
              ><img alt="Avatar" class="logo" src="~assets/images/logo.png"
            /></a>
              </div>
            </v-flex>
            <v-flex xs12 sm12 md10 lg10 class=
            "">
              <div>
                <div style="
                  display: flex;
                  justify-content:flex-end;
                  width: 100%;
                " class="my-auto">
                  <a href="/" class="link-btn mr-4 black--text font-weight-bold pt-2">Top up</a>
                 
                 
                  <a href="/send" class="link-btn mr-4 black--text font-weight-bold pt-2"> Transact</a>

                 
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
        { text: 'Send', icon: 'mdi-share', to: "/send", },
        { text: 'Top Up', icon: 'mdi-upload', to: "/", },
        { text: 'Logout', icon: 'mdi-information', to: "/auth/login", },
        
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
