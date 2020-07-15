import { mapActions } from '../../../node_modules/vuex';
//import { mapState } from '../../../node_modules/vuex';


import { validationMixin } from '../../../node_modules/vuelidate'
const { required, email,minLength } = require('../../../node_modules/vuelidate/lib/validators')


export default {
  name: 'SignIn',
  mixins: [validationMixin],
  data: () => ({
    formLoginData : {
      successLogin:  null
    },
  }),
  validations: {
    formLoginData :{
      email :{
        required,
        email
      },
      password :{
        required,
        minLength: minLength( )
      }
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.formLoginData.email.$dirty) return errors
      !this.$v.formLoginData.email.email && errors.push('Must be valid e-mail')
      !this.$v.formLoginData.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.formLoginData.password.$dirty) return errors
      !this.$v.formLoginData.password.minLength && errors.push('Password must be at least 8 characters long')
      !this.$v.formLoginData.password.required && errors.push('Password is required')
      return errors
    },
    getRealDate(){
      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      return dateTime
    }  
  },
  methods : {
    ...mapActions('session',['login']),
    async signIn() {

      this.$v.$touch() //it will validate all fields
      if (this.$v.$invalid) { //invalid, becomes true when a validations return false
       //you dont have validation error.So do what u want to do here
       return;
      }

      await this.
        login (this.formLoginData)
        .then(() => this.$router.push("/application/home"))
        .catch(() => this.formLoginData.successLogin = false );
    }
  } 
}
