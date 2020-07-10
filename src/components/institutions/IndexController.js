import { mapActions } from 'vuex';
// import { mapMutations } from 'vuex';
import { mapState } from 'vuex';


export default {
    name : 'InstitutionIndex',
    created(){
      this.loadInstitutions(this.pageInstitutionOption);
    },
    computed :{
      ...mapState( {institutions : state => state.institution.institutionsObject }),
      getNumberString (){
        var minNumber = 1 + (this.institutions.pagination.pageSize * (this.institutions.pagination.currentPage-1) ) ;
        var maxNumber = this.institutions.pagination.pageSize  + (this.institutions.pagination.pageSize*(this.institutions.pagination.currentPage - 1) )
        
        if(maxNumber > this.institutions.pagination.totalCount) maxNumber = this.institutions.pagination.totalCount;
        
        return minNumber+"-"+maxNumber + " of " + this.institutions.pagination.totalCount
      }

    },
    data () {
      return {
        loading : false,
        pageInstitutionOption :{
          institutionSearchText : "",
          pageNumber : null
        },

        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'nameFr',
          },
          { text: 'Code', value: 'code',sortable: false },
          { text: 'Address', value: 'full_address',sortable: false },
          { text: 'Phone', value: 'contactInfo.phone',sortable: false },
          { text: 'Email', value: 'contactInfo.email',sortable: false },
          { text: 'Edit', value: 'editRow',sortable: false },
        ],
      }
    },
    methods: {
      ...mapActions('institution',['loadInstitutions']),
      async searchInstitution(){

        // if(this.institutionSearchText == "" || this.institutionSearchText == null) return;
        
        await this.
        loadInstitutions (this.pageInstitutionOption)
          .then(() => console.log("success"))
          .catch(() => console.log("f") );
      },
      async paginate(pageNumber){
        this.loading=true;
        this.pageInstitutionOption.pageNumber = pageNumber;
        await this.
        loadInstitutions (this.pageInstitutionOption)
          .then(() => console.log("success"))
          .catch(() => console.log("f") );
          this.loading=false;
      },
      async viewInstitution(id){
        this.$router.push("/application/viewinstution?id="+id );
      }
    }
  }