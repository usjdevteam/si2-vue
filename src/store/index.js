import Vue from 'vue';
import Vuex from 'vuex';

import sessionModule  from "./modules/session"
import institutionModule  from "./modules/institution"

Vue.use(Vuex);

export default new Vuex.Store({
 modules :{
    session :sessionModule,
    institution :institutionModule
 }
});