<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

<script>
export default {
  name: "App",
  //components: { Navbar },
  data() {
    return {};
  },
  // created: function() {
  //   this.$http.interceptors.response.use(undefined, function(err) {
  //     return new Promise(function() {
  //       if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
  //         this.$store.dispatch("logout");
  //       }
  //       throw err;
  //     });
  //   });
  // }
};
</script>
