import { mapActions } from 'vuex';
import { mapState } from 'vuex';
import { validationMixin } from '../../../node_modules/vuelidate'
const { required, email, maxLength, decimal,minValue, maxValue } = require('../../../node_modules/vuelidate/lib/validators')

export default {
  name: 'AddInstitution',
  mixins: [validationMixin],
  data () {
    return {
        formAddInstitution :        {
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
              longitude: null,
              latitude: null,
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
        ]
        }
  },
  validations: {
    formAddInstitution :{
      frenchName :{
        required,
        maxLength: maxLength(400)
      },
      englishName :{
        required,
        maxLength: maxLength(400)
      },
      arabicName :{
        required,
        maxLength: maxLength(400)
      },
      code :{
        required,
        maxLength: maxLength(6)
      },
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
      },
      email :{
        required,
        email
      },
      phoneNb :{
        required,
        // phone,
        maxLength: maxLength(30)
      },
      fax :{
        maxLength: maxLength(30)
      }
    }
},	
beforeMount(){
  this.getCountryList(),
  this.getCountryArList()
},       
computed: {
    ...mapState( {institutions : state => state.institution.institutionsArray }),

    frenchNameErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.frenchName.$dirty) return errors
      !this.$v.formAddInstitution.frenchName.maxLength && errors.push('French name must be at max 400 characters long')
      !this.$v.formAddInstitution.frenchName.required && errors.push('French name is required')

      return errors
    },
    englishNameErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.englishName.$dirty) return errors
      !this.$v.formAddInstitution.englishName.maxLength && errors.push('Name must be at max 400 characters long')
      !this.$v.formAddInstitution.englishName.required && errors.push('Name is required')

      return errors
    },
    arabicNameErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.arabicName.$dirty) return errors
      !this.$v.formAddInstitution.arabicName.maxLength && errors.push('Name must be at max 400 characters long')
      !this.$v.formAddInstitution.arabicName.required && errors.push('Name is required')

      return errors
    },

    codeErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.code.$dirty) return errors
      !this.$v.formAddInstitution.code.maxLength && errors.push('Code must be at max 6 characters long')
      !this.$v.formAddInstitution.code.required && errors.push('Code is required')

      return errors
    },

    countryFrErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.countryFr.$dirty) return errors
      !this.$v.formAddInstitution.countryFr.maxLength && errors.push('Country must be at max 50 characters long')
      !this.$v.formAddInstitution.countryFr.required && errors.push('Country is required')

      return errors
    },

    countryArErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.countryAr.$dirty) 
          return errors
      !this.$v.formAddInstitution.countryAr && errors.push('Field must be at max 50 characters long')

      return errors
    },
    cityFrErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.cityFr.$dirty) return errors
      !this.$v.formAddInstitution.cityFr.maxLength && errors.push('City must be at max 50 characters long')
      !this.$v.formAddInstitution.cityFr.required && errors.push('City is required')

      return errors
    },
    cityArErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.cityAr.$dirty) 
          return errors
      !this.$v.formAddInstitution.cityAr && errors.push('Field must be at max 50 characters long')

      return errors
    },
    streetFrErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.streetFr.$dirty) return errors
      !this.$v.formAddInstitution.streetFr.maxLength && errors.push('Street must be at max 100 characters long')
      !this.$v.formAddInstitution.streetFr.required && errors.push('Street is required')

      return errors
    },
    streetArErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.streetAr.$dirty) return errors
      !this.$v.formAddInstitution.streetAr.maxLength && errors.push('Street must be at max 100 characters long')

      return errors
    },
    latitudeErrors() {
      const errors = []
      if (!this.$v.formAddInstitution.latitude.$dirty) return errors
      !this.$v.formAddInstitution.latitude.maxLength && errors.push('Street must be at max 9 characters long')
      !this.$v.formAddInstitution.latitude.required && errors.push('Latitude is required')
      !this.$v.formAddInstitution.latitude.minValue && errors.push('Latitude accepts at min -90 as value')
      !this.$v.formAddInstitution.latitude.maxValue && errors.push('Latitude accepts at max 90 as value')

      return errors

    },
    longitudeErrors() {
      const errors = []
      if (!this.$v.formAddInstitution.longitude.$dirty) return errors
      !this.$v.formAddInstitution.longitude.maxLength && errors.push('Longitude must be at max 10 characters long')
      !this.$v.formAddInstitution.longitude.required && errors.push('Longitude is required')
      !this.$v.formAddInstitution.longitude.minValue && errors.push('Longitude accepts at min -180 as value')
      !this.$v.formAddInstitution.longitude.maxValue && errors.push('Longitude accepts at max 180 as value')

      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.phoneNb.$dirty) return errors
      !this.$v.formAddInstitution.phoneNb.required && errors.push('phoneNb is required')
      !this.$v.formAddInstitution.phoneNb.maxLength && errors.push('Phone must be at max 30 characters long')
      // !this.$v.formAddInstitution.phoneNb.phone && errors.push('Must be valid phone number')

      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.email.$dirty) return errors
      !this.$v.formAddInstitution.email.email && errors.push('Must be valid e-mail')
      !this.$v.formAddInstitution.email.required && errors.push('E-mail is required')
      
      return errors
    },
    faxErrors () {
      const errors = []
      if (!this.$v.formAddInstitution.fax.$dirty) return errors
      !this.$v.formAddInstitution.fax.maxLength && errors.push('Fax must be at max 30 characters long')

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

      await this.addInstitution(this.formAddInstitution)
          .then(() => alert("Successfully inserted"))    // .then(() => this.$router.push("/application/viewinstution?id="+id ))
          .catch(() => alert("Failure") );
    },

    getCountryList() {
      this.countryList = [
                ["Afghanistan"],  
                ["Åland Islands"],
                ["Albania"],
                ["Algeria"],
                ["American Samoa"],
                ["Andorra"],
                ["Angola"],
                ["Anguilla"],
                ["Antarctica"],
                ["Antigua and Barbuda"],
                ["Argentina"],
                ["Armenia"],
                ["Aruba"],
                ["Australia"],
                ["Austria"],
                ["Azerbaijan"],
                ["Bahamas"],
                ["Bahrain"],
                ["Bangladesh"],
                ["Barbados"],
                ["Belarus"],
                ["Belgium"],
                ["Belize"],
                ["Benin"],
                ["Bermuda"],
                ["Bhutan"],
                ["Bolivia"],
                ["Bosnia and Herzegovina"],
                ["Botswana"],
                ["Bouvet Island"],
                ["Brazil"],
                ["British Indian Ocean Territory"],
                ["Brunei Darussalam"],
                ["Bulgaria"],
                ["Burkina Faso"],
                ["Burundi"],
                ["Cambodia"],
                ["Cameroon"],
                ["Canada"],
                ["Cape Verde"],
                ["Cayman Islands"],
                ["Central African Republic"],
                ["Chad"],
                ["Chile"],
                ["China"],
                ["Christmas Island"],
                ["Cocos (Keeling) Islands"],
                ["Colombia"],
                ["Comoros"],
                ["Congo"],
                ["Congo, The Democratic Republic of The"],
                ["Cook Islands"],
                ["Costa Rica"],
                ["Cote D'ivoire"],
                ["Croatia"],
                ["Cuba"],
                ["Cyprus"],
                ["Czech Republic"],
                ["Denmark"],
                ["Djibouti"],
                ["Dominica"],
                ["Dominican Republic"],
                ["Ecuador"],
                ["Egypt"],
                ["El Salvador"],
                ["Equatorial Guinea"],
                ["Eritrea"],
                ["Estonia"],
                ["Ethiopia"],
                ["Falkland Islands (Malvinas)"],
                ["Faroe Islands"],
                ["Fiji"],
                ["Finland"],
                ["France"],
                ["French Guiana"],
                ["French Polynesia"],
                ["French Southern Territories"],
                ["Gabon"],
                ["Gambia"],
                ["Georgia"],
                ["Germany"],
                ["Ghana"],
                ["Gibraltar"],
                ["Greece"],
                ["Greenland"],
                ["Grenada"],
                ["Guadeloupe"],
                ["Guam"],
                ["Guatemala"],
                ["Guernsey"],
                ["Guinea"],
                ["Guinea-bissau"],
                ["Guyana"],
                ["Haiti"],
                ["Heard Island and Mcdonald Islands"],
                ["Holy See (Vatican City State)"],
                ["Honduras"],
                ["Hong Kong"],
                ["Hungary"],
                ["Iceland"],
                ["India"],
                ["Indonesia"],
                ["Iran, Islamic Republic of"],
                ["Iraq"],
                ["Ireland"],
                ["Isle of Man"],
                ["Israel"],
                ["Italy"],
                ["Jamaica"],
                ["Japan"],
                ["Jersey"],
                ["Jordan"],
                ["Kazakhstan"],
                ["Kenya"],
                ["Kiribati"],
                ["Korea, Democratic People's Republic of"],
                ["Korea, Republic of"],
                ["Kuwait"],
                ["Kyrgyzstan"],
                ["Lao People's Democratic Republic"],
                ["Latvia"],
                ["Lebanon"],
                ["Lesotho"],
                ["Liberia"],
                ["Libyan Arab Jamahiriya"],
                ["Liechtenstein"],
                ["Lithuania"],
                ["Luxembourg"],
                ["Macao"],
                ["Macedonia, The Former Yugoslav Republic of"],
                ["Madagascar"],
                ["Malawi"],
                ["Malaysia"],
                ["Maldives"],
                ["Mali"],
                ["Malta"],
                ["Marshall Islands"],
                ["Martinique"],
                ["Mauritania"],
                ["Mauritius"],
                ["Mayotte"],
                ["Mexico"],
                ["Micronesia, Federated States of"],
                ["Moldova, Republic of"],
                ["Monaco"],
                ["Mongolia"],
                ["Montenegro"],
                ["Montserrat"],
                ["Morocco"],
                ["Mozambique"],
                ["Myanmar"],
                ["Namibia"],
                ["Nauru"],
                ["Nepal"],
                ["Netherlands"],
                ["Netherlands Antilles"],
                ["New Caledonia"],
                ["New Zealand"],
                ["Nicaragua"],
                ["Niger"],
                ["Nigeria"],
                ["Niue"],
                ["Norfolk Island"],
                ["Northern Mariana Islands"],
                ["Norway"],
                ["Oman"],
                ["Pakistan"],
                ["Palau"],
                ["Palestinian Territory, Occupied"],
                ["Panama"],
                ["Papua New Guinea"],
                ["Paraguay"],
                ["Peru"],
                ["Philippines"],
                ["Pitcairn"],
                ["Poland"],
                ["Portugal"],
                ["Puerto Rico"],
                ["Qatar"],
                ["Reunion"],
                ["Romania"],
                ["Russian Federation"],
                ["Rwanda"],
                ["Saint Helena"],
                ["Saint Kitts and Nevis"],
                ["Saint Lucia"],
                ["Saint Pierre and Miquelon"],
                ["Saint Vincent and The Grenadines"],
                ["Samoa"],
                ["San Marino"],
                ["Sao Tome and Principe"],
                ["Saudi Arabia"],
                ["Senegal"],
                ["Serbia"],
                ["Seychelles"],
                ["Sierra Leone"],
                ["Singapore"],
                ["Slovakia"],
                ["Slovenia"],
                ["Solomon Islands"],
                ["Somalia"],
                ["South Africa"],
                ["South Georgia and The South Sandwich Islands"],
                ["Spain"],
                ["Sri Lanka"],
                ["Sudan"],
                ["Suriname"],
                ["Svalbard and Jan Mayen"],
                ["Swaziland"],
                ["Sweden"],
                ["Switzerland"],
                ["Syrian Arab Republic"],
                ["Taiwan, Province of China"],
                ["Tajikistan"],
                ["Tanzania, United Republic of"],
                ["Thailand"],
                ["Timor-leste"],
                ["Togo"],
                ["Tokelau"],
                ["Tonga"],
                ["Trinidad and Tobago"],
                ["Tunisia"],
                ["Turkey"],
                ["Turkmenistan"],
                ["Turks and Caicos Islands"],
                ["Tuvalu"],
                ["Uganda"],
                ["Ukraine"],
                ["United Arab Emirates"],
                ["United Kingdom"],
                ["United States"],
                ["United States Minor Outlying Islands"],
                ["Uruguay"],
                ["Uzbekistan"],
                ["Vanuatu"],
                ["Venezuela"],
                ["Viet Nam"],
                ["Virgin Islands, British"],
                ["Virgin Islands, U.S."],
                ["Wallis and Futuna"],
                ["Western Sahara"],
                ["Yemen"],
                ["Zambia"],
                ["Zimbabwe"]
      ];


      return this.countryList;
    },
    getCountryArList() {
      this.countryArList = [
                
                ["أفغانستان"],
                ["ألبانيا"],
                ["الجزائر"],
                ["أندورا"],
                ["أنغولا"],
                ["أنتيغوا وباربودا"],
                ["الأرجنتين"],
                ["أرمينيا"],
                ["أستراليا"],
                ["النمسا"],
                ["أذربيجان"],
                ["البهاما"],
                ["البحرين"],
                ["بنغلاديش"],
                ["باربادوس"],
                ["بيلاروسيا"],
                ["بلجيكا"],
                ["بليز"],
                ["بنين"],
                ["بوتان"],
                ["بوليفيا"],
                ["البوسنة والهرسك "],
                ["بوتسوانا"],
                ["البرازيل"],
                ["بروناي"],
                ["بلغاريا"],
                ["بوركينا فاسو "],
                ["بوروندي"],
                ["كمبوديا"],
                ["الكاميرون"],
                ["كندا"],
                ["الرأس الأخضر"],
                ["جمهورية أفريقيا الوسطى "],
                ["تشاد"],
                ["تشيلي"],
                ["الصين"],
                ["كولومبيا"],
                ["جزر القمر"],
                ["كوستاريكا"],
                ["ساحل العاج"],
                ["كرواتيا"],
                ["كوبا"],
                ["قبرص"],
                ["التشيك"],
                ["جمهورية الكونغو الديمقراطية"],
                ["الدنمارك"],
                ["جيبوتي"],
                ["دومينيكا"],
                ["جمهورية الدومينيكان"],
                ["تيمور الشرقية "],
                ["الإكوادور"],
                ["مصر"],
                ["السلفادور"],
                ["غينيا الاستوائية"],
                ["إريتريا"],
                ["إستونيا"],
                ["إثيوبيا"],
                ["فيجي"],
                ["فنلندا"],
              ["فرنسا"],
                ["الغابون"],
                ["غامبيا"],
                ["جورجيا"],
                ["ألمانيا"],
                ["غانا"],
                ["اليونان"],
                ["جرينادا"],
                ["غواتيمالا"],
                ["غينيا"],
                ["غينيا بيساو"],
                ["غويانا"],
                ["هايتي"],
                ["هندوراس"],
                ["المجر"],
                ["آيسلندا"],
                ["الهند"],
                ["إندونيسيا"],
                ["إيران"],
                ["العراق"],
                ["جمهورية أيرلندا "],
                ["فلسطين"],
                ["إيطاليا"],
                ["جامايكا"],
                ["اليابان"],
                ["الأردن"],
                ["كازاخستان"],
                ["كينيا"],
                ["كيريباتي"],
                ["الكويت"],
                ["قرغيزستان"],
                ["لاوس"],
                ["لاتفيا"],
                ["لبنان"],
                ["ليسوتو"],
                ["ليبيريا"],
                ["ليبيا"],
                ["ليختنشتاين"],
                ["ليتوانيا"],
                ["لوكسمبورغ"],
                ["مدغشقر"],
                ["مالاوي"],
                ["ماليزيا"],
                ["جزر المالديف"],
                ["مالي"],
                ["مالطا"],
                ["جزر مارشال"],
                ["موريتانيا"],
                ["موريشيوس"],
                ["المكسيك"],
                ["مايكرونيزيا"],
                ["مولدوفا"],
                ["موناكو"],
                ["منغوليا"],
                ["الجبل الأسود"],
                ["المغرب"],
                ["موزمبيق"],
                ["بورما"],
                ["ناميبيا"],
                ["ناورو"],
                ["نيبال"],
                ["هولندا"],
                ["نيوزيلندا"],
                ["نيكاراجوا"],
                ["النيجر"],
                ["نيجيريا"],
                ["كوريا الشمالية "],
                ["النرويج"],
                ["سلطنة عمان"],
                ["باكستان"],
                ["بالاو"],
                ["بنما"],
                ["بابوا غينيا الجديدة"],
                ["باراغواي"],
                ["بيرو"],
                ["الفلبين"],
                ["بولندا"],
                ["البرتغال"],
                ["قطر"],
                ["جمهورية الكونغو"],
                ["جمهورية مقدونيا"],
                ["رومانيا"],
                ["روسيا"],
                ["رواندا"],
                ["سانت كيتس ونيفيس"],
                ["سانت لوسيا"],
                ["سانت فنسينت والجرينادينز"],
                ["ساموا"],
                ["سان مارينو"],
                ["ساو تومي وبرينسيب"],
                ["السعودية"],
                ["السنغال"],
                ["صربيا"],
                ["سيشيل"],
                ["سيراليون"],
                ["سنغافورة"],
                ["سلوفاكيا"],
                ["سلوفينيا"],
                ["جزر سليمان"],
                ["الصومال"],
                ["جنوب أفريقيا"],
                ["كوريا الجنوبية"],
                ["جنوب السودان"],
                ["إسبانيا"],
                ["سريلانكا"],
                ["السودان"],
                ["سورينام"],
                ["سوازيلاند"],
                ["السويد"],
                ["سويسرا"],
                ["سوريا"],
                ["طاجيكستان"],
                ["تنزانيا"],
                ["تايلاند"],
                ["توغو"],
                ["تونجا"],
                ["ترينيداد وتوباغو"],
                ["تونس"],
                ["تركيا"],
                ["تركمانستان"],
                ["توفالو"],
                ["أوغندا"],
                ["أوكرانيا"],
                ["االإمارات العربية المتحدة"],
                ["المملكة المتحدة"],
                ["الولايات المتحدة"],
                ["أوروغواي"],
                ["أوزبكستان"],
                ["فانواتو"],
                ["فنزويلا"],
                ["فيتنام"],
                ["اليمن"],
                ["ززامبيا"],
                ["زيمبابوي"]

          ];

          return this.countryArList;
    },
  }
}
