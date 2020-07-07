<template>
  <v-app>
     <v-navigation-drawer  
        fixed
        absolute permanent
        class="u-sideMenu" >
        <ApplicationSideMenu />
      </v-navigation-drawer>

     <ApplicationBar />

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-footer app>
        <!-- -->
      </v-footer>
  </v-app>
</template>

<script src="./ApplicationLayout.js"> </script>

<style lang="scss">
    @import "../../../src/assets/styles/components/ApplicationLayout";
</style>
