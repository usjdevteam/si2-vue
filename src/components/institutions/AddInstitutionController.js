import { mapActions } from 'vuex';
import { mapState } from 'vuex';
import { validationMixin } from '../../../node_modules/vuelidate';
import { countries } from '../institutions/ListCountries.js';
const { required, email, maxLength, decimal, minValue, maxValue, /*phone, numeric */ } = require('../../../node_modules/vuelidate/lib/validators')

export default {
  name: 'AddInstitution',
  mixins: [validationMixin],
  data () {
    return {
      institution :   {
        code: null,
        nameFr: null,
        nameAr: null,
        nameEn: null,
        address: {
            streetFr: null,
            streetAr: null,
            cityFr: null,
            cityAr: null,
            countryFr:null,
            countryAr:null,
            longitude: 0.0,
            latitude: 0.0,
        },
        contactInfo: {
            email: null,
            phone: null,
            fax: null,
        }
      },
        countryList: [
        ],
        countryArList: [
        ],
        position: null
    }
  },
  props: ['institutionid'],
  created() {
  },  
  validations: {
        institution :{
          nameFr :{
            required,
            maxLength: maxLength(400)
          },
          nameEn :{
            required,
            maxLength: maxLength(400)
          },
          nameAr :{
            required,
            maxLength: maxLength(400)
          },
          code :{
            required,
            maxLength: maxLength(6)
          },
        address :{
          countryAr :{
            maxLength: maxLength(50)
          },
          cityAr :{
            maxLength: maxLength(50)
          },
          streetAr :{
            maxLength: maxLength(100)
          },
          countryFr :{
            required,
            maxLength: maxLength(50)
          },
          cityFr :{
            required,
            maxLength: maxLength(50)
          },
          streetFr :{
            required,
            maxLength: maxLength(100)
          },
          latitude :{
            required,
            decimal,
            minValue: minValue(-90),
            maxValue: maxValue(90),
            maxLength: maxLength(9)
          },
          longitude :{
            required,
            decimal,
            minValue: minValue(-180),
            maxValue: maxValue(180),
            maxLength: maxLength(10)
          }
        },
        contactInfo : {
          email :{
            required,
            email
          },
          phone :{
            required,
            //phone,
            //numeric,
            maxLength: maxLength(30)
          },
          fax :{
            //numeric,
            maxLength: maxLength(30)
          }
        }
  } 
},	
beforeMount(){
  this.countryList = countries.countryList;
  this.countryArList = countries.countryArList;
}, 
mounted: function() {
  if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(
      position => {
         this.institution.address.latitude = (position.coords.latitude);
         this.institution.address.longitude = (position.coords.longitude);
      },
      error => {
         console.log(error.message);
      },
    )
  }
},

computed: {
    ...mapState( {institution : state => state.institution.institutionObject }),

    nameFrErrors () {
      const errors = []
      if (!this.$v.institution.nameFr.$dirty) return errors
      !this.$v.institution.nameFr.maxLength && errors.push('French name must be at max 400 characters long')
      !this.$v.institution.nameFr.required && errors.push('French name is required')

      return errors
    },
    nameEnErrors () {
      const errors = []
      if (!this.$v.institution.nameEn.$dirty) return errors
      !this.$v.institution.nameEn.maxLength && errors.push('English name must be at max 400 characters long')
      !this.$v.institution.nameEn.required && errors.push('English name is required')

      return errors
    },
    nameArErrors () {
      const errors = []
      if (!this.$v.institution.nameAr.$dirty) return errors
      !this.$v.institution.nameAr.maxLength && errors.push('Arabic name must be at max 400 characters long')
      !this.$v.institution.nameAr.required && errors.push('Arabic name is required')

      return errors
    },

    codeErrors () {
      const errors = []
      if (!this.$v.institution.code.$dirty) return errors
      !this.$v.institution.code.maxLength && errors.push('Code must be at max 6 characters long')
      !this.$v.institution.code.required && errors.push('Code is required')

      return errors
    },

    countryFrErrors () {
      const errors = []
      if (!this.$v.institution.address.countryFr.$dirty) return errors
      !this.$v.institution.address.countryFr.maxLength && errors.push('Country must be at max 50 characters long')
      !this.$v.institution.address.countryFr.required && errors.push('Country is required')

      return errors
    },

    countryArErrors () {
      const errors = []
      if (!this.$v.institution.address.countryAr.$dirty) 
          return errors
      !this.$v.institution.address.countryAr && errors.push('Field must be at max 50 characters long')

      return errors
    },
    cityFrErrors () {
      const errors = []
      if (!this.$v.institution.address.cityFr.$dirty) return errors
      !this.$v.institution.address.cityFr.maxLength && errors.push('City must be at max 50 characters long')
      !this.$v.institution.address.cityFr.required && errors.push('City is required')

      return errors
    },
    cityArErrors () {
      const errors = []
      if (!this.$v.institution.address.cityAr.$dirty) 
          return errors
      !this.$v.institution.address.cityAr && errors.push('Field must be at max 50 characters long')

      return errors
    },
    streetFrErrors () {
      const errors = []
      if (!this.$v.institution.address.streetFr.$dirty) return errors
      !this.$v.institution.address.streetFr.maxLength && errors.push('Street must be at max 100 characters long')
      !this.$v.institution.address.streetFr.required && errors.push('Street is required')

      return errors
    },
    streetArErrors () {
      const errors = []
      if (!this.$v.institution.address.streetAr.$dirty) return errors
      !this.$v.institution.address.streetAr.maxLength && errors.push('Street must be at max 100 characters long')

      return errors
    },
    latitudeErrors() {
      const errors = []
      if (!this.$v.institution.address.latitude.$dirty) return errors
      !this.$v.institution.address.latitude.maxLength && errors.push('Street must be at max 9 characters long')
      !this.$v.institution.address.latitude.required && errors.push('Latitude is required')
      !this.$v.institution.address.latitude.decimal && errors.push('Latitude should be decimal')
      !this.$v.institution.address.latitude.minValue && errors.push('Latitude accepts at min -90 as value')
      !this.$v.institution.address.latitude.maxValue && errors.push('Latitude accepts at max 90 as value')

      return errors

    },
    longitudeErrors() {
      const errors = []
      if (!this.$v.institution.address.longitude.$dirty) return errors
      !this.$v.institution.address.longitude.maxLength && errors.push('Longitude must be at max 10 characters long')
      !this.$v.institution.address.longitude.required && errors.push('Longitude is required')
      !this.$v.institution.address.longitude.minValue && errors.push('Longitude accepts at min -180 as value')
      !this.$v.institution.address.longitude.maxValue && errors.push('Longitude accepts at max 180 as value')

      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.institution.contactInfo.phone.$dirty) return errors
      !this.$v.institution.contactInfo.phone.required && errors.push('Phone is required')
      !this.$v.institution.contactInfo.phone.maxLength && errors.push('Phone must be at max 30 characters long')
      //!this.$v.institution.contactInfo.phone.numeric && errors.push('Phone must only contain numbers')
      //!this.$v.institution.contactInfo.phone.phone && errors.push('Must be valid phone number')

      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.institution.contactInfo.email.$dirty) return errors
      !this.$v.institution.contactInfo.email.email && errors.push('Must be valid e-mail')
      !this.$v.institution.contactInfo.email.required && errors.push('E-mail is required')
      
      return errors
    },
    faxErrors () {
      const errors = []
      if (!this.$v.institution.contactInfo.fax.$dirty) return errors
      !this.$v.institution.contactInfo.fax.maxLength && errors.push('Fax must be at max 30 characters long')
      //!this.$v.institution.contactInfo.fax.numeric && errors.push('Fax must only contain numbers')

      return errors
    }
},
methods : {
    ...mapActions('institution',['addInstitution']),
    
    async insertNewInstitution() {

      this.$v.$touch() //it will validate all fields
      if (this.$v.$invalid) { //invalid, becomes true when a validations return false
       //you dont have validation error.So do what u want to do here
       return;
      }
      
      this.institution.address.countryFr = this.institution.address.countryFr[0];

      this.institution.address.streetAr = (this.institution.address.streetAr == undefined ? null :  this.institution.address.streetAr);
      this.institution.address.cityAr = (this.institution.address.cityAr == undefined ? null :  this.institution.address.cityAr);
      this.institution.address.countryAr = (this.institution.address.countryAr == undefined ? null :  this.institution.address.countryAr[0]);
      this.institution.address.fax = (this.institution.address.fax == undefined ? null :  this.institution.address.fax);

      await this.addInstitution(this.institution)
          .then(() => {alert("Institution successfully inserted"), 
                       window.location.reload()
                      })    // .then(() => this.$router.push("/application/viewinstution?id="+id ))
          .catch(() => {alert("Error in insertion") });
    }

  }
}
