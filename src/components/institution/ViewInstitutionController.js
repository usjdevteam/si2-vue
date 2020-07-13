import { mapActions } from 'vuex';
import { mapState } from 'vuex';


export default {
  name: 'ViewInstitution',
  props: {'institutionid': String},
  data: () => ({

  }),
  created() {
    this.getInstitutionById(this.$route.params.institutionid)
    console.log(this.$route.params.institutionid)
  },
  mounted(){

  },
  computed: {
    ...mapState( {institution : state => state.institution.institutionObject }),
  },
  methods : {
    ...mapActions('institution',['getInstitutionById']),
  } 
}
