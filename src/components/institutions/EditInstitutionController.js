import { mapActions } from 'vuex';
import { mapState } from 'vuex';
import { validationMixin } from '../../../node_modules/vuelidate'
const { required, email, maxLength, decimal, minValue, maxValue, /*phone, numeric */} = require('../../../node_modules/vuelidate/lib/validators')

export default {
  name: 'EditInstitution',
  mixins: [validationMixin],
  data () {
    return {
        countryList: [ 
        ],
        countryArList: [
        ]
    }
},
  props: ['institutionid'],
  created() {
    this.getInstitutionById(this.$route.params.institutionid)
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
beforeMount() {
  this.getCountryList(),
  this.getCountryArList()
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
    ...mapActions('institution',['getInstitutionById']),
    ...mapActions('institution',['editInstitution']),
    
    async updateInstitution() {

      this.$v.$touch()
      if (this.$v.$invalid) {
       return;
      }
    
      await this.editInstitution(this.institution)
          .then(() => alert("Institution successfully updated"))    // .then(() => this.$router.push("/application/viewinstution?id="+id ))
          .catch(() => alert("Error in updating") );
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