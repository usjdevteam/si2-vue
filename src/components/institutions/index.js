import { mapActions } from 'vuex';
// import { mapMutations } from 'vuex';
import { mapState } from 'vuex';


export default {
    name : 'InstitutionIndex',
    created(){
      this.loadInstitutions(null);
    },
    computed :{
      ...mapState( {institutions : state => state.institution.institutionsArray }),
        // studentStoreArray(){
        //     return this.$store.state.studentStoreArray;
        // }
    },
    data () {
      return {
        institutionSearchText : "",
        // institutions : [],
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'nameFr',
          },
          { text: 'Code', value: 'code' },
          { text: 'Address', value: 'full_address' },
          { text: 'Phone', value: 'contactInfo.phone' },
          { text: 'Email', value: 'contactInfo.email' },
          { text: 'Edit', value: 'editRow' },
        ],
        //institutions : [{"id":"d4d5d179-9636-3ab8-60c0-12c90eb3428f","code":"UPTS","nameFr":"Université pour Tous - Branche du Liban Sud","nameAr":"جامعة للكلّ-فرع لبنان الجنوبي","nameEn":"University for All- Branch of Southern Lebanon","address":{"id":"da492319-393d-5168-d5cd-675a71e2b496","streetFr":"Sud","streetAr":"Sud","cityFr":"Sud","cityAr":"Sud","countryFr":"Sud","countryAr":"Sud","longitude":0.000000,"latitude":0.000000,"rowVersion":"AAAAAAAACC8="},"contactInfo":{"email":"ceuls@usj.edu.lb","phone":"01/421000","fax":"07/720069","rowVersion":"AAAAAAAACGY="},"parent":null,"rowVersion":"AAAAAAAACI4="},{"id":"50c9c18b-3827-6f48-563f-13fbadc9d324","code":"IET","nameFr":"Institut d'ergothérapie","nameAr":"معهد العلاج الإنشغالي  ","nameEn":"Institute of Occupational Therapy","address":{"id":"c7c1d93b-dafb-3850-378e-2ea6e2573f88","streetFr":"Beyrouth","streetAr":"Beyrouth","cityFr":"Beyrouth","cityAr":"Beyrouth","countryFr":"Beyrouth","countryAr":"Beyrouth","longitude":0.000000,"latitude":0.000000,"rowVersion":"AAAAAAAACA8="},"contactInfo":{"email":"iet@usj.edu.lb;: carla.abizeid@usj.edu.lb","phone":"01/421662 ","fax":"+961 421000","rowVersion":"AAAAAAAACEk="},"parent":null,"rowVersion":"AAAAAAAACI8="},{"id":"cb1afea1-65c2-3b82-3d49-15eba62cefa5","code":"ILO","nameFr":"Institut de lettres orientales","nameAr":"مَعْهَد الآداب الشَّرْقِيَّـة","nameEn":"Institute of Oriental Letters","address":{"id":"c7c1d93b-dafb-3850-378e-2ea6e2573f92","streetFr":"Beyrouth","streetAr":"Beyrouth","cityFr":"Beyrouth","cityAr":"Beyrouth","countryFr":"Beyrouth","countryAr":"Beyrouth","longitude":0.000000,"latitude":0.000000,"rowVersion":"AAAAAAAACBM="},"contactInfo":{"email":"ilo@usj.edu.lb","phone":"+961 (1) 421 000","fax":"+961 (1) 421 059","rowVersion":"AAAAAAAACEo="},"parent":null,"rowVersion":"AAAAAAAACJA="},{"id":"1f9a7a7d-e067-5c60-b324-16a1b2863425","code":"FGM","nameFr":"Faculté de gestion et de management","nameAr":"كُلِّيّة إدارة الأَعْمال والعِلم الإداري","nameEn":"Faculty of Business Administration and Management","address":{"id":"c7c1d93b-dafb-3850-378e-2ea6e2573f64","streetFr":"Beyrouth","streetAr":"Beyrouth","cityFr":"Beyrouth","cityAr":"Beyrouth","countryFr":"Beyrouth","countryAr":"Beyrouth","longitude":33.880860,"latitude":35.510915,"rowVersion":"AAAAAAAAB/Y="},"contactInfo":{"email":"fgm@usj.edu.lb","phone":"+961 (1) 421 418","fax":"+961 421000","rowVersion":"AAAAAAAACII="},"parent":null,"rowVersion":"AAAAAAAACJE="},{"id":"907f6d69-7a10-657a-838b-1a0387259bec","code":"CHDC","nameFr":"Chaire de Droit Continental","nameAr":"كرسيّ القانون القاريّ","nameEn":"Chair of Continental Law","address":{"id":"c7c1d93b-dafb-3850-378e-2ea6e2573f30","streetFr":"Beyrouth","streetAr":"Beyrouth","cityFr":"Beyrouth","cityAr":"Beyrouth","countryFr":"Beyrouth","countryAr":"Beyrouth","longitude":0.000000,"latitude":0.000000,"rowVersion":"AAAAAAAAB9Q="},"contactInfo":{"email":"usj@usj.edu.lb","phone":"+961 421000","fax":"+961 421000","rowVersion":"AAAAAAAACI0="},"parent":null,"rowVersion":"AAAAAAAACJI="},{"id":"73165240-2d6e-ac5a-fa35-1a5ae6dc0620","code":"LRE","nameFr":"Laboratoire de Recherche en Éducation","nameAr":"مختبر الأبحاث في التربية","nameEn":"Educational Research Laboratory","address":{"id":"da492319-393d-5168-d5cd-675a71e2b487","streetFr":"Beyrouth","streetAr":"Beyrouth","cityFr":"Beyrouth","cityAr":"Beyrouth","countryFr":"Beyrouth","countryAr":"Beyrouth","longitude":0.000000,"latitude":0.000000,"rowVersion":"AAAAAAAACCY="},"contactInfo":{"email":"usj@usj.edu.lb","phone":"+961(1)421000","fax":"+961 421000","rowVersion":"AAAAAAAACF0="},"parent":null,"rowVersion":"AAAAAAAACJM="},{"id":"7268a2a3-56c5-fa6c-b216-1bd094829560","code":"EDSHS","nameFr":"École doctorale - Sciences de l'homme et de la société","nameAr":"École doctorale - Sciences de l'homme et de la société","nameEn":"Doctoral School - Human and Society Sciences","address":{"id":"c7c1d93b-dafb-3850-378e-2ea6e2573f44","streetFr":"Beyrouth","streetAr":"Beyrouth","cityFr":"Beyrouth","cityAr":"Beyrouth","countryFr":"Beyrouth","countryAr":"Beyrouth","longitude":0.000000,"latitude":0.000000,"rowVersion":"AAAAAAAAB+I="},"contactInfo":{"email":"edshs@usj.edu.lb","phone":"+961 (1) 421 549","fax":"+961 421000","rowVersion":"AAAAAAAACG8="},"parent":null,"rowVersion":"AAAAAAAACJQ="},{"id":"4249026d-5786-de72-4efc-1c5bcd6fae7b","code":"STDB","nameFr":"École de traducteurs et d'interprètes - Branche de Dubaï","nameAr":"مدرسة الترجمة - فرع دبي","nameEn":"School of translators and interpreters-Dubai","address":{"id":"da492319-393d-5168-d5cd-675a71e2b491","streetFr":"Dubai","streetAr":"Dubai","cityFr":"Dubai","cityAr":"Dubai","countryFr":"Dubai","countryAr":"Dubai","longitude":0.000000,"latitude":0.000000,"rowVersion":"AAAAAAAACCo="},"contactInfo":{"email":"usj@usj.edu.lb","phone":"+961 421000","fax":"+961 421000","rowVersion":"AAAAAAAACFo="},"parent":null,"rowVersion":"AAAAAAAACJU="},{"id":"86e08cd7-bc06-ebed-fd8e-20c7215274b1","code":"ESIBN","nameFr":"École supérieure d'ingénieurs de Beyrouth - Branche du Liban Nord","nameAr":"مَعْهَد الهَنْدَسة العالِي في بَيروت - فرع لبنان الشمالي","nameEn":"Beirut Higher Institute for Engineering - Branch of North Lebanon","address":{"id":"c7c1d93b-dafb-3850-378e-2ea6e2573f52","streetFr":"Nord","streetAr":"Nord","cityFr":"Nord","cityAr":"Nord","countryFr":"Nord","countryAr":"Nord","longitude":0.000000,"latitude":0.000000,"rowVersion":"AAAAAAAAB+o="},"contactInfo":{"email":"usj@usj.edu.lb","phone":"+961 421000","fax":"+961 421000","rowVersion":"AAAAAAAACGk="},"parent":null,"rowVersion":"AAAAAAAACJY="},{"id":"4a8f939e-5c0f-65b4-7d27-23db78439280","code":"ESIAM","nameFr":"École supérieure d'ingénieurs d'agronomie méditerranéenne","nameAr":"مَعْهَد الهَنْدَسة الزراعيّة العالي لدُول البحر المتوسّط","nameEn":"School of Agricultural Engineering for Mediterranean Countries","address":{"id":"c7c1d93b-dafb-3850-378e-2ea6e2573f50","streetFr":"Zahlé","streetAr":"Zahlé","cityFr":"Zahlé","cityAr":"Zahlé","countryFr":"Zahlé","countryAr":"Zahlé","longitude":0.000000,"latitude":0.000000,"rowVersion":"AAAAAAAAB+g="},"contactInfo":{"email":"esiam@usj.edu.lb","phone":"+961 (8) 543 120/1","fax":"+961 (8) 542 522","rowVersion":"AAAAAAAACGE="},"parent":null,"rowVersion":"AAAAAAAACJc="}],
        // desserts: [
        //   {
        //     name: 'Frozen Yogurt',
        //     calories: 159,
        //     fat: 6.0,
        //     carbs: 24,
        //     protein: 4.0,
        //     iron: '1%',
        //   },
        //   {
        //     name: 'Ice cream sandwich',
        //     calories: 237,
        //     fat: 9.0,
        //     carbs: 37,
        //     protein: 4.3,
        //     iron: '1%',
        //   },
        //   {
        //     name: 'Eclair',
        //     calories: 262,
        //     fat: 16.0,
        //     carbs: 23,
        //     protein: 6.0,
        //     iron: '7%',
        //   },
        //   {
        //     name: 'Cupcake',
        //     calories: 305,
        //     fat: 3.7,
        //     carbs: 67,
        //     protein: 4.3,
        //     iron: '8%',
        //   },
        //   {
        //     name: 'Gingerbread',
        //     calories: 356,
        //     fat: 16.0,
        //     carbs: 49,
        //     protein: 3.9,
        //     iron: '16%',
        //   },
        //   {
        //     name: 'Jelly bean',
        //     calories: 375,
        //     fat: 0.0,
        //     carbs: 94,
        //     protein: 0.0,
        //     iron: '0%',
        //   },
        //   {
        //     name: 'Lollipop',
        //     calories: 392,
        //     fat: 0.2,
        //     carbs: 98,
        //     protein: 0,
        //     iron: '2%',
        //   },
        //   {
        //     name: 'Honeycomb',
        //     calories: 408,
        //     fat: 3.2,
        //     carbs: 87,
        //     protein: 6.5,
        //     iron: '45%',
        //   },
        //   {
        //     name: 'Donut',
        //     calories: 452,
        //     fat: 25.0,
        //     carbs: 51,
        //     protein: 4.9,
        //     iron: '22%',
        //   },
        //   {
        //     name: 'KitKat',
        //     calories: 518,
        //     fat: 26.0,
        //     carbs: 65,
        //     protein: 7,
        //     iron: '6%',
        //   },
        // ],
      }
    },
    methods: {
      ...mapActions('institution',['loadInstitutions']),
      async searchInstitution(){

        // if(this.institutionSearchText == "" || this.institutionSearchText == null) return;

        await this.
        loadInstitutions (this.institutionSearchText)
          .then(() => alert("success"))
          .catch(() => alert("f") );
      }
    }
  }