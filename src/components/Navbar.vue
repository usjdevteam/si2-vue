<template>
  <v-app id="inspire">

    <v-app-bar app color="#031250">
      
        <v-toolbar-title>
          <span class="usj-SI2-Title-Header">SI2</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <span>
          <SearchBar />
        </span>

        <span>
          <v-img class="usj-question-Header"
                 :src="require('@/assets/images/questionmark.png')"
          ></v-img>
        </span>


        <span>
          <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-avatar >
                      <v-img
                          class="usj-avatar-Header"
                          :src="require('@/assets/images/avatar.png')"
                      ></v-img>
                    </v-avatar>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  @click="() => {}"
                >
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </span>
<!--
      <router-link to="/account/signin" tag="button">
        <v-btn text class="white">
          <span class="text-none">Sign In</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </router-link>
-->
  </v-app-bar>

  <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <!-- <v-icon large>mdi-code-tags</v-icon> -->
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    
    <!-- Side Menu -->
    <SideMenu />
        

  </v-app>
</template>

<script>

import SearchBar from '../components/SearchBar.vue';
import SideMenu from '../components/SideMenu.vue';

export default {
  components: { SearchBar, SideMenu },
  data() {
    return {
      drawer: false
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/home");
      });
    }
  }
};
</script> 

<style scoped>
   .usj-Header {
     color: #031250 !important;
   }

   .usj-SI2-Title-Header {
      background: #C00000;
      color: #FFFFFF;
      border-radius: 8px;
      width: 53px;
      height: 43px;
      background-position-x: 23px;
      background-position-y: 9px;
      font-size: 30px;
      font-weight: 700;
      font-family: Playfair Display SC;
      line-height: 32px;
      word-spacing: 32px;
     
   }

    .usj-avatar-Header {
      width: 48px;
      height: 48px;
      background-position-x: 1210px;
      background-position-y: 9px;
    }

    .usj-question-Header {
       width: 41px;
      height: 41px;
      background-position-x: 1148px;
      background-position-y: 11px;
    }
</style>