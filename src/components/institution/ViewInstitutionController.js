import { mapActions } from 'vuex';
import { mapState } from 'vuex';


export default {
  name: 'ViewInstitution',
  props: {'iinstitutionid': String},
  data: () => ({

  }),
  created() {
    this.getInstitutionById(this.$route.params.institutionid)
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
