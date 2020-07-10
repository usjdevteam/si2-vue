export default {
    name: 'Application',
    props: {
        source: String,
      },
      data: () => ({
        drawer: null,
        overlay: false,
        zIndex: -1,
      }),
    //   methods: {
    //     logout() {
    //       this.$store.dispatch("logout").then(() => {
    //         this.$router.push("/home");
    //       });
    //     }
    //   }
}