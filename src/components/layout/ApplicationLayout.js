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
        goTo(section){
          switch (section) {
            case 'institutions':
              this.$router.push("/application/institutions");

              break;
          
            default:
              break;
          }

        },
        isActiveTab(){
          var path = this.$route.path;
          switch (path) {
            case '/application/home':
              return 0
            case '/application/institutions':
              return 1
            case '/application/institutions/add':
              return 2
              
            default:
              break;
          }
        },
        goToHomePage(){
          this.$router.push("/application/home");
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