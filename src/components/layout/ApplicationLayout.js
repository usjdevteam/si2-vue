export default {
    name: 'Application',
    props: {
        source: String,
      },
      data: () => ({
        drawer: null,
        
      }),
    //   methods: {
    //     logout() {
    //       this.$store.dispatch("logout").then(() => {
    //         this.$router.push("/home");
    //       });
    //     }
    //   }
}