export default {
    name: 'Application',
    props: {
        source: String,
      },
      data: () => ({
        drawer: null,
        overlay: false,
        zIndex: -1,
        menu: false
      }),
      methods: {
    //     logout() {
    //       this.$store.dispatch("logout").then(() => {
    //         this.$router.push("/home");
    //       });
    //     },
        routePages(section){
          switch (section) {
            case 'institutions':
              this.$router.push("/application/institutions");

              break;
              case 'institutions/add':
              this.$router.push("/application/institutions/add");

              break;
          
            default:
              break;
          }

        }
        
      },
      watch: {
      // whenever question changes, this function will run
      menu: function (newMenu) {
        if(newMenu == true)
          this.overlay = true;
        else
          this.overlay = false;
      }
    }
}