import { mapActions } from 'vuex';
import { mapState } from 'vuex';


export default {
  name: 'ViewInstitution',
  props: {'institutionid': String},
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
    editInstitution(){
      var id = this.$route.params.institutionid;
      this.$router.push("/application/institutions/edit/"+id );
    }
  } 
}
