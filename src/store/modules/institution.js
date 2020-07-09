import axios from 'axios';


export default {
    namespaced : true,
    state: {
        institutionsArray : []
  },
  mutations: {
    getInstitution(state,response){
        state.institutionsArray = response.data;
    }
  },
  actions: {
    loadInstitutions({ commit }, serachText) {
        var searchQuery = "";

        if(serachText != "" && serachText != null)
            searchQuery = "?SearchQuery="+serachText;

        return new Promise((resolve, reject) => {
            axios({ url: process.env.VUE_APP_SERVER_API + '/institutions'+ searchQuery, method: 'GET' })
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


