export default {
    name: 'ApplicationBar',
    data() {
      return {
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