export default {
    name: 'ApplicationBar',
    data: () => ({
      drawer: null,
    }),
  
    methods: {
      logout() {
        this.$store.dispatch("logout").then(() => {
          this.$router.push("/home");
        });
      }
    }
};