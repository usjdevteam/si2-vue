<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" app >
      <template>
        <v-card
          height="400"
          width="256"
          class="mx-auto"
        >
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Application
                </v-list-item-title>
                <v-list-item-subtitle>
                  subtext
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <span color="white">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-app-bar-nav-icon>
      </span>

      <v-toolbar-title class="grey--text">
        <span class="SI2Title SI2TitleSelector">SI2</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>


        <span>
          <Searchbar />
        </span>

      <span v-show="this.$store.getters.isLoggedIn">{{this.$store.state.userName}}</span>
      <router-link v-if="!this.$store.getters.isLoggedIn" to="/account/signin" tag="button">
        <v-btn text class="white">
          <span class="text-none">Sign In</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </router-link>
      <router-link v-if="!this.$store.getters.isLoggedIn" to="/account/signup" tag="button">
        <v-btn text class="white">
          <span class="text-none">Sign Up</span>
          <v-icon>add</v-icon>
        </v-btn>
      </router-link>
      <router-link v-if="this.$store.getters.isLoggedIn" to="/home" tag="button">
        <v-btn text class="white" @click="logout">
          <span class="text-none">Sign Out</span>
          <v-icon>power_settings_new</v-icon>
        </v-btn>
      </router-link>

      <v-btn icon href="https://www.facebook.com/usj.edu.lb/videos/890474227787534/">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
      </v-btn>
      <v-btn icon href="https://twitter.com/usjliban?lang=en">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
      </v-btn>
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
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>


  </v-app>
</template>

<script>

import SearchBar from '../components/SearchBar.vue';

export default {
  components: { SearchBar },
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
   .SI2Title {
      background: #C00000;
      border-radius: 5px;
      size: 25px;
      text-align: left;
      width: 38px;
      height: 34px;
      font-weight: 700;
      word-spacing: 32px;
      margin-right: 23px;
      margin-bottom: 9px;
   }

   .SI2TitleSelector {
      color: #FFFFFF;
      font-family: Playfair Display SC;
      font-size: 25px;
      line-height: 32px;
      text-align: left;
    }

</style>