//import { mapActions } from '../../../node_modules/vuex';
import { validationMixin } from '../../../node_modules/vuelidate'
const { required, /*email,*/minLength } = require('../../../node_modules/vuelidate/lib/validators')

export default {
  name: 'AddInstitution',
  mixins: [validationMixin],
  data: () => ({
    formAddInsitution : {
        frenchName : "",
        arabicName : "",
        code : "",
        countryFr : "",
        countryAr : "",
        cityFr : "",
        cityAr : "",
        streetFr : "",
        streetAr : "",
        latitude : "",
        longitude : "",
        email : "",
        phone : "",
        fax : ""
    },
  }),
validations: {
    formAddInstitution :{
      frenchName :{
        required,
        minLength: minLength(8)
      }
    }
},	
computed: {
    propertyErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.frenchName.$dirty) return errors
      !this.$v.formAddInstitution.frenchName.required && errors.push('Name is required')
      return errors
    },
},
methods : {
   // ...mapActions('institution',['insertInstitution']),
   /* async insertNewInstitution() {

      this.$v.$touch() //it will validate all fields
      if (this.$v.$invalid) { //invalid, becomes true when a validations return false
       //you dont have validation error.So do what u want to do here
       return;
      }

      await this.insertInstitution(this.formAddInstitution)
        .then(() => this.$router.push("/application/home"))     //  /application/viewInstitution
        .catch(() => this.formLoginData.successAddition = false );
    }
    */
  } 
}
