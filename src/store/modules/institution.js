import axios from 'axios';
//import  index  from '../../../src/components/institutions/index'

export default {
    name: 'institution',
    /*modules :{
        index : index
     },*/
    state: {
        institutionsSet : []
    },
    mutations: {
        newInstitution (state, institution) {
            state.institutionsSet.unshift(institution.data);
        },
    },
    actions: {
        insertInstitution({ commit }) {
            commit('auth_request')
            /*const formData = new FormData();
            formData.append('nameFr', institutionsSet.frenchName);
            formData.append('nameEn', institutionsSet.englishName);*/

            /*const response = axios.post('/api/institutions', {frenchName, englishName}); // , {frenchName,englishName,..}
            commit('newInstitution',response.data);
            //.then(response => {})*/

            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    timeout: 0,
                    url: process.env.VUE_APP_SERVER_API + '/institutions',
                    data: {
                        code: 'esib',
                        nameFr: 'esib',
                        nameAr: '',
                        nameEn: ''
                      }
                    
                })
                .then((response) => {
                    console.log(response);
                    commit('newInstitution', response)
                        resolve(response)
                  }, (error) => {
                    console.log(error);
                    reject();
                  });
            })
        }
    }
}