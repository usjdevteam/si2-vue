import axios from 'axios';

export default {
    namespaced : true,
    state: {
        institutionsObject : {
            data : [],
            pagination : {}
        },
        dataBody : []
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
    addInstitution({ commit }, institutionRecord) {
        /*var dataBody =
        {
                "code": institutionRecord.code,
                "nameFr": institutionRecord.frenchName,
                "nameAr": institutionRecord.arabicName,
                "nameEn": institutionRecord.englishName,
                "address": {
                    "streetFr": institutionRecord.streetFr,
                    "streetAr": (institutionRecord.streetAr == undefined ? null : institutionRecord.streetAr[0]),
                    "cityFr": institutionRecord.cityFr,
                    "cityAr": (institutionRecord.cityAr == undefined ? null : institutionRecord.cityAr[0]),
                    "countryFr": institutionRecord.countryFr[0],
                    "countryAr": (institutionRecord.countryAr == undefined ? null : institutionRecord.countryAr[0]),
                    "longitude": institutionRecord.longitude,
                    "latitude": institutionRecord.latitude,
                },
                "contactInfo": {
                    "email": institutionRecord.email,
                    "phone": institutionRecord.phoneNb,
                    "fax": (institutionRecord.fax == undefined ? null : institutionRecord.fax[0]),
                },
                //"parentId" : "92A17842-A2B9-5F5D-161D-8CBC875BE0C4" //id for USJ institution
            };*/

        return new Promise((resolve, reject) => {

             axios({ "url": process.env.VUE_APP_SERVER_API + "/institutions", method: "POST" , data: institutionRecord/*dataBody*/
                })    
                .then(resp => {
                    
                    /*commit('getInstitution',resp)*/
                    resolve(resp)
                    commit(resp);
                    console.log(resp.data);
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