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
        var dataBody =
        {
                "code": (institutionRecord.code !==null) ? institutionRecord.code:"",
                "nameFr": (institutionRecord.frenchName !==null) ? institutionRecord.frenchName:"",
                "nameAr": (institutionRecord.arabicName !==null) ? institutionRecord.arabicName:"",
                "nameEn": (institutionRecord.englishName !==null) ? institutionRecord.englishName:"",
                "address": {
                    "streetFr": (institutionRecord.streetFr !==null) ? institutionRecord.streetFr:"",
                    "streetAr": (institutionRecord.streetAr !==null) ? institutionRecord.streetAr:"",
                    "cityFr": (institutionRecord.cityFr !==null) ? institutionRecord.cityFr:"",
                    "cityAr": (institutionRecord.cityAr !==null) ? institutionRecord.cityAr:"",
                    "countryFr": institutionRecord.countryFr[0],
                    "countryAr":institutionRecord.countryAr[0],
                    "longitude": (institutionRecord.longitude !==null) ? institutionRecord.longitude:"",
                    "latitude": (institutionRecord.latitude !==null) ? institutionRecord.latitude:"",
                },
                "contactInfo": {
                    "email": (institutionRecord.email !==null) ? institutionRecord.email:"",
                    "phone": (institutionRecord.phone !==null) ? institutionRecord.phone:"",
                    "fax": (institutionRecord.fax !==null) ? institutionRecord.fax:"",
                },
                "parentId" : "7A83F250-A04A-90B9-60C9-795A1EF0F942"
            };

        return new Promise((resolve, reject) => {

             axios({ "url": process.env.VUE_APP_SERVER_API + "/institutions", method: "POST" , data: dataBody
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