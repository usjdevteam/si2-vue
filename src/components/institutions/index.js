import { mapState, mapActions } from '../../../node_modules/vuex';

export default {
    name: 'index',
    data() {
        return {
            formAddInstitution: null
        }
    },
    created(){
        this.insertInstitution(null);
    },
    computed: {
        ...mapState({institutions : state => state.institution.institutionsSet})
    },
    methods: {
        ...mapActions('institution', ['insertInstitution']),
        async insertInstitution() {
            await this.insertInstitution(this.formAddInstitution).then(() => alert("Inserted")).catch(() => alert("Failed"));
        }
    },
    mutations: {
        newInstitution: (state, institution) => state.institutions.unshift(institution)
    }
}
