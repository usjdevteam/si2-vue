import axios from 'axios';


export default {
    namespaced : true,
    state: {
        institutionsObject : {
            data : [],
            pagination : {}
        },
        institutionObject : {}
  },
  mutations: {
    getInstitutions(state,response){

        state.institutionsObject.data = response.data;
        state.institutionsObject.pagination = JSON.parse(response.headers['x-pagination']);
        state.institutionsObject.pagination.previouspage = state.institutionsObject.pagination.currentPage -1;
        state.institutionsObject.pagination.nextpage = state.institutionsObject.pagination.currentPage +1;
    },
    getInstitution(state,response){
        state.institutionObject = response.data;
    }
  },
  actions: {
    loadInstitutions({ commit }, pageOption ) {
        var queryString = "?";

        if(pageOption.institutionSearchText != "" && pageOption.institutionSearchText != null)
            queryString += ("SearchQuery="+pageOption.institutionSearchText+"&");

        if(pageOption.pageNumber != null)
            queryString += ("pageNumber="+pageOption.pageNumber+"&");
           
        return new Promise((resolve, reject) => {
            axios({ url: process.env.VUE_APP_SERVER_API + '/institutions/'+ queryString, method: 'GET',
                // headers: {
                //     "Accept-version": "v1"
                // }
            })
                .then(resp => {
                    commit('getInstitutions',resp)
                    resolve(resp)
                })
                .catch(err => {
                    // commit('auth_error')
                    // localStorage.removeItem('token')
                    reject(err)
                })
        })
    },

    getInstitutionById({ commit }, institutionId ) {
                           
        return new Promise((resolve, reject) => {
            axios({ url: process.env.VUE_APP_SERVER_API + '/institutions/'+ institutionId+"/", method: 'GET' })
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
        addInstitution({ commit }, institutionRecord) {

        return new Promise((resolve, reject) => {

             axios({ "url": process.env.VUE_APP_SERVER_API + "/institutions", method: "POST" , data: institutionRecord/*dataBody*/
                })    
                .then(resp => {
                    
                    /*commit('getInstitution',resp)*/
                    resolve(resp)
                    commit(resp);
                })
                .catch(err => {
                    reject(err)
                })
            })
    },
        editInstitution({ commit }, institutionRecord) {

        return new Promise((resolve, reject) => {

            axios({ "url": process.env.VUE_APP_SERVER_API + "/institutions/" + institutionRecord.id + "/", method: "PUT" , data: institutionRecord
               })    
               .then(resp => {
                   
                   /*commit('getInstitution',resp)*/
                   resolve(resp)
                   commit(resp);
               })
               .catch(err => {
                   reject(err)
               })
           })
   },

    
  },
  getters: {

  }
}
