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
      },
      // isPreviousButtonDisabled() {
      //   return this.pageInstitutionOption.pageNumber === 1
      // },
      // isNextButtonDisabled() {
      //   return this.pageInstitutionOption.pageNumber === this.pageCount
      // }

    },
    data () {
      return {
        loading : false,
        pageInstitutionOption :{
          institutionSearchText : "",
          pageNumber : 1
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

        if (pageNumber < 1 || pageNumber > this.institutions.pagination.totalPages) return;

        this.loading=true;
        this.pageInstitutionOption.pageNumber = pageNumber;
        await this.
        loadInstitutions (this.pageInstitutionOption)
          .then(() => console.log("success"))
          .catch(() => console.log("f") );
          this.loading=false;
      },
      isActivePage(pageNumber){
        var result =  false;

        if (pageNumber == this.pageInstitutionOption.pageNumber ) result = true;

        return result;
      },
      showPageNumber(pageNumber){
        var result =  false;

        var minNumber = this.pageInstitutionOption.pageNumber - 1;
        var maxNumber = this.pageInstitutionOption.pageNumber + 1;

        var specialCaseNumber = null;

        switch (this.pageInstitutionOption.pageNumber) {
          case 1:
            specialCaseNumber = 3;
            break;
            case this.institutions.pagination.totalPages:
              specialCaseNumber = this.institutions.pagination.totalPages - 2;
              break;
          default:
            break;
        }

        if (pageNumber == minNumber ||
            pageNumber == maxNumber ||
            pageNumber == this.pageInstitutionOption.pageNumber ||
            pageNumber == specialCaseNumber  ) result = true;
        
        return result;
      },
      addInstitution(){
        this.$router.push("/application/institutions/add");
      },
      viewInstitution(id){
        this.$router.push("/application/institutions/view/"+id );
      },
      editInstitution(id){
        this.$router.push("/application/institutions/edit/"+id );
      },
      gotoPageInstutionTable(direction){
        var pNumber = this.pageInstitutionOption.pageNumber;
        switch (direction) {
          case 'prev':
            pNumber -= 1;
            break;
            case 'next':
              pNumber += 1;
              break;
          default:
            break;
        }
        this.paginate(pNumber)
      }
    }
  }