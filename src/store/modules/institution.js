import axios from 'axios';


export default {
    namespaced : true,
    state: {
        institutionsObject : {
            data : [],
            pagination : {}
        }
  },
  mutations: {
    getInstitution(state,response){
        state.institutionsObject.data = response.data;
        state.institutionsObject.pagination = JSON.parse(response.headers['x-pagination']);
        state.institutionsObject.pagination.previouspage = state.institutionsObject.pagination.currentPage -1;
        state.institutionsObject.pagination.nextpage = state.institutionsObject.pagination.currentPage +1;
    }
  },
  actions: {
    loadInstitutions({ commit }, pageOption ) {
        // alert(pageNumber)
        var queryString = "?";

        if(pageOption.institutionSearchText != "" && pageOption.institutionSearchText != null)
            queryString += ("SearchQuery="+pageOption.institutionSearchText+"&");

        if(pageOption.pageNumber != null)
            queryString += ("pageNumber="+pageOption.pageNumber+"&");
           
        return new Promise((resolve, reject) => {
            axios({ url: process.env.VUE_APP_SERVER_API + '/institutions'+ queryString, method: 'GET' })
                .then(resp => {
                    commit('getInstitution',resp)
                    resolve(resp)
                })
                .catch(err => {
                    // commit('auth_error')
                    // localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    
    
  },
  getters: {

  }
        

}


