export default {
    name: 'Application',
    props: {
        source: String,
      },
      data: () => ({
        drawer: null,
        
      }),
      methods: {
    //     logout() {
    //       this.$store.dispatch("logout").then(() => {
    //         this.$router.push("/home");
    //       });
    //     }
        goTo(section){
          switch (section) {
            case 'institutions':
              this.$router.push("/application/institutions");

              // this.$router.push({name: 'institutions'}) 
              break;
          
            default:
              break;
          }

        }
        
      }
}